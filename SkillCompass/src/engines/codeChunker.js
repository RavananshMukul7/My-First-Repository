const DEFAULT_MAX_CHUNK_TOKENS = 6000;

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

function splitByLines(text, maxTokens) {
  const lines = text.split("\n");
  const chunks = [];

  let currentLines = [];
  let currentTokens = 0;

  for (const line of lines) {
    const lineTokens = estimateTokens(line);

    if (
      currentLines.length > 0 &&
      currentTokens + lineTokens > maxTokens
    ) {
      chunks.push(currentLines.join("\n"));
      currentLines = [];
      currentTokens = 0;
    }

    currentLines.push(line);
    currentTokens += lineTokens;
  }

  if (currentLines.length > 0) {
    chunks.push(currentLines.join("\n"));
  }

  return chunks;
}

export function chunkSourceCode(
  code,
  maxTokens = DEFAULT_MAX_CHUNK_TOKENS
) {
  if (!code?.trim()) {
    return [];
  }

  if (estimateTokens(code) <= maxTokens) {
    return [
      {
        index: 0,
        content: code,
        estimatedTokens: estimateTokens(code)
      }
    ];
  }

  return splitByLines(code, maxTokens).map(
    (content, index) => ({
      index,
      content,
      estimatedTokens: estimateTokens(content)
    })
  );
}