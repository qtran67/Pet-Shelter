import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

const Pet = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [pet, setPet] = useState({});
    const [likes,setLikes] = useState("");

    let clicked = false;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPet(res.data);
            setLikes(res.data.likes);
        })
        .catch((err)=>console.log(err))
    },[])

    const deletePet = () =>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>console.log(err))
    }

    const like = () =>{
        let num = likes + 1;
        setLikes(num);

        axios.put(`http://localhost:8000/api/pets/${id}`,{likes:num})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate(`/pets/${id}`);
        })
        .catch((err)=>console.log(err))

        clicked =true;
    }

    return(
        <div>
            <Link className="home-link" to="/">back to home</Link>
            <div className="bar">
                <span>Details about: {pet.name}</span>
                <Button variant="contained" color="error" onClick={() => deletePet(pet._id)}>Adopt {pet.name}</Button>
            </div>
            <div className="wrapper">
                <div className="form-group">
                    <table>
                        <tbody>
                            <tr>
                                <td className="bold-font">Pet type:</td>
                                <td>{pet.type}</td>
                            </tr>
                            <tr>
                                <td className="bold-font">Description:</td>
                                <td>{pet.description}</td>
                            </tr>
                            <tr>
                                <td className="bold-font">Skills:</td>
                                <td>
                                    <p>{pet.skill1}</p>
                                    <p>{pet.skill2}</p>
                                    <p>{pet.skill3}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button disabled={clicked ? true : false} onClick={() => like(pet._id)} variant="contained" color="success">Like {pet.name}</Button><span>&emsp;{likes} like(s)</span>
                </div>
            </div>
        </div>
    )
}

export default Pet;