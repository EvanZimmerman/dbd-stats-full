
import { Arg, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
const fetch = require('node-fetch');

import { StatMapping } from "../entities/StatMapping";
import { ParentPlayerStats } from "../entities/PlayerStat";
import { Stat } from "../entities/Stat";

@Resolver(ParentPlayerStats)
export class StatsResolver {

  url: string = 'https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/';
  // steamId: string = '76561198055161249';
  apiKey: string = '69270BD3B6CF43AAE94858FD9773E39C';
  appId: string = '381210';

  @Query(() => [Stat])
  async getStats(
    @Arg("steamId", { nullable: false }) steamId: string
  ): Promise<Stat[]> {
    const queryParamsUrl: string 
      = `${this.url}?key=${this.apiKey}&steamid=${steamId}&appid=${this.appId}`;
    const response = await fetch(queryParamsUrl);

    let stats: Stat[] = [];

    const parentStatObj: ParentPlayerStats
      = await response.json();

    const statMappingRepo = getRepository(StatMapping);

    const statMappings
      = await statMappingRepo.find({
          relations: ['StatMappingType', 'Character']
        });

    if (parentStatObj.playerstats && parentStatObj.playerstats.stats) {
      parentStatObj.playerstats.stats.forEach((s: Stat)=> {
        const statObj 
          = statMappings.find(sm => sm.InternalKey === s.name);
  
        if (statObj) {
          stats.push({
            name: statObj.Description,
            value: s.value,
            Character: statObj.Character,
            StatMappingType: statObj.StatMappingType,
            StatMapping: statObj
          })
        }
      });
    }

    return stats;
  }

  // @FieldResolver()
  // PlayerStats(@Root() parentPlayerStats: ParentPlayerStats): PlayerStat {

  //   const statMappingRepo = getRepository(StatMapping);

  //   console.log('hit');
  //   statMappingRepo.find().then((data) => {
  //     console.log(data)
  //   });
  //   const playerStat: PlayerStat = {
  //     steamID: parentPlayerStats.playerstats.steamID,
  //     gameName: parentPlayerStats.playerstats.gameName,
  //     stats: parentPlayerStats.playerstats.stats
  //   };
  //   return playerStat;
  // }
}