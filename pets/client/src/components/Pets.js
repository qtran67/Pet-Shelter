import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const Pets = (props) => {
    const [petsList, setPetsList] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets")
        .then((res=>{
            console.log(res);
            console.log(res.data);
            setPetsList(res.data);
        }))
        .catch((err)=>console.log(err))
    }, [])

    const deletePet = (id) =>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res.data);
            setPetsList(petsList.filter((pet, index)=>pet._id !== id))
        })
        .catch((err)=>console.log(err))
    }

    return(
        <div>
            <Link className="home-link" to={"/new"}>add a pet to the shelter</Link>
            <p>These pets are looking for a good home</p>
            <div className="wrapper">
                <div className="form-group">
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {petsList.sort(function(a,b){
                                if(a.type.toLowerCase() < b.type.toLowerCase()){
                                    return -1;
                                }
                                else if(a.type.toLowerCase() > b.type.toLowerCase()){
                                    return 1;
                                }
                                else{
                                    return 0;
                                }
                            }).map((pet, index) => (
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                <Link to={`/pets/${pet._id}`}><Button variant="contained">Details</Button></Link>
                                &emsp;
                                <Link to={`/pets/${pet._id}/edit`}><Button variant="contained">Edit</Button></Link>
                                </td>
                            </tr>
                        ))}          
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Pets;