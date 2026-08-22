export function aggregateSkillEvidence(results) {
  const skillMap = new Map();

  for (const result of results) {
    const skills = result.analysis?.skills || [];

    for (const skillData of skills) {
      const skillName = skillData.skill.trim();

      if (!skillName) {
        continue;
      }

      if (!skillMap.has(skillName)) {
        skillMap.set(skillName, {
          skill: skillName,
          evidence: new Set(),
          concepts: new Set(),
          complexityScores: [],
          confidenceScores: [],
          occurrences: 0
        });
      }

      const skill = skillMap.get(skillName);

      skillData.evidence?.forEach((item) =>
        skill.evidence.add(item)
      );

      skillData.concepts?.forEach((item) =>
        skill.concepts.add(item)
      );

      if (typeof skillData.complexity === "number") {
        skill.complexityScores.push(skillData.complexity);
      }

      if (typeof skillData.confidence === "number") {
        skill.confidenceScores.push(
          normalizeScore(skillData.confidence)
        );
      }

      skill.occurrences++;
    }
  }

  return Array.from(skillMap.values()).map((skill) => ({
    skill: skill.skill,
    evidence: [...skill.evidence],
    concepts: [...skill.concepts],
    averageComplexity: average(skill.complexityScores),
    averageConfidence: average(skill.confidenceScores),
    occurrences: skill.occurrences
  }));
}

function average(values) {
  if (values.length === 0) {
    return 0;
  }

  return (
    values.reduce((sum, value) => sum + value, 0) /
    values.length
  );
}

function normalizeScore(value) {
  if (typeof value !== "number") {
    return 0;
  }

  if (value > 1 && value <= 100) {
    return value / 100;
  }

  return Math.min(Math.max(value, 0), 1);
}