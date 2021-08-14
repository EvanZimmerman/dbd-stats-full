import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Character } from "./Character";
import { StatMappingType } from "./StatMappingType";

@ObjectType()
@Entity({
  name: 'statmappings'
})
export class StatMapping extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  StatMappingId: number;

  @Field(() => Int, { simple: true })
  @Column()
  StatMappingTypeId: number;

  @Field(() => Int, { simple: true })
  @Column()
  CharacterId: number;

  @Field({ simple: true })
  @Column()
  InternalKey: string;

  @Field({ simple: true })
  @Column()
  Description: string;

  @OneToOne(() => StatMappingType)
  @JoinColumn({ name: 'StatMappingTypeId' })
  @Field(() => StatMappingType, { nullable: false })
  StatMappingType: StatMappingType;

  @OneToOne(() => Character)
  @JoinColumn({ name: 'CharacterId' })
  @Field(() => Character)
  Character: Character;

}



