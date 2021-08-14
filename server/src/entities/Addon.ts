import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { HandPosition } from "./HandPosition";
import { InventoryItemType } from "./InventoryItemType";
import { Item } from "./Item";
import { ItemRarity } from "./ItemRarity";


@ObjectType()
@Entity({
  name: "addons"
})
export class Addon extends BaseEntity {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  AddonId: number;

  @Column()
  @Field({ simple: true })
  InternalId: string;

  @Column()
  @Field({ simple: true })
  DisplayName: string;

  @Column()
  @Field({ simple: true })
  Description: string;

  @Column()
  @Field(() => Int, { simple: true, nullable: false })
  HandPositionId: number;

  @Column()
  @Field(() => Int, { simple: true, nullable: false })
  ItemRarityId: number;

  @Column()
  @Field(() => Int, { simple: true, nullable: false })
  InventoryItemTypeId: number;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsAntiDLC: boolean;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsBloodweb: boolean;

  @Column()
  @Field(() => Boolean, { simple: true, nullable: false })
  IsChest: boolean;

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
  @Field()
  IconPath: string;

  @Column()
  @Field(() => String, { nullable: true })
  RequiredKillerAbility: string;

  @OneToOne(() => InventoryItemType)
  @JoinColumn({ name: "InventoryItemTypeId" })
  @Field(() => InventoryItemType, { nullable: false })
  InventoryItemType: InventoryItemType;

  @OneToOne(() => HandPosition)
  @JoinColumn({ name: "HandPositionId" })
  @Field(() => HandPosition, { nullable: false })
  HandPosition: HandPosition;

  @OneToOne(() => ItemRarity)
  @JoinColumn({ name: "ItemRarityId" })
  @Field(() => ItemRarity, { nullable: false })
  ItemRarity: ItemRarity;

  @ManyToMany(() => Item, i => i.Addons)
  @JoinTable({
    name: "itemaddonlinks",
    joinColumn: {
      name: "AddonId",
      referencedColumnName: "AddonId"
    },
    inverseJoinColumn: {
      name: "ItemId",
      referencedColumnName: "ItemId"
    }
  })
  Items: Item[];

}