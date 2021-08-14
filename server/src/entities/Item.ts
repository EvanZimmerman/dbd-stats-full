import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";

import { HandPosition } from "./HandPosition";
import { ItemRarity } from "./ItemRarity";
import { Addon } from "./Addon";

@ObjectType()
@Entity({
  name: "items"
})
export class Item extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  ItemId: number;

  @Column()
  @Field({ simple: true })
  DisplayName: string;

  @Column()
  @Field({ simple: true })
  Description: string;

  @Column()
  @Field(() => Int, { simple: true, nullable: false})
  HandPositionId: number;

  @Column()
  @Field(() => Int, { simple: true, nullable: false })
  ItemRarityId: number;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsAntiDLC: boolean;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsChest: boolean;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsBloodweb: boolean;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsInventory: boolean;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsAvailableInAtlantaBuild: boolean;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsInNonViolentBuild: boolean;

  @Column()
  @Field({ simple: true, nullable: true })
  IconPath: string;

  @Column()
  @Field({ simple: true, nullable: true })
  RequiredKillerAbility: string;

  @OneToOne(() => HandPosition)
  @JoinColumn({ name: "HandPositionId" })
  @Field(() => HandPosition, { nullable: false })
  HandPosition: HandPosition;

  @OneToOne(() => ItemRarity)
  @JoinColumn({ name: "ItemRarityId" })
  @Field(() => ItemRarity, { nullable: false })
  ItemRarity: ItemRarity;

  @ManyToMany(() => Addon, a => a.Items)
  @Field(() => [Addon], { nullable: true })
  Addons: Addon[];

  @Field(() => [Addon], { nullable: true })
  KillerAddons: Addon[];
  
}