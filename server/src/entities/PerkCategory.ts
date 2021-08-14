import { ID, Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Perk } from "./Perk";


@ObjectType()
@Entity({
  name: 'perkcategories'
})
export class PerkCategory extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  Id: number;

  @Field({ name: "Name", nullable: false })
  @Column("varchar", { length: 100, nullable: false })
  Name: string;

  @Field({ name: "MappingName", nullable: false })
  @Column("varchar", { length: 100, nullable: false })
  MappingName: string;

  @ManyToMany(() => Perk, p => p.PerkCategories)
  @JoinTable({
    name: "perkcategorylinks",
    joinColumn: {
      name: "PerkCategoryId",
      referencedColumnName: "Id"
    },
    inverseJoinColumn: {
      name: "PerkId",
      referencedColumnName: "PerkId"
    }
  })
  Perks: Perk[];
}