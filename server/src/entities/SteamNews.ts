import { Field, Int, ObjectType } from "type-graphql";
import { NewsItem } from "./NewsItem";

@ObjectType()
export class SteamNews {

  @Field(() => Int, { nullable: false, simple: true })
  appid!: number;

  @Field(() => [NewsItem], { nullable: false })
  newsitems!: NewsItem;
}

@ObjectType()
export class ParentSteamNews {
  @Field(() => SteamNews)
  appnews: SteamNews;
}