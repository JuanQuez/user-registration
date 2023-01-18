import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserForm = ({ setNewForm, getUsers, userSelected, setUserSelected }) => {

    const { handleSubmit, register, reset } = useForm()

    const voidInput = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }

    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        } else {
            reset(voidInput)
        }
    }, [userSelected])

    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers()
                    deleteInput()
                })
        } else {
            axios.post('https://users-crud.academlo.tech/users/', data)
                .then(() => {
                    getUsers()
                    deleteInput()
                })
        }
    }

    const deleteInput = () => {
        setNewForm(false)
        setUserSelected(null)
    }

    return (
        <div className='windowForm'>
            <div className="infoForm">
                <h2>Form</h2>
                <button className='butt-close' onClick={() => deleteInput()}><i class='bx bx-x-circle' ></i></button>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" id='first_name' {...register('first_name')} />
                    <input type="text" id='last_name' {...register('last_name')} />
                    <input type="email" id='email' {...register('email')} />
                    <input type="password" id='password' {...register('password')} />
                    <input type="date" id='birthday' {...register('birthday')} />
                    <button className='butt-update' type="submit">{userSelected ? "Update" : "Create User"}</button>
                </form>
            </div>
        </div>
    );
};

export default UserForm;