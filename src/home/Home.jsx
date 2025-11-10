import React from 'react';
import Banner from './Banner';
import LatestSixCard from './LatestSixCard';
import TopArtists from './TopArtists';
import CommunityHighlights from './CommunityHighlights';

const Home = () => {
    return (
        <div>
            <div className=''>
                <Banner></Banner>
                <LatestSixCard></LatestSixCard>
                <TopArtists></TopArtists>
                <CommunityHighlights></CommunityHighlights>
            </div>
            
        </div>
    );
};

export default Home;