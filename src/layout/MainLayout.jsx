import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
          <div>
        <div>
           <Header></Header>
        </div>
        <div className="mt-4">
           <Outlet></Outlet>
        </div>
       <Footer></Footer>
      </div>



        </div>
    );
};

export default MainLayout;