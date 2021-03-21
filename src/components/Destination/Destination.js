import React from 'react';
import './Destination.css'

import DestinationDetails from './DestinationDetails';

const Destination = () => {
    const handleSearch = () => {
        document.getElementById("searchResults").style.display="block";
        document.getElementById("pickToAndFrom").style.display="none";
        const picFrom = document.getElementById("mySelectPlace");
        const pickTo = document.getElementById("mySelectTo");
        document.getElementById("startSpot").innerText=picFrom.value;
        document.getElementById("endSpot").innerText=pickTo.value;
    }
    const myFunction= ()=> {
        const place = document.getElementById("mySelectPlace").value;
        if (place==='Mirpur') {
            document.getElementById("mirpur").style.display="block";
        }
        if (place==='Dhanmondi') {
            document.getElementById("dhanmondi").style.display="block";
            document.getElementById("mirpur").style.display="none";
        }
        if (place==='Baddda') {
            document.getElementById("dhanmondi").style.display="none";
            document.getElementById("mirpur").style.display="none";
            document.getElementById("badda").style.display="block";
        }
        if (place==='FarmGate') {
            document.getElementById("badda").style.display="none";
            document.getElementById("dhanmondi").style.display="none";
            document.getElementById("mirpur").style.display="none";
            document.getElementById("farmgate").style.display="block";
        }
        if (place==='Chattogram') {
            document.getElementById("mirpur").style.display="none";
            document.getElementById("farmgate").style.display="none";
            document.getElementById("badda").style.display="none";
            document.getElementById("dhanmondi").style.display="none";
            document.getElementById("chattogram").style.display="block";
        }
        // document.getElementById("demo").innerHTML = "You selected: " + x;
      }

    return (
        <div className="container">
            <hr/>
            <div className="destinationDiv">
                <div className="destinationSearch">
                    <div id="pickToAndFrom">
                        <p>Pick From</p>
                        <select id="mySelectPlace" onChange={myFunction}>
                            <option value="Mirpur">Mirpur</option>
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Baddda">Baddda</option>
                            <option value="FarmGate">FarmGate</option>
                            <option value="Chattogram">Chattogram</option>
                        </select>
                        <p>Pick To</p>
                        <select id="mySelectTo">
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Mirpur">Mirpur</option>
                            <option value="Baddda">Baddda</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="FarmGate">FarmGate</option>
                        </select>                    
                        <button onClick={handleSearch} className="loginBtn btn btn-danger">Search</button>
                    </div>

                    <div id="searchResults">
                        <div className="direction row g-0 searchResult">
                            <p className="dot dot1"></p>                        
                            <p className="dot dot2"></p>
                            <p className="line"></p>
                            <h5 id="startSpot">aaa</h5>
                            <h5 id="endSpot">bbb</h5>
                        </div>
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
                    <iframe id="mirpur" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.623580781976!2d90.32726096339121!3d23.810544424100996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616304697686!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} loading="lazy"></iframe>
                    <iframe id="dhanmondi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29216.0784629226!2d90.35830934355164!3d23.747029658956514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616306004950!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} loading="lazy"></iframe>
                    <iframe id="badda" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58414.53204065445!2d90.39440637553555!3d23.78628123072434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b71894d7cb%3A0x725a1e9ba77a8744!2sBadda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616306061968!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} loading="lazy"></iframe>
                    <iframe id="farmgate" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7392986954364!2d90.38506454864297!3d23.75667433451063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a426199b0d%3A0x6a2c655d06c88ec9!2sFarmgate%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616306141424!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} loading="lazy"></iframe>
                    <iframe id="chattogram" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236207.016143676!2d91.67943051652738!3d22.325873869970817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1616306220981!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;