import React from 'react';
import { useQuery } from '@apollo/client';
import bbobHTML from '@bbob/html';
import presetHTML5 from '@bbob/preset-html5';

import { newsQuery } from '../utils/queries';
const steamClanImageUrl = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/';

function News() {
  const { loading, data, error } = useQuery(newsQuery);

  if (loading) return <div>loading...</div>
  if (error) return (
    <div className="w-100 mt-10 w-full">
      <div className="w-1/4 mx-auto text-3xl text-gray-300 italic">
        Whoops, error retrieving news!
      </div>
    </div>
  ) 

  return (
    <div className="container mx-auto m-3 flex flex-col space-y-10">
      {
        data && data.getNews && data.getNews.appNews ? (
          data.getNews.appNews.newsitems.map((ni) => {
            let contents = ni.contents.replaceAll('{STEAM_CLAN_IMAGE}', steamClanImageUrl);
            let date = new Date(0);
            date.setUTCSeconds(ni.date);
            const dateString = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
            return (
              <div key={date} className="news flex flex-col border-b border-gray-400">
                <div className="flex flex-row space-x-5 justify-between">
                  <div>{ni.title}</div>
                  <div>{dateString}</div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: bbobHTML(contents, presetHTML5()) }}></div>
              </div>
            )
          })
        ) : ('')
      }
    </div>
  );
}

export default News;