import { Query, Resolver, Arg } from "type-graphql";
import { getRepository } from "typeorm";

import { Perk } from "../entities/Perk";

@Resolver(Perk)
export class PerkResolver {

  @Query(() => [Perk])
  async perks(): Promise<Perk[]> {
    const repository = getRepository(Perk);
    return await repository.find({
      relations: ['Character', 'PerkCategories']
    });
  }

  @Query(() => Perk)
  async perkById(
    @Arg("perkId", { nullable: false }) perkId: number,
  ): Promise<Perk | undefined> {
    const repository = getRepository(Perk);

    return await repository.findOne({
      relations: ['Character', 'PerkCategories'],
      where: { PerkId: perkId }
    });
    
  }
}