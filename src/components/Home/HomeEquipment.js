import React from 'react';
import { useHistory } from 'react-router';
import './Home.css'
const HomeEquipment = (props) => {
    const {image, title} = props;
    const history = useHistory()
    const handleVehicle = (vehicle) =>{
        history.push(`/destination/${vehicle}`);
    }
    return (
        <div>       
            <div onClick={() => handleVehicle(props.title)} className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={image.props.src} alt=""/>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                    </div>
                </div>
            </div>
        </div>       
    );
};

export default HomeEquipment;