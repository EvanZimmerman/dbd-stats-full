import { Arg, Query, Resolver } from "type-graphql";

import { User } from "../entities/User";

@Resolver(User)
export class UserResolver {

  @Query(() => User)
  async user(
    @Arg("steamId", { nullable: false }) steamId: string
  ): Promise<User | undefined> {
    const user = await User.findOne({
      where: {
        SteamId: steamId
      }
    });

    return user;
  }

  
}