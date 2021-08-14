import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity({
  name: 'statmappingtypes'
})
export class StatMappingType extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  StatMappingTypeId: number;

  @Field({ simple: true })
  @Column()
  StatMappingTypeName: string;
}