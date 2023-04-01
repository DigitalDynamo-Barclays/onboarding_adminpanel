import React, { useState } from 'react';
import axios from 'axios';


const IndCard = ({ data }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [id, setId] = useState(data.email);
    const [fdk, setFdk] = useState("")
    function handleClick() {
        setShowPopup(true);
    }

    function handleClose() {
        setShowPopup(false);
    }
    const feedback = (feedback) => {
        axios.post(`ttps://onboardingbackend.up.railway.app/feedback/${id}`, { feedback }).then(() => {
            window.location.reload();
        })

    }
    const verifyFunc = (id, phone, country) => {

        axios.post(`https://onboardingbackend.up.railway.app/onboarding/verify/${id}`, { phone, country }).then(() => {
            window.location.reload();
        })
    }

    return (
        <div class="card">
            {showPopup && (
                <div className="popup">
                    <input type="text" onChange={(e) => setFdk(e.target.value)} />
                    <button onClick={(e) => { e.preventDefault(); feedback(fdk); }}>Submit</button>
                    <button onClick={handleClose}>Close</button>
                </div>
            )}

            <div class="details">
                <p><b>Account Type:</b> {data.accountType}</p>
                <p><b>Name:</b> {data.name}</p>
                <p><b>Phone Number:</b> {data.phone}</p>
                <p><b>Email Id:</b> {data.email}</p>
                <p><b>Date of Birth:</b> {data.dob}</p>
                <p><b>Address:</b> {data.address.block}{data.address.street}{data.city}{data.address.state}{data.address.zip}{data.address.country}</p>

                {data.idVerified ? <p><b>Account Number: </b>{data.accountNo}</p> :
                    <div>
                        <button onClick={(e) => { e.preventDefault(); handleClick(); }}>decline</button>
                        <button onClick={(e) => { e.preventDefault(); verifyFunc(data.uid, data.address.country, data.phone); }}> Verify</button>
                    </div>
                }
            </div>
        </div >
    );
};

export default IndCard;