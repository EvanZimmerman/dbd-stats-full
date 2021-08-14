import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { charactersQuery } from '../utils/queries';

function Characters() {
  
  const { loading, data } = useQuery(charactersQuery);

  if ( loading ) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="container mx-auto flex flex-col">
      <div className="p-5 w-2/3 mx-auto">
        <div className="text-center text-gray-300 text-4xl mb-3 tracking-wide">Survivors</div>
        <div className="flex flex-row flex-wrap justify-center">
          {
            data && data.characters ? (
              data.characters
                .filter(c => c.Role.Name === 'Camper')
                .map((c) => {
                  return (
                    <Link key={c.CharacterId} to={`/characters/${c.CharacterId}`}>
                      <div key={c.CharacterId} className="m-2 flex flex-col w-44 h-50 bg-black bg-opacity-40 rounded-md hover:bg-gray-600 hover:bg-opacity-50">
                        <img src={`img/${c.IconPath}`} className="" alt={c.DisplayName}/>
                        <div className="text-md text-center text-gray-200">{c.DisplayName}</div>
                      </div>
                    </Link>
                  );
                })
            ) : (
              <div className="italic">Whoops, couldn't find any surivors!</div>
            )
          }
        </div>
      </div>
      <div className="p-5 w-2/3 mx-auto">
        <div className="text-4xl text-gray-300 text-center mb-3 tracking-wide">Killers</div>
        <div className="flex flex-row flex-wrap justify-center">
          {
            data && data.characters ? (
              data.characters
                .filter(c => c.Role.Name === 'Slasher')
                .map((c) => {
                  return (
                    <Link key={c.CharacterId} to={`/characters/${c.CharacterId}`}>
                      <div key={c.CharacterId} className="m-2 flex flex-col w-44 h-50 bg-black bg-opacity-40 rounded-md hover:bg-gray-600 hover:bg-opacity-50">
                        <img src={`img/${c.IconPath}`} className="" alt={c.DisplayName}/>
                        <div className="text-md text-center text-gray-200">{c.DisplayName}</div>
                      </div>
                    </Link>
                  );
                })
            ) : (
              <div className="italic">Whoops, couldn't find any killers!</div>
            )
          }
        </div>
      </div>
    </div> 
  );
}

export default Characters;