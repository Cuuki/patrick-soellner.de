export const SKILL_FRAGMENT_GQL = `
  fragment SkillParts on Skill {
    sys {
      id
    }
    text
    rating
    group
    isTopSkill
  }
`;

export const CV_QUERY_GQL = `
  query cvEntryQuery($cvId: String!, $locale: String) {
    cv(id: $cvId, locale: $locale) {
      sys {
        id
      }
      title
      skillsCollection {
        items {
          ...SkillParts
        }
      }
    }
  }
`;
