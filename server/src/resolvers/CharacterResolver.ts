import { Resolver, Query, Arg } from "type-graphql";
import { getRepository } from "typeorm";

import { Character } from "../entities/Character";
import { Addon } from "../entities/Addon";

@Resolver(Character)
export class CharacterResolver {

  @Query(() => [Character])
  async characters(): Promise<Character[]> {
      return Character.find({
        relations: ['Gender', 'Height', 'Role', 'Difficulty', 'Perks', 'KillerPower'],
        order: { CharacterId: "ASC" }
      });
  }

  @Query(() => Character)
  async character(
    @Arg("id", { nullable: false }) id: number
  ): Promise<Character | undefined> {

    const addonRepo = getRepository(Addon);
    let character
      = await Character.findOne(id, {
        relations: ['Gender', 'Height', 'Role', 'Difficulty', 'Perks', 'KillerPower']
      });

    if (character && character.KillerPower !== null) {
      character.KillerPower.KillerAddons
        = await addonRepo.find({
          relations: ['HandPosition', 'ItemRarity'],
          where: { 
            RequiredKillerAbility: character.RequiredKillerAbility,
            IsBloodweb: true
          },
        });
    }

    return character;
  }

  @Query(() => Character)
  async characterByName(
    @Arg("name", { nullable: false }) name: string, 
  ): Promise<Character | undefined> {
    const charName = name.replace(/_/g, " ");
    let characters = await Character.find({
      relations: ['Gender', 'Height', 'Role', 'Difficulty', 'Perks', 'KillerPower'],
      where: { DisplayName: charName }
    });
    return await characters[0];
    
  }
}
