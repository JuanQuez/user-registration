import React from 'react';

const UsersList = ({ usersList, setNewForm, selectUser, userWindow }) => {

    return (
        <div className='interfaxList'>
            <div className="footerInformation">
                <h1>List Users</h1>
                <p><strong>Registered users: </strong>{usersList.length}</p>
                <button onClick={() => setNewForm(true)}>New user</button>
            </div>
            <div className="card-user-general">
                {
                    usersList.map((user) => (
                        <div className='card-user' key={user.id}>
                            <h4>{user.first_name} {user.last_name}</h4>
                            <div className="info-user">
                                <p><strong>Email: </strong> <br /> {user.email}</p>
                                <p><strong>Birthday date: </strong> <br /> {user.birthday}</p>
                            </div>
                            <div className="icons-card">
                                <div onClick={() => selectUser(user)}>
                                    <i className='bx bxs-edit'></i>
                                </div>
                                <div onClick={() => userWindow(user)}>
                                    <i className='bx bxs-trash-alt' ></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersList;