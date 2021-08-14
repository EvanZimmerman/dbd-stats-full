import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { PERKS_QUERY } from '../utils/queries';
import PerkIcon from './PerkIcon';



function Perks() {
  const { loading, data } = useQuery(PERKS_QUERY);

  console.log(data);

  if (loading) return(<div>loading...</div>);
  return (
    <div className="flex flex-col flex-wrap container mx-auto mt-5">
      <div className="w-7/12 mx-auto m-3">
        <input className="p-1 w-1/3 rounded-sm text-black focus:outline-none focus:ring focus:border-blue-300" type="text" placeholder="Search perks..."/>
      </div>
      {
        data && data.perks ? (
          data.perks
            .map((p) => {
              return (
                <div key={p.DisplayName} className="flex flex-col bg-gray-800 bg-opacity-70 w-7/12 rounded-md m-3 mx-auto">
                  <div className="flex p-2 text-2xl text-gray-200 font-semibold">
                    <div className="w-full text-center">
                      <div className="">{p.DisplayName}</div>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-12 flex-1 p-5">
                    <PerkIcon iconPath={p.IconPath} displayName={p.DisplayName} width="w-40" />
                    <div dangerouslySetInnerHTML={{__html: p.Description}}></div>
                  </div>
                  <div className="text-sm italic text-gray-400 w-full">
                    { p.Character ? (
                      <Link to={`/characters/${p.Character.CharacterId}`}>
                        <div className="float-right mr-2 mb-1 hover:text-gray-200">{p.Character.DisplayName}</div>
                      </Link>
                    ):('')}
                  </div>
                </div>
              )
            })
        ) : ('')
      }
    </div>
  )
}

export default Perks;