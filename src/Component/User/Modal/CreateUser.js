import React, { useContext, useEffect, useState } from 'react'
import { createUser } from '../UserContext/ApiAPI';
import { useNavigate } from 'react-router-dom';
import { usersContext } from '../UserContext/UserContext';
import { toast } from 'react-toastify';


export default function CreateUser() {
    const [id, setId] = useState(0);
    const [list, setList] = useState({});
    const { dispatch } = useContext(usersContext)
    const navigate = useNavigate();

    const handleChange = (e) => {
        let value = e.target.value;
        setList({ ...list, [e.target.name]: value, id: id })
    };
    // console.log(list);

    const ramdomId = () => {
        setId(Math.round(Math.random() * 100))
    };
    useEffect(() => {
        ramdomId()
    }, []);

    const handleClick = () => {
        try {
            createUser(list, dispatch);
            navigate("/");
            toast.success("Create Successful!")
        } catch (error) {
            toast.error("Failed to create. Please try again!")
        }
    };


    return (
        <div className='container mt-3'>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">ID</span>
                </div>
                <input
                    type="text"
                    value={id}
                    className="form-control"
                    aria-label="id"
                    name='id'
                />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">First Name</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    name='first_name'
                    onChange={handleChange}
                >
                </input>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Last Name</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    name='last_name'
                    onChange={handleChange}
                >
                </input>
            </div >

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                </div>
                <input
                    type="text"
                    className="form-control "
                    aria-label="Email"
                    name='email'
                    onChange={handleChange}
                >
                </input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Avatar</span>
                </div>
                <input
                    type="text"
                    className="form-control "
                    aria-label="Avatar"
                    name='avatar'
                    onChange={handleChange}
                >
                </input>
            </div>

            <button className="btn btn-success mt-3" onClick={handleClick}>Bấm vào ăn cức</button>

        </div >


    )
}
