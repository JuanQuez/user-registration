import React from 'react';

const Advertisement = ({ userDeleted, cancelDelete, deleteUser }) => {

    return (
        <div className='windowCard'>
            <div className="infoWindow">
                <h2>Do you want to delete this user? {userDeleted?.first_name}</h2>
                <p>This action is permanent</p>
                <button className='butt-cancel' onClick={() => cancelDelete()}>Cancel</button>
                <button onClick={() => deleteUser(userDeleted)}>Delete</button>
            </div>
        </div>
    );
};

export default Advertisement;