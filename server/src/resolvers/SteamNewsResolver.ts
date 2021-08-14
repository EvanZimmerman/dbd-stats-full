import { FieldResolver, Query, Resolver, Root } from "type-graphql";
const fetch = require('node-fetch');

import { ParentSteamNews, SteamNews } from "../entities/SteamNews";

@Resolver(ParentSteamNews)
export class SteamNewsResolver {

  url: string = 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=381210';

  @Query(() => ParentSteamNews)
  async getNews(): Promise<ParentSteamNews> {
    const response = await fetch(this.url);
    return response.json();
  }

  @FieldResolver()
  appNews(@Root() parentSteamNews: ParentSteamNews): SteamNews {
    const steamNews: SteamNews = {
      appid: parentSteamNews.appnews.appid,
      newsitems: parentSteamNews.appnews.newsitems
    }
    return steamNews;
  }
}