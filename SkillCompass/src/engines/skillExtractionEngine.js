import fs from "fs/promises";
import path from "path";
import { chunkSourceCode } from "./codeChunker.js";
import { analyzeCodeChunk } from "../services/llmSkillService.js";
import { aggregateSkillEvidence } from "./skillEvidenceAggregator.js";
import { normalizeSkills } from "./skillNormalizer.js";

const SOURCE_EXTENSIONS = new Set([
  ".js", ".jsx", ".ts", ".tsx",
  ".py", ".java", ".c", ".cpp",
  ".cs", ".go", ".rs", ".rb",
  ".php", ".swift", ".kt",
  ".sql", ".html", ".css",
  ".scss", ".sass", ".vue",
  ".svelte"
]);

function isSourceFile(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  return SOURCE_EXTENSIONS.has(extension);
}

async function getSourceFiles(repositoryPath) {
  const files = [];

  async function walk(currentPath) {
    const entries = await fs.readdir(currentPath, {
      withFileTypes: true
    });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }

      if (isSourceFile(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  await walk(repositoryPath);

  return files;
}

export async function extractSkills(repositoryPath) {
  const files = await getSourceFiles(repositoryPath);
  const results = [];

  for (const filePath of files) {
    const sourceCode = await fs.readFile(
      filePath,
      "utf-8"
    );

    const chunks = chunkSourceCode(sourceCode);

    for (const chunk of chunks) {
      const analysis = await analyzeCodeChunk({
        repository: path.basename(repositoryPath),
        filePath: path.relative(repositoryPath, filePath),
        chunk: chunk.content
      });

      results.push({
        file: path.relative(repositoryPath, filePath),
        chunk: chunk.index,
        analysis
      });
    }
  }

    const aggregatedSkills =
    aggregateSkillEvidence(results);

    const normalizedSkills =
    normalizeSkills(aggregatedSkills);

    return {
      repository: path.basename(repositoryPath),
      skills: normalizedSkills,
      rawResults: results,

      analysisVersion: "v1",
      model: "qwen2.5-coder:7b",
      analysisTimestamp: new Date()
    };
}