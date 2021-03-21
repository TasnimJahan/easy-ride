import React from 'react';
import fakeData from '../Data/Data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';

const DestinationDetails = () => {
    const {vehicleType} = useParams();
    let vehicles =fakeData.find(vehicle=> vehicle.title === vehicleType); 
    let optionalVehicle = fakeData.find(vehicle=> vehicle.title === 'bike');
    let image,seat,rent;
    if(vehicles){
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
                        <div className="row g-0 searchResult">
                            <div className="col-md-4 col-sm-2 vehiclePic">
                                {image}
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="card-body instrument2">
                                    <p>{vehicleType||'bike'}</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-2">
                                <div className="card-body instrument3">
                                    <p>{seat} <FontAwesomeIcon icon={faUserFriends} /></p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="card-body instrument4">
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