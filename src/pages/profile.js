import React from 'react';
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

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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
        >
        </TextField>
        <TextField
          id="user-email"
          label="User Email"
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
          />
        </FormControl>
        <Stack direction="row">
        <Button variant="contained" sx={{ m: 2, width: '25ch' }}>
          Save
        </Button>
        <Button variant="contained" sx={{ m: 2, width: '25ch' }}>
          Delete
        </Button>
        </Stack>

      </Stack>
    </Box>
  );
};

export default Profile;