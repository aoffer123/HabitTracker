import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [id, setid] = useState(location.state.id);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const handleChange2 = (event) => {
        setImportance(event.target.value);
    };

    const [habits, setHabits] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [importance, setImportance] = useState('');

    
    const saveHabit = async () => {
        console.log()
        const res = await fetch(`/api/habits/${id}`,
        {
            method: 'PATCH',
            body: JSON.stringify({ name, description, category, importance}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json();
        if (res.ok) {
            console.log(json)
        }
    };
    
    const deleteHabit = async () => {
        const res = await fetch(`/api/habits/${id}`, {
            method: 'DELETE',
        })
        const json = await res.json();
        if (res.ok) {
            navigate('/doing');
        }
    };


    useEffect(() => {

        const fetchHabits = async () => {
            const res = await fetch(`/api/habits/${id}`, {
                method: 'GET',
            })
            const json = await res.json();
            if (res.ok) {
                setName(json.name);
                setDescription(json.description);
                setCategory(json.category)
                setImportance(json.importance)
            }
            
        }

        fetchHabits();
    }, [])

    return (
        <div>
            <Box sx={{ width: 980, display: 'flex', justifyContent: "center" }}>
                <Stack
                    direction="column"
                    spacing={2}
                >

                    <h3>Edit A Habit</h3>

                    <TextField
                        id="habit-name"
                        label="Name"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    >
                    </TextField>
                    <TextField
                        id="habit-description"
                        label="Description"
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    >
                    </TextField>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Description</InputAdornment>
                        }}
                        onChange={handleChange}
                        variant="filled"
                    >
                        <MenuItem value={"Exercise"}>Exercise</MenuItem>
                        <MenuItem value={"Health"}>Health</MenuItem>
                        <MenuItem value={"Financial"}>Financial</MenuItem>
                        <MenuItem value={"Wellbeing"}>Wellbeing</MenuItem>
                        <MenuItem value={"Around The House"}>Around The House</MenuItem>
                    </Select>
                    <InputLabel id="importance-select-label">Importance</InputLabel>
                    <Select
                        labelId="importance-select-label"
                        id="importance-select"
                        value={importance}
                        label="Importance"
                        onChange={handleChange2}
                        variant="filled"
                    >
                        <MenuItem value={"Critical"}>Critical</MenuItem>
                        <MenuItem value={"High"}>High</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={"Low"}>Low</MenuItem>
                        <MenuItem value={"Trivial"}>Trivial</MenuItem>
                    </Select>
                    <Stack direction="row">
                    <Button variant="contained" onClick={saveHabit} sx={{ m: 2, width: '25ch' }}>
                        Save
                    </Button>
                    <Button variant="contained" onClick={deleteHabit} sx={{ m: 2, width: '25ch' }}>
                        Delete
                    </Button>
                    </Stack>


                </Stack>
            </Box>
        </div>

    );
};
export default Edit;

