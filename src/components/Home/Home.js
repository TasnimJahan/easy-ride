import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeEquipment from './HomeEquipment';
import './Home.css'
import fakeData from '../Data/Data.json'

const Home = () => {  
    const vehicles = fakeData.map(vehicle=> vehicle);
    console.log(vehicles);
   
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 equipment">
            {
               fakeData.map(vehicle=> <HomeEquipment title={vehicle.title} image={<img src={vehicle.image} alt=""/>}></HomeEquipment>)
            }
            </div>
        </div>
    );
};

export default Home;