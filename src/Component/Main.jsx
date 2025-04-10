import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Main() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        try {
            axios.get("https://api.escuelajs.co/api/v1/users")
                .then((users) => {
                    setUsers(users.data)
                    // console.log((users.data[0]));
                })
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className='conatiner p-0'>
            <div className='row'>
                <h1 className='text-center'>Users</h1>
                <div className='' key={Math.random()}>
                    <div className='row p-0 m-0'>
                        {users.map((user) => (
                            <div className='col-4 p-0 m-0'>
                                <li key={Math.random()}>
                                    <div className='card m-3 p-2'>
                                        <img className='img-fluid rounded mb-4' src={user.avatar} alt="" />
                                        <p className='mb-0'><span className='fw-bold'>Name :</span> {user.name}</p>
                                        <p className='mb-0'><span className='fw-bold'>Email :</span> {user.email}</p>
                                        <p className='mb-0'><span className='fw-bold'>Role :</span> {user.role}</p>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Main