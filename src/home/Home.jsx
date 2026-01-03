import React from 'react';
import Banner from './Banner';
import LatestSixCard from './LatestSixCard';
import TopArtists from './TopArtists';
import CommunityHighlights from './CommunityHighlights';
import TypeMotion from './TypeMotion';
import RevealCard from './RevealCard';
import HowItWorks from './HowItWorks';
import Stats from './Stats';
import Newsletter from './Newsletter';
import Collections from './Collections';
import Testimonials from './Testimonials';
import UploadCTA from './UploadCTA';

const Home = () => {
    return (
        <div>
            <div className=''>
                <Banner></Banner>
               <div className='mt-0'>
                 <TypeMotion></TypeMotion>
                <LatestSixCard></LatestSixCard>
                <Collections></Collections>
                <HowItWorks></HowItWorks>
                <RevealCard></RevealCard>
                <TopArtists></TopArtists>
                <UploadCTA></UploadCTA>
                <Stats></Stats>
                <Newsletter></Newsletter>
                <Testimonials></Testimonials>
                <CommunityHighlights></CommunityHighlights>
               </div>
            </div>
            
        </div>
    );
};

export default Home;