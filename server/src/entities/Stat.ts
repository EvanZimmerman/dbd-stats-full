import { Field, Float, ObjectType } from "type-graphql";

import { Character } from "./Character";
import { StatMapping } from "./StatMapping";
import { StatMappingType } from "./StatMappingType";

@ObjectType()
export class Stat {

  @Field()
  name: string;

  @Field(() => Float)
  value: number;

  @Field(() => Character, { nullable: true })
  Character: Character;

  @Field(() => StatMappingType)
  StatMappingType: StatMappingType;

  @Field(() => StatMapping)
  StatMapping: StatMapping;
}