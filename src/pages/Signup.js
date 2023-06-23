import React,{useState} from 'react';
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


const Signup = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const createUser = async () => {
    const res = await fetch(`/api/users/register`,
    {
        method: 'POST',
        body: JSON.stringify({ name, password, email}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await res.json();
    if (!res.ok) {
        console.log(json.error)
    }else{
      navigate("/")
    }
  };


  return (
    <Box
      sx={{ width: 980, display: 'flex', justifyContent: "center" }}>
      <Stack
        direction="column"
        width={200}
        spacing={2}
      >
        <h1>Sign Up</h1>
        <TextField
          id="user-name"
          label="User Name"
          value={name}
          onChange={e=>setname(e.target.value)}
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
            onChange={e=>{setpassword(e.target.value)}}
            
          />
        </FormControl>
        <Stack direction="row">
        <Button variant="contained" onClick={createUser} sx={{ m: 2, width: '25ch' }}>
          Create Account
        </Button>
        </Stack>

      </Stack>
    </Box>
  );
};

export default Signup;






