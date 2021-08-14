import { gql } from "@apollo/client";

export const newsQuery = gql `
  query {
    getNews {
      appNews {
        appid
        newsitems {
          title
          contents
          date
        }
      }
    }
  }
`

export const charactersQuery = gql `
  query {
    characters {
      CharacterId
      DisplayName
      IconPath
      Role {
        Name
      }
    }
  }
`;

export const PERKS_QUERY = gql `
  query {
    perks {
      DisplayName
      IconPath
      Description
      Character {
        CharacterId
        DisplayName
        IconPath
      }
    }
  }
`;

export const offeringsQuery = gql `
  query {
    offerings {
      DisplayName
      Description
      IconPath
    }
  }
`;

export const statsQuery = (steamId) => {
  return gql
  `
    query {
      getStats(steamId:"${steamId}") {
        name
        value
        Character {
          IconPath
        }
        StatMappingType {
          StatMappingTypeName
        }
        StatMapping {
          InternalKey
        }
      }
    }
  `;
}

export const characterQuery = (id) => {
  return gql
  `
    query {
      character(id:${id}) {
        DisplayName
        Backstory
        Biography
        IconPath
        Gender {
          Name
        }
        Height {
          Name
        }
        Role {
          Name
        }
        Difficulty {
          Name
        }
        Perks {
          DisplayName
          Description
          IconPath
        }
        KillerPower {
          DisplayName
          Description
          IconPath
          KillerAddons {
            DisplayName
            Description
            IconPath
          }
        }
        
      }
    }
  `;
}
  
