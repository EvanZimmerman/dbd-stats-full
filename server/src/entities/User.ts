import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'users'
})
@ObjectType()
export class User extends BaseEntity {

  @PrimaryColumn()
  @Field(() => Int, { simple: true })
  UserId: number;

  @Column()
  @Field({ simple: true })
  SteamId: string;

  @Column()
  @Field()
  Name: string;

  @Column()
  @Field()
  ProfileUrl: string;

  @Column()
  @Field()
  AvatarUrl: string;

  @Column()
  @Field()
  CreateDate: Date;

  @Column()
  @Field()
  LastModifiedDate: Date;
}