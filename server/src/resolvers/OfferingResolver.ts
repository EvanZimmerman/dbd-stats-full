import { Offering } from "../entities/Offering";
import { Query, Resolver } from "type-graphql";

@Resolver(Offering)
export class OfferingResolver {
  @Query(() => [Offering])
  async offerings() {
    return await Offering.find({
      relations: ['Role', 'OfferingType', 'ItemRarity']
    })
  }
}