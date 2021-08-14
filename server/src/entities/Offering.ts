import { Field, ID, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { CharacterRole } from "./CharacterRole";
import { ItemRarity } from "./ItemRarity";
import { OfferingType } from "./OfferingType";

@ObjectType()
@Entity({
  name: "offerings"
})
export class Offering extends BaseEntity {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  OfferingId: number;

  @Column("varchar", { nullable: false })
  @Field()
  InternalOfferingId: string;

  @Column("varchar", { nullable: false })
  @Field()
  DisplayName: string;

  @Column("varchar", { nullable: false })
  @Field()
  Description: string;

  @Column()
  @Field(() => Int, { nullable: false })
  OfferingTypeId: number;

  @Column()
  @Field(() => Int, { nullable: false })
  ItemRarityId: number;

  @Column()
  @Field(() => Int, { nullable: false })
  RoleId: number;

  @Column()
  @Field(() => Boolean)
  IsAntiDLC: boolean;

  @Column()
  @Field(() => Boolean)
  IsBloodweb: boolean;

  @Column()
  @Field(() => Boolean)
  IsUsableAfterEventEnd: boolean;

  @Column()
  @Field(() => Boolean)
  IsInventory: boolean;

  @Column()
  @Field(() => Boolean)
  IsAvailableInAtlantaBuild: boolean;

  @Column()
  @Field(() => Boolean)
  IsInNonViolentBuild: boolean;

  @Column()
  @Field()
  IconPath: string;

  @OneToOne(() => OfferingType)
  @JoinColumn({ name: "OfferingTypeId" })
  @Field(() => OfferingType, { nullable: false })
  OfferingType!: OfferingType;

  @OneToOne(() => ItemRarity)
  @JoinColumn({ name: "ItemRarityId" })
  @Field(() => ItemRarity, { nullable: false })
  ItemRarity!: ItemRarity;

  @OneToOne(() => CharacterRole)
  @JoinColumn({ name: "RoleId" })
  @Field(() => CharacterRole, { nullable: false })
  Role!: CharacterRole;

}