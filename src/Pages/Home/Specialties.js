import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Specialty from './Specialty';

const Specialties = () => {
    const [specialties, setSpecialties] = useState([])
    useEffect(() => {
        fetch("specialties.json")
            .then(res => res.json())
            .then(data => setSpecialties(data))
    }, [])
    console.log(specialties);
    return (
        <div className='container text-center'>
            <div >
                <h2>
                    MY SPECIALTIES
                </h2>
            </div>
            <CardGroup className='row row-cols-1 row-cols-md-3'>
                {
                    specialties.map(specialty => <Specialty key={specialty.id} specialty={specialty}></Specialty>)
                }
            </CardGroup>

        </div>
    );
};

export default Specialties;