import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Field, Int, ID, ObjectType } from "type-graphql";
import { Character } from "./Character";
import { PerkCategory } from "./PerkCategory";

@ObjectType()
@Entity({
  name: "perks"
})
export class Perk extends BaseEntity {

  @PrimaryGeneratedColumn()
  @Field(() => ID, { nullable: false })
  PerkId: number;

  @Column("varchar", { nullable: false })
  @Field({ nullable: false, simple: true})
  DisplayName: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true, simple: true })
  CharacterId: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true, simple: true })
  MandatoryOnBloodwebLevel: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true, simple: true })
  AtlantaTeachableLevel: number;

  @Column("longtext")
  @Field({ simple: true, nullable: false })
  Description: string;

  @Column("longtext")
  @Field({ simple: true })
  PerkUnlicensedDescriptionOverride: string;

  @Column()
  @Field({ simple: true })
  IconPath: string;

  @ManyToOne(() => Character, character => character.Perks)
  @JoinColumn({ name: "CharacterId" })
  @Field(() => Character, { nullable: true })
  Character?: Character;

  @ManyToMany(() => PerkCategory, pc => pc.Perks)
  @Field(() => [PerkCategory])
  PerkCategories: PerkCategory[];
}