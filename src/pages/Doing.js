import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';
import BarChartIcon from '@mui/icons-material/BarChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";



const Doing = () => {
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await fetch('/api/habits');
      const json = await res.json();
      if (res.ok) {
        setHabits(json);
      }
    }

    fetchHabits();
  }, [])

 




  return (

    <TableContainer>
    <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h4"
          id="tableTitle"
          component="div"
        >
          Habits
        </Typography>
      <Table sx={{ minWidth: 500 }} aria-label="Habit table">
        <TableBody>
          {habits && habits.map((habit) => (
            <TableRow
              key={habit._id}
            >
              <TableCell >
                {habit.name}
              </TableCell>
              <TableCell align="right">
                <ButtonGroup key={habit._id}size="small" variant="contained">
                  <Link to="/Edit" state={{ id: habit._id }}>
                  <Button startIcon={<EditIcon />}>Edit</Button>
                  </Link>
                  <Link to="/Metrics" state={{ id: habit._id }}>
                  <Button startIcon={<BarChartIcon />}>Statistics</Button>
                  </Link>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>

  );
};

export default Doing;