import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const ExploreArtworks = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
  <div className="text-center mb-6">
  <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent inline-block">
    Explore Here!
  </h1>

  <div className="h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
</div>

         <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
             {
            data.map(get => <Card get={get}></Card>)
          }
         </div>
        </div>
    );
};

export default ExploreArtworks;