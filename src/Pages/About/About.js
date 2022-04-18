import React from 'react';
import mypic from "../../Images/mySelf.png"
import "../Login/LogReg.css"
const About = () => {
    const percentage=40;
    return (
        <div className='container ' style={{marginBottom:"12rem"}}>
            <div className='responsiveWidth d-block mx-auto'>
                <div className=' '>
                    <img src={mypic} alt="" className='w-75' />
                </div>
                <div>
                    <h2>Sabbir Alam Pial</h2>
                    <p style={{textAlign:"justify"}}>
                        Goal is to be a  <b>full stack web developer</b>
                        . I like to learn new technology. i am learning web Dev from year 2021. Insha'Allah i will work hard till my death.Cause Life is short to fulfill our all wish.Working hard is my last hope of success. To Me success is not getting a good job or earning money.
                    </p>
                  
                </div>
            </div>
            <div>

            </div>

        </div>

    );
};

export default About;