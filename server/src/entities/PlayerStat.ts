import { Field, ObjectType } from "type-graphql";
import { Stat } from "./Stat";

@ObjectType()
export class PlayerStat {

  @Field()
  steamID: string;

  @Field()
  gameName: string;

  @Field(() => [Stat])
  stats: Stat[];
}

@ObjectType()
export class ParentPlayerStats {
  @Field(() => PlayerStat)
  playerstats: PlayerStat;
}