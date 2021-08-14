import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity({
  name: "characterroles"
})
export class CharacterRole extends BaseEntity {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  Id: number;

  @Field(() => String, { nullable: false })
  @Column("varchar", { name: "Name", length: 100, nullable: false })
  Name: string;

  @Field(() => String, { nullable: false })
  @Column("varchar", { name: "MappingName", length: 100, nullable: false })
  MappingName: string;
}