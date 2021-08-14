import { Resolver, Query, Arg } from "type-graphql";
import { FindConditions, FindManyOptions, getRepository } from "typeorm";
import { Item } from "../entities/Item";

@Resolver(Item)
export class ItemResolver {

  @Query(() => [Item])
  async items(
    @Arg("itemId", { nullable: true }) itemId?: number
  ): Promise<Item[]> {
    
    const repository = getRepository(Item);
    // let items: Item[];

    let options: FindManyOptions = {
      relations: ['HandPosition', 'Addons', 'Addons.ItemRarity']
    }

    let findConditions: FindConditions<Item> = {};


    if (itemId !== null && itemId !== undefined) {
      findConditions = { ItemId: itemId }
      options.where = findConditions;
    }

    return await repository.find(options);
  }
  
}