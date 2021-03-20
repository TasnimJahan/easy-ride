import React from 'react';
import './Destination.css'

import DestinationDetails from './DestinationDetails';

const Destination = () => {
    const handleSearch = () => {
        document.getElementById("gotoDestination").style.display="block";
    }
   
    return (
        <div className="container destinationDiv">
            <hr/>
            <div className="destinationSearch">
                <div className="pickToAndFrom">
                <p>Pick From</p>
                <input type="text" name="pickFrom" id="pickFrom" placeholder="Mirpur 1"/>
                <p>Pick To</p>
                <input type="text" name="pickFrom"  id="pickTo" placeholder="Dhanmondi"/>
                </div>
                
                <button onClick={handleSearch} className="loginBtn btn btn-danger">Search</button>
                <div id="gotoDestination">
                    <DestinationDetails></DestinationDetails>
                    <DestinationDetails></DestinationDetails>
                    <DestinationDetails></DestinationDetails>
                </div>
                
               
                <p>
                    <label for="birthday">Journey Date:</label>
                    <input type="date" id="birthday" name="birthday"/>
                </p>

                
            </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496148.936202814!2d85.84688993406178!3d23.4522038147851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616158765819!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Destination;