import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


const Profile = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const saveUser = async () => {
    const res = await fetch(`/api/users/`,
    {
        method: 'PATCH',
        body: JSON.stringify({ username, password, email}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await res.json();
    if (res.ok) {
        console.log(json)
    }
  };
  const deleteUser = async () => {
    const res = await fetch(`/api/users/`,
    {
        method: 'DELETE',
    })
    const json = await res.json();
    if (res.ok) {
      navigate('/');
    }
  };

  useEffect(() => {

    const fetchUser = async () => {
        const res = await fetch(`/api/users/`, {
            method: 'GET',
        })
        const json = await res.json();
        if (res.ok) {
            setusername(json.name);
            setemail(json.email);
            setpassword(json.password);
        }
        
    }

    fetchUser();
}, [])


  return (
    <Box
      sx={{ width: 980, display: 'flex', flexWrap: 'wrap', justifyContent: "Center" }}>
      <Stack
        direction="column"
        spacing={2}
      >
        <h3>Profile</h3>
        <TextField
          id="user-name"
          label="User Name"
          value={username}
          onChange={e=>setusername(e.target.value)}
        >
        </TextField>
        <TextField
          id="user-email"
          label="User Email"
          value={email}
          onChange={e=>setemail(e.target.value)}
        >
        </TextField>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={e=>setpassword(e.target.value)}
          />
        </FormControl>
        <Stack direction="row">
        <Button variant="contained" onClick={saveUser} sx={{ m: 2, width: '25ch' }}>
          Save
        </Button>
        <Button variant="contained" onClick={deleteUser} sx={{ m: 2, width: '25ch' }}>
          Delete
        </Button>
        </Stack>

      </Stack>
    </Box>
  );
};

export default Profile;