import React from 'react';
import axios from 'axios';


const IndCard = ({ data }) => {

    const verifyFunc = (id) => {
        axios.post(`http://localhost:4000/onboarding/verify/${id}`).then(() => {
            window.location.reload();
        })
    }

    return (
        <div class="card">

            <div class="details">
                <p><b>Account Type:</b> {data.accountType}</p>
                <p><b>Name:</b> {data.name}</p>
                <p><b>Phone Number:</b> {data.phone}</p>
                <p><b>Email Id:</b> {data.email}</p>
                <p><b>Date of Birth:</b> {data.dob}</p>
                <p><b>Address:</b> {data.address.block}{data.address.street}{data.city}{data.address.state}{data.address.zip}{data.address.country}</p>

                {data.idVerified ? null : <button onClick={(e) => { e.preventDefault(); verifyFunc(data.uid); }}> Verify</button>}
            </div>
        </div >
    );
};

export default IndCard;