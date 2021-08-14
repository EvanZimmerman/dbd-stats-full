import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity({
  name: "offeringtypes"
})
export class OfferingType extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  Id: number;

  @Field({ name: "Name", nullable: false })
  @Column("varchar", { length: 100, nullable: false })
  Name: string;

  @Field({ name: "MappingName", nullable: false })
  @Column("varchar", { length: 100, nullable: false })
  MappingName: string;
}