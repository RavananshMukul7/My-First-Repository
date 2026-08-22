import { normalizeSkill } from "../services/skillTaxonomy.js";

const SKILL_ALIASES = {
  javascript: ["javascript", "js", "node.js", "nodejs"],
  python: ["python"],
  java: ["java"],
  "c++": ["c++", "cpp"],
  typescript: ["typescript", "ts"],
  react: ["react", "react.js", "reactjs"],
  angular: ["angular", "angular.js"],
  vue: ["vue", "vue.js"],
  sql: ["sql"],
  mongodb: ["mongodb", "mongo"],
  postgresql: ["postgresql", "postgres"],
  mysql: ["mysql"],
  docker: ["docker"],
  kubernetes: ["kubernetes", "k8s"],
  aws: ["aws", "amazon web services"],
  azure: ["azure", "microsoft azure"],
  gcp: ["gcp", "google cloud"]
};

function normalize(text) {
  return text
    .toLowerCase()
    .trim();
}

function skillsMatch(userSkill, requiredSkill) {
  const userSkillName =
    typeof userSkill === "string"
      ? userSkill
      : userSkill?.skill;

  const requiredSkillName =
    typeof requiredSkill === "string"
      ? requiredSkill
      : requiredSkill?.skill;

  if (
    typeof userSkillName !== "string" ||
    typeof requiredSkillName !== "string"
  ) {
    return false;
  }

  const userCanonical =
    normalizeSkill(userSkillName);

  const requiredCanonical =
    normalizeSkill(requiredSkillName);

  return (
    userCanonical.toLowerCase() ===
    requiredCanonical.toLowerCase()
  );
}

function calculateRequirementMatch(
  job,
  userSkills
) {
  const requirements =
    job.requiredSkills || [];

  if (requirements.length === 0) {
    return 0;
  }

  let totalWeight = 0;
  let matchedWeight = 0;

  for (const requirement of requirements) {
    const weight =
      requirement.importance === "mandatory"
        ? 2
        : 1;

    totalWeight += weight;

    const matched = userSkills.some(
      (userSkill) =>
        skillsMatch(
          userSkill,
          requirement
        )
    );

    if (matched) {
      matchedWeight += weight;
    }
  }

  return Math.round(
    (matchedWeight / totalWeight) * 100
  );
}

function calculateProficiencyMatch(
  job,
  userSkills
) {
  const matchedSkill =
    userSkills.find((skill) =>
      skillsMatch(
        skill.skill,
        job.matchedSkill
      )
    );

  return matchedSkill
    ? matchedSkill.proficiencyScore
    : 0;
}

function calculateTitleMatch(job) {
  const title =
    job.title?.toLowerCase() || "";

  const seniorKeywords = [
    "senior",
    "sr.",
    "lead",
    "principal",
    "architect",
    "manager"
  ];

  const isSeniorRole =
    seniorKeywords.some((keyword) =>
      title.includes(keyword)
    );

  return isSeniorRole ? 50 : 100;
}

export function rankJobs(
  jobs,
  userSkills
) {
  return jobs
    .map((job) => {
      const proficiencyMatch =
        calculateProficiencyMatch(
          job,
          userSkills
        );

      const requirementMatch =
        calculateRequirementMatch(
          job,
          userSkills
        );

      const experienceMatch =
        calculateTitleMatch(job);

      const score = Math.round(
        proficiencyMatch * 0.4 +
        requirementMatch * 0.4 +
        experienceMatch * 0.2
      );

      return {
        ...job,
        matchScore: score,
        matchingDetails: {
          proficiencyMatch,
          requirementMatch,
          experienceMatch
        }
      };
    })
    .sort(
      (a, b) =>
        b.matchScore - a.matchScore
    );
}