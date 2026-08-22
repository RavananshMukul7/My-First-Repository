const WEIGHTS = {
  complexity: 0.4,
  evidence: 0.3,
  concepts: 0.2,
  confidence: 0.1
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function calculateEvidenceStrength(evidence) {
  const count = evidence.length;

  if (count === 0) return 0;
  if (count >= 10) return 100;

  return count * 10;
}

function calculateConceptDepth(concepts) {
  const count = concepts.length;

  if (count === 0) return 0;
  if (count >= 10) return 100;

  return count * 10;
}

function getLevel(score) {
  if (score <= 20) return "Beginner";
  if (score <= 40) return "Elementary";
  if (score <= 60) return "Intermediate";
  if (score <= 80) return "Advanced";

  return "Expert";
}

export function estimateProficiency(skills) {
  return skills.map((skill) => {
    const complexityScore = clamp(
      (skill.averageComplexity / 5) * 100,
      0,
      100
    );

    const evidenceScore = calculateEvidenceStrength(
      skill.evidence
    );

    const conceptScore = calculateConceptDepth(
      skill.concepts
    );

    const confidenceScore = clamp(
      skill.averageConfidence * 100,
      0,
      100
    );

    const finalScore =
      complexityScore * WEIGHTS.complexity +
      evidenceScore * WEIGHTS.evidence +
      conceptScore * WEIGHTS.concepts +
      confidenceScore * WEIGHTS.confidence;

    const score = Math.round(finalScore);

    return {
      skill: skill.skill,
      score,
      level: getLevel(score)
    };
  });
}
