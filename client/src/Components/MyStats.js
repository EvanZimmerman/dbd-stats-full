import { useQuery } from '@apollo/client';
import React from 'react';

import { statsQuery } from '../utils/queries';
import { pipsToRankStruct } from "../utils/mappings";

function MyStats() {
  const { loading, data } = useQuery(statsQuery("76561198055161249"));

  

  const avatar_medium = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a198085ebc19c08a983108ed2f4ee1489bd5b3f6_medium.jpg';

  if (loading) return (<div>loading...</div>)

  function convertValue(value) {
    return Math.floor(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function convertRank(rankType) {
    console.log(rankType, data);
    const rank
      = data.getStats
        .find(s => s.StatMapping.InternalKey === rankType)
        .value;

    for (let i = 0; i < pipsToRankStruct.length; i++) {
      if (rank >= pipsToRankStruct[i])
        return i + 1;
    }
    return -1;
  }

  return (
    <div className="flex flex-col container mx-auto mt-5 space-y-1">
      <div className="p-2 mx-auto w-full">
        {/* queue message */}
        <div className="mb-3 p-2 border border-yellow-700 bg-gray-900 bg-opacity-60 w-1/4 mx-auto text-center rounded-md">
          You are currently in queue to refresh your data
        </div>

        {/* user card */}
        <div className="flex flex-col rounded-md w-10/12 bg-gray-800 bg-opacity-50 mx-auto p-6">
          <div className="flex flex-row space-x-5 ">
            
            <img className="rounded-md flex-none w-14 h-14 align-middle" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a198085ebc19c08a983108ed2f4ee1489bd5b3f6_medium.jpg" alt="" />
            <div className="text-5xl italic mb-8">unzippedfannypac</div>
          </div>
          
          <div className="text-lg flex flex-row ml-1">
            HEADER INFORMATION FOR USER DATA..... PROFILE PIC, RANK, SOCIALS MAYBE?
          </div>
        </div>

        
        <div className="flex flex-row justify-between mt-10 w-5/6 mx-auto">
          {/* killer stats */}
          <div className="w-1/3">
            <div className="text-4xl">Killer Stats</div>
            <div className="mt-4">
              <ul>
                <li>
                  Survivors Killed: &nbsp;
                  {
                    convertValue(
                      data.getStats.find(s => s.StatMapping.InternalKey === 'DBD_KilledCampers').value
                    )
                  }
                </li>
                <li>
                  Survivors Sacrificed: &nbsp;
                  {
                    convertValue(
                      data.getStats.find(s => s.StatMapping.InternalKey === 'DBD_SacrificedCampers').value
                    )
                  }
                </li>
                <li>
                  Beartrap Pickups: &nbsp;
                  {
                    convertValue(
                      data.getStats.find(s => s.StatMapping.InternalKey === 'DBD_TrapPickup').value
                    )
                  }
                </li>
              </ul>
            </div>
          </div>
          
          {/* survivor stats */}
          <div className="w-1/3">
            <div className="text-4xl border-b">Survivor Stats</div>
          </div>
          
        </div>
      </div>
      
    </div>
  );

  // return (
  //   <div className="mb-10 flex flex-col container mx-auto mt-5 space-y-1">
  //     <div className="flex flex-row justify-between">
  //       <div className="flex flex-col">
  //         <div className="text-4xl font-bold italic border-b border-gray-400 p-2 mb-5">Killer Stats</div>
  //         {
  //           data && data.getStats ? (
  //             data.getStats
  //               .filter((s) => s.StatMappingType.StatMappingTypeName === 'Killer')
  //               .map((s) => {
  //               return (
  //                 <div className="flex flex-row text-white space-x-2">
  //                   <div>{s.name}:</div>
  //                   <div className="font-bold">{Math.floor(s.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
  //                 </div>
  //               )
  //             })
  //           ) : ('')
  //         }
  //       </div>
  //       <div className="flex flex-col">
  //         <div className="text-4xl font-bold italic border-b border-gray-400 p-2 mb-5">Survivor Stats</div>
  //         {
  //           data && data.getStats ? (
  //             data.getStats
  //               .filter((s) => s.StatMappingType.StatMappingTypeName === 'Survivor')
  //               .map((s) => {
  //                 return (
  //                   <div className="flex flex-row text-white space-x-2">
  //                     <div>{s.name}</div>
  //                     <div className="font-bold">{Math.floor(s.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
  //                   </div>
  //                 )
  //               })
  //           ) : ('')
  //         }
  //       </div>
  //     </div>      
  //   </div>
  // );
  
    
  
  
}

export default MyStats;