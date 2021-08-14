import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity({
  name: 'charactergenders'
})
export class CharacterGender extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'Id' })
  Id: number;

  @Field(() => String, { nullable: false })
  @Column("varchar", { name: "Name", length: 100, nullable: false })
  Name: string;

  @Field(() => String, { nullable: false })
  @Column("varchar", { length: 255, nullable: false } )
  MappingName: string;
}