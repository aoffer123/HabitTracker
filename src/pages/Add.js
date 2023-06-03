import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import { Link } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Label } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';






const Add = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [importance, setImportance] = useState('');
    const [error,setError] = useState(null);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleChange2 = (event) => {
        setImportance(event.target.value);
    };


    const handleClick = () => {
        console.info('You clicked the Chip.');
      };



    const handleSubmit = async (event) => {
        event.preventDefault();
        //temp replace with date logic
        const date = Date(Date.now);
        const habit = {name,userId,description,category,importance,date}
        const res = await fetch('api/habits',{
            method: 'POST',
            body: JSON.stringify(habit),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const json = await res.json();

        if (!res.ok){
            setError(json.error);
        }else{
            setError(null);
            setName('');
            setDescription('');
            setCategory('');
            setImportance('');
            console.log('worked lol');
        }
    }
    



    return (
        <Box
            sx={{ width: 980, display: 'flex', flexWrap: 'wrap', justifyContent: "Center" }}>
            <div>
                <Stack direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={2}>
                    <h1>Add A Habit</h1>
                    <TextField
                        label="Enter a Name for your Habit"
                        id="outlined-start-adornment"
                        sx={{ m: 2, width: '40ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Name</InputAdornment>
                        }}
                        variant="filled"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <TextField
                        label="Enter a Description for your Habit"
                        id="outlined-start-adornment"
                        sx={{ m: 2, width: '70ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Description</InputAdornment>
                        }}
                        variant="filled"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <FormControl sx={{ minWidth: 300 }} size="medium">
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
                    </FormControl>
                    <FormControl sx={{ minWidth: 300 }} size="medium">
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
                    </FormControl>

                    <Stack direction="row" spacing={1}>
                    <Checkbox label="M" variant="outlined" color="primary" onClick={handleClick} />
                    <Chip label="T" variant="outlined" color="primary" onClick={handleClick} />
                    <Chip label="W" variant="outlined" color="primary" onClick={handleClick} />
                    <Chip label="T" variant="outlined" color="primary" onClick={handleClick} />
                    <Chip label="F" variant="outlined" color="primary" onClick={handleClick} />
                    <Chip label="S" variant="outlined" color="primary" onClick={handleClick} />
                    <Chip label="S" variant="outlined" color="primary" onClick={handleClick} />
                    
                    </Stack>


                    <Button variant="contained" sx={{ m: 2, width: '25ch' }} onClick={handleSubmit}>
                        Save
                    </Button>
                    {error && <div>{error}</div>}
                    <Box></Box>

                    
                    <Box></Box>

                </Stack>





            </div>

        </Box>

    );
}

export default Add;