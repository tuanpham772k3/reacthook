import React, { useContext, useEffect, useState } from 'react';
import { usersContext } from '../UserContext/UserContext';
import { getAllUser } from '../UserContext/ApiAPI';
import { Table } from 'react-bootstrap';
import { FadeLoader } from 'react-spinners';
import Update from '../Modal/Update';
import Delete from '../Modal/Delete';
import _ from "lodash";

export default function TableUser() {
    const { state, dispatch } = useContext(usersContext);
    const { users, isError, isLoading } = state;
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [selecteDelUser, setSelecteDelUser] = useState({})
    const [showDeleteModal, setShowDeleteModal] = useState(false)


    useEffect(() => {
        getAllUser(dispatch);
    }, [dispatch]);

    // update
    const handleUpdate = (user) => {
        setSelectedUser(user);
        setShowUpdateModal(true);
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedUser({});
    };

    // delete
    const handleDelete = (user) => {
        setSelecteDelUser(user);
        setShowDeleteModal(true);
        console.log(user);
    };


    const handleCloseDelete = () => {
        setShowDeleteModal(false);
        setSelecteDelUser({});
    };





    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isError ? (
                        <tr>
                            <td colSpan="6" className="text-center">Data is error</td>
                        </tr>
                    ) : isLoading ? (
                        <tr>
                            <td colSpan="6" className="text-center">
                                <div className='loading'>
                                    <FadeLoader
                                        height={15}
                                        width={5}
                                        radius={2}
                                        margin={2}
                                        color='#21e4e0'
                                        loading={true}
                                    />
                                </div>
                            </td>
                        </tr>
                    ) : (
                        <>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img
                                            src={user.avatar}
                                            alt='avatar'
                                            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(user)}
                                        >
                                            Delete
                                        </button>
                                        {" "}
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={() => handleUpdate(user)}
                                        >
                                            Update
                                        </button>
                                        {" "}
                                    </td>
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </Table>
            <Update
                show={showUpdateModal}
                handleClose={handleCloseUpdateModal}
                userData={selectedUser}
            />
            <Delete
                show={showDeleteModal}
                handleClose={handleCloseDelete}
                userDelete={selecteDelUser}
            />


        </div>
    );
}
