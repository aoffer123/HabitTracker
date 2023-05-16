
import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';




export default function Habit() {



  return (
    <Box
      sx={{ width: 980, display: 'flex', flexWrap: 'wrap', justifyContent: "Center" }}>
      <div>
        <Stack direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={2}>
          <h1>Add A Habit</h1>
          <hr />
          <Link to="/Add">
            <Button variant="contained" startIcon={<AddIcon />}>
              Add A Habit
            </Button>
          </Link>
          <hr />
          
        </Stack>
        </div>

        </Box>



        );
}






