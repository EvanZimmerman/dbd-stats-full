import { BaseEntity, Entity, PrimaryColumn, Column, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

import { CharacterGender } from "../entities/CharacterGender";
import { CharacterHeight } from "../entities/CharacterHeight";
import { CharacterRole } from "./CharacterRole";
import { CharacterDifficulty } from "./CharacterDifficulty";
import { Perk } from "../entities/Perk";
import { Item } from "./Item";


@Entity({
  name: "characters"
})
@ObjectType()
export class Character extends BaseEntity {

  @PrimaryColumn()
  @Field(() => Int, { simple: true })
  CharacterId: number;

  @Column()
  @Field(() => Int, { simple: true })
  RoleId: number;

  @Column("varchar", { nullable: false })
  @Field({ nullable: false, simple: true })
  DisplayName: string;

  @Column()
  @Field(() => Int, { simple: true })
  HeightId: number;

  @Column()
  @Field(() => Int, { simple: true })
  GenderId: number;

  @Column()
  @Field(() => Int, { simple: true })
  DifficultyId: number;

  @Column({ nullable: true })
  @Field(() => Int, { simple: true, nullable: true })
  PowerItemId?: number;

  @Column()
  @Field(() => String, { simple: true })
  RequiredKillerAbility: string;

  @Column()
  @Field(() => String, { simple: true })
  Backstory: string;

  @Column()
  @Field({ simple: true })
  Biography: string;

  @Column()
  @Field({ simple: true })
  DLCIdString: string;

  @Column()
  @Field({ simple: true })
  InternalIdName: string;

  @Column()
  @Field({ simple: true })
  DefaultItem: string;

  @Column()
  @Field(() => Boolean, { simple: true })
  IsAvailableInNonViolentBuild: boolean;

  @Column()
  @Field({ simple: true })
  IsAvailableInAtlantaBuild: boolean;

  @Column()
  @Field({ simple: true })
  IsPlatformExclusive: boolean;

  @Column()
  @Field({ simple: true })
  IconPath: string;

  @OneToOne(() => CharacterGender)
  @JoinColumn({ name: "GenderId" })
  @Field(() => CharacterGender, { nullable: false })
  Gender: CharacterGender;

  @OneToOne(() => CharacterHeight)
  @JoinColumn({ name: "HeightId" })
  @Field(() => CharacterHeight, { nullable: false })
  Height: CharacterHeight;

  @OneToOne(() => CharacterRole)
  @JoinColumn({ name: "RoleId" })
  @Field(() => CharacterRole, { nullable: false })
  Role: CharacterRole;

  @OneToOne(() => CharacterDifficulty)
  @JoinColumn({ name: "DifficultyId" })
  @Field(() => CharacterDifficulty, { nullable: false })
  Difficulty: CharacterDifficulty;

  @OneToMany(() => Perk, perk => perk.Character)
  @Field(() => [Perk], { nullable: true })
  Perks?: Perk[];

  @OneToOne(() => Item)
  @JoinColumn({ name: "PowerItemId" })
  @Field(() => Item, { nullable: true })
  KillerPower: Item;
}