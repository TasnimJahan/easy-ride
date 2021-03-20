import React from 'react';
import fakeData from '../Data/Data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';

const DestinationDetails = () => {
    const {vehicleType} = useParams();
    console.log(vehicleType);
    let vehicles =fakeData.find(vehicle=> vehicle.title === vehicleType); 
    let optionalVehicle = fakeData.find(vehicle=> vehicle.title === 'bike');
    console.log(optionalVehicle.seat);
    let image,seat,rent;
    if(vehicles){
        console.log(vehicles.image);
        image = <img src={vehicles.image} alt=""/>
        seat = vehicles.seat;
        rent = vehicles.rent;
    }
    else{
        image = <img src={optionalVehicle.image} alt=""/>
        seat = optionalVehicle.seat;
        rent = optionalVehicle.rent;
    }
    

    return (
        <div>
             <div className="vehiclePicDiv">
                    <div className="card mb-3" style={{maxWidth: '540px' ,borderRadius:'10px', marginTop: '2%'}}>
                        <div className="row g-0">
                            <div className="col-md-4 vehiclePic">
                                {image}
                            </div>
                            <div className="col-md-2">
                                <div className="card-body instrument">
                                    <p>{vehicleType||'bike'}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-body instrument">
                                    <p>{seat} <FontAwesomeIcon icon={faUserFriends} /></p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-body instrument">
                                    <h5 className="card-title">{rent}</h5>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
        </div>
    );
};

export default DestinationDetails;