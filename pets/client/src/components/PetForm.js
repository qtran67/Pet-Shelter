import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

const PetForm = (props) => {
    const {petsList, setPetsList} = props;

    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("CAME HERE");

        axios.post('http://localhost:8000/api/pets', {name, type, description, skill1, skill2, skill3})
            .then(res=>{
                console.log(res);
                console.log(res.data);

                setPetsList([...petsList, res.data])
                navigate("/");
            })
            .catch((err) => setErrors(err.response.data.error.errors))     
    }
    
    return (
        <div>
            <Link className="home-link" to="/">back to home</Link>
            <div className="bar">Know a pet needing a home?</div>
            <div className="wrapper">
            <div className="form-group">
                <form onSubmit={onSubmitHandler}>
                    <div className='bold-font'>
                        <label>Pet Name:</label><br/>
                        <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                    </div>
                    {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
                    <div className='bold-font'>
                        <label>Pet Type:</label><br/>
                        <input type="text" value={type} onChange = {(e)=>setType(e.target.value)}/>
                    </div>
                    {errors.type && <span style={{color:"red"}}>{errors.type.message}</span>}
                    <div className='bold-font'>
                        <label>Pet Description:</label><br/>
                        <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                    </div>
                    {errors.description && <span style={{color:"red"}}>{errors.description.message}</span>}
                    <p className='bold-font'>Skills (optional):</p>
                    <div>
                        <label>Skill 1:</label><br/>
                        <input type="text" value={skill1} onChange = {(e)=>setSkill1(e.target.value)}/>
                    </div>
                    <div>
                        <label>Skill 2:</label><br/>
                        <input type="text" value={skill2} onChange = {(e)=>setSkill2(e.target.value)}/>
                    </div>
                    <div>
                        <label>Skill 3:</label><br/>
                        <input type="text" value={skill3} onChange = {(e)=>setSkill3(e.target.value)}/>
                    </div>
                    <br/>
                    <Button variant="contained" type="submit">Add Pet</Button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default PetForm;

