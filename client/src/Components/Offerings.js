import React from 'react';
import { useQuery } from '@apollo/client';

import { offeringsQuery } from '../utils/queries';

function Offerings() {

  const { loading, data } = useQuery(offeringsQuery);

  if (loading) return(<div>loading...</div>)
  return (
    <div className="flex flex-col flex-wrap container mx-auto mt-5">
      <div className="w-7/12 mx-auto m-3">
        <input 
         className="p-1 w-1/3 rounded-sm text-black focus:outline-none focus:ring focus:border-blue-300"
         type="text"
         placeholder="Search offerings..."/>
      </div>
      {
        data && data.offerings ? (
          data.offerings
            .map((o) => {
              return (
                <div key={o.DisplayName} className="flex flex-col bg-gray-800 bg-opacity-70 w-7/12 rounded-md m-3 mx-auto">
                  <div className="flex p-2 text-2xl text-gray-200 font-semibold">
                    <div className="w-full text-center">{ o.DisplayName }</div>
                  </div>
                  <div className="flex flex-row space-x-12 flex-1 p-5">
                    <div className="flex-none my-auto w-40">
                      <img src={`img/${o.IconPath}`} alt={o.DisplayName} />
                    </div>
                    <div className="" dangerouslySetInnerHTML={{__html: o.Description}}></div>
                  </div>
                </div>
              );
            })
        ) : ('')
      }
    </div>
  );
  
}

export default Offerings;