import { useQuery } from '@apollo/client';
import React from 'react';
import PerkIcon from './PerkIcon';
import { characterQuery } from '../utils/queries';

function Character(props) {

  const scrollToHashId = () => {
    const hash = window.location.hash.substring(1);

    if (hash && hash.length) {
      setTimeout(
        window.requestAnimationFrame(() => {
          const el = document.getElementById(hash);
          el.scrollIntoView();
          removeHash();
        }),
        0
      );
    }
  }

  const removeHash = () => {
    const loc = window.location
    const hist = window.history

    // use modern browser history API
    if (hist && 'pushState' in hist) {
      hist.replaceState('', document.title, loc.pathname + loc.search)
    // fallback for older browsers
    } else {
      // prevent scrolling by storing the page's current scroll offset
      const scrollV = document.body.scrollTop
      const scrollH = document.body.scrollLeft

      loc.hash = ''

      // restore the scroll offset, should be flicker free
      document.body.scrollTop = scrollV
      document.body.scrollLeft = scrollH
    }
  }

  let character = null;
  const { data } = useQuery(characterQuery(props.match.params.id));
  if (data) {
    character = data.character;
  }

  if (!character) return ( <div>Loading...</div> );

  return (
    <div className="container mx-auto my-5 w-7/12 bg-gray-800 rounded-lg text-mdLg">
      <div className="p-8 text-gray-200 w-full">
        <div className="flex flex-col lg:flex-row mb-2 p-2 border-b border-gray-500 space-x-10">
          <div className="text-4xl tracking-wide italic font-bold">{character.DisplayName}</div>
          <div className="flex flex-row text-sm space-x-5 m-auto">
            <div className="hover:text-yellow-400">
              <a onClick={scrollToHashId()} href="#backstory">[ Backstory ]</a>
            </div>
            { character.KillerPower ? (
                <div className="hover:text-yellow-400">
                  <a href="#power">[ Power ]</a>
                </div>
              ) : ('')
            }
            <div className="hover:text-yellow-400">
              <a href="#perks">[ Perks ]</a>
            </div>
            {
              !character.KillerPower ? (
                <div className="hover:text-yellow-400">
                  <a href="#items">[ Items ]</a>
                </div>
              ) : ('')
            }
            {
              character.KillerPower ? (
                <div className="hover:text-yellow-400">
                  <a href="#addons">[ Addons ]</a>
                </div>
              ) : ('')
            }
            
          </div>
        </div>
        <div className="space-y-10 ml-3">
          <div className="ml-5 my-3 lg:float-right bg-black bg-opacity-50 rounded-md p-2">
            <img className="flex-none w-64 border-b border-gray-500" src={`../img/${character.IconPath}`} alt={character.DisplayName} />
            <div className="mt-3 text-gray-300 w-full">
              <div className="flex flex-row space-x-2">
                <div className="w-1/3">Gender</div>
                <div className="">{character.Gender.Name}</div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="w-1/3">Difficulty</div>
                <div>{character.Difficulty.Name}</div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="w-1/3">Height</div>
                <div>{character.Height.Name}</div>
              </div>
            </div>
          </div>
          <div className="" dangerouslySetInnerHTML={{ __html: character.Biography }}></div>
          <div className="space-y-6">
            <div id="backstory" className="text-3xl font-semibold text-gray-100 ml-0">Back Story</div>
            <div className="" dangerouslySetInnerHTML={{ __html: character.Backstory }}></div>
          </div>
          {
            character.KillerPower ? (
              <div className="space-y-6">
                <div id="power" className="text-3xl text-yellow-300 font-semibold text-gray-100">Power - {character.KillerPower.DisplayName}</div>
                <img className="w-28" src={`../img/${character.KillerPower.IconPath}`} alt={character.KillerPower.IconPath}/>
                <div dangerouslySetInnerHTML={{ __html: character.KillerPower.Description }} />
              </div>
            ) : ('')
          }
          <div className="border-b border-gray-500 p-2">
            <div id="perks" className="text-3xl font-semibold text-gray-100">Teachable Perks</div>
          </div>
          <div className="flex flex-col">
            {
              character.Perks.map((p, idx) => {
                return (
                  <div key={p.DisplayName} className="flex flex-row space-x-4"
                       style={ !(idx === character.Perks.length - 1) ? { borderBottom: "1px solid", borderColor: "rgb(107, 114, 128)" } : {}}>
                    <div className="m-auto p-3">
                      <PerkIcon width="w-40" iconPath={p.IconPath} displayName={p.DisplayName} />
                    </div>
                    <div className="w-44 text-center m-auto">
                      {p.DisplayName}
                    </div>
                    <div className="flex-1 my-auto p-2">
                      <div dangerouslySetInnerHTML={{__html: p.Description}}></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {
            character.KillerPower ? (
              <div className="border-b border-gray-500 mb-2 p-2">
                <div id="addons" className="text-3xl font-semibold text-gray-100">
                  Addons
                </div>
              </div>
            ) : ('')
          }
          <div className="flex flex-col rounded-md border-gray-500">
            {
              character.KillerPower ? (
                character.KillerPower.KillerAddons.map((a) => {
                  return (
                    <div key={a.DisplayName} className="flex flex-row space-x-4 border-b border-gray-500">
                      <div className="m-auto p-3 flex-none">
                        <img className="w-32" src={`../img/${a.IconPath}`} alt={a.DisplayName} />
                      </div>
                      <div className="w-44 text-center m-auto">
                        {a.DisplayName}
                      </div>
                      <div className="flex-1 my-auto p-2">
                        <div dangerouslySetInnerHTML={{__html: a.Description}}></div>
                      </div>
                    </div>
                  )
                })
              ): ('')
            }
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Character;