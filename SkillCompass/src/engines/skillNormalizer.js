const SKILL_ALIASES = {
  js: "JavaScript",
  javascript: "JavaScript",

  py: "Python",
  python: "Python",

  cpp: "C++",
  "c plus plus": "C++",

  java: "Java",
  "java programming": "Java",

  "async/await": "Asynchronous Programming",
  "async await": "Asynchronous Programming",

  oop: "Object-Oriented Programming",
  "object oriented programming":
    "Object-Oriented Programming",

  "array methods": "Array Methods",
  "error handling": "Error Handling",
  closures: "Closures"
};

function normalizeSkillName(skill) {
  const normalized = skill
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  return SKILL_ALIASES[normalized] || skill.trim();
}

export function normalizeSkills(skills) {
  const skillMap = new Map();

  for (const skill of skills) {
    const normalizedName = normalizeSkillName(skill.skill);

    if (!skillMap.has(normalizedName)) {
      skillMap.set(normalizedName, {
        skill: normalizedName,
        evidence: new Set(),
        concepts: new Set(),
        complexityScores: [],
        confidenceScores: [],
        occurrences: 0
      });
    }

    const existing = skillMap.get(normalizedName);

    skill.evidence?.forEach((item) =>
      existing.evidence.add(item)
    );

    skill.concepts?.forEach((item) =>
      existing.concepts.add(item)
    );

    if (typeof skill.averageComplexity === "number") {
      existing.complexityScores.push(
        skill.averageComplexity
      );
    }

    if (typeof skill.averageConfidence === "number") {
      existing.confidenceScores.push(
        skill.averageConfidence
      );
    }

    existing.occurrences += skill.occurrences || 0;
  }

  return [...skillMap.values()].map((skill) => ({
    skill: skill.skill,
    evidence: [...skill.evidence],
    concepts: [...skill.concepts],
    averageComplexity: average(skill.complexityScores),
    averageConfidence: average(skill.confidenceScores),
    occurrences: skill.occurrences
  }));
}

function average(values) {
  if (!values.length) {
    return 0;
  }

  return (
    values.reduce((sum, value) => sum + value, 0) /
    values.length
  );
}