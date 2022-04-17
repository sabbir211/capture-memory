import React from 'react';
import Services from './Services';
import Slider from './Slider';
import Specialties from './Specialties';

const Home = () => {
    
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Specialties></Specialties>
        </div>
    );
};

export default Home;