
import React from 'react';
//import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';




export default function Habit() {



  return (







    <Stack direction="column" alignItems="center" spacing={3}>
      <Box
        sx={{
          margin: 2,
          padding: 10,
          boxShadow: 1,
          justifyContent: 'center',
          backgroundColor: '#f2f2f2',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        }}>
        <h1 style = {{color: '#007fff'}} >Add A Habit</h1>

        <Link to="/Add">
          <Button variant="contained" startIcon={<AddIcon />}>
            Add A Habit
          </Button>
        </Link>

      </Box>
    </Stack>







  );
}






