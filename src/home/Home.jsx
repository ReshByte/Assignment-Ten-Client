import React from 'react';
import Banner from './Banner';
import LatestSixCard from './LatestSixCard';
import TopArtists from './TopArtists';
import CommunityHighlights from './CommunityHighlights';
import TypeMotion from './TypeMotion';

const Home = () => {
    return (
        <div>
            <div className=''>
                <Banner></Banner>
                <TypeMotion></TypeMotion>
                <LatestSixCard></LatestSixCard>
                <TopArtists></TopArtists>
                <CommunityHighlights></CommunityHighlights>
            </div>
            
        </div>
    );
};

export default Home;