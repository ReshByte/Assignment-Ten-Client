import React from 'react';
import Banner from './Banner';
import LatestSixCard from './LatestSixCard';

const Home = () => {
    return (
        <div>
            <div className=''>
                <Banner></Banner>
                <LatestSixCard></LatestSixCard>
            </div>
            
        </div>
    );
};

export default Home;