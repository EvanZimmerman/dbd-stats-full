import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class NewsItem {

  @Field()
  gid: string;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  is_external_url: boolean;

  @Field()
  author: string;
  
  @Field()
  contents: string;

  @Field()
  feedlabel: string;

  @Field(() => Int)
  date: number;

  @Field()
  feedname: string;

  @Field(() => Int)
  feed_type: number;

}