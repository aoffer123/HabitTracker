import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';
import BarChartIcon from '@mui/icons-material/BarChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import React, { useEffect, useState } from 'react';
import TableRow from '@mui/material/TableRow';
import { Checkbox, TableHead } from '@mui/material';



const Home = () => {
  const [habits, setHabits] = useState(null);
  const [week, setWeek] = useState(null);
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    loadDate()
    const fetchHabits = async () => {
      const res = await fetch('/api/habits');
      const json = await res.json();
      if (res.ok) {
        setHabits(json);
      }
    }

    fetchHabits();
  }, [])
    const loadDate = () => {
      const twoWeeks = ["","","","","","","", "","","","","","",""];
      const today = new Date(Date.now()).getDay();
      const todayDate = new Date(Date.now());
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      // Load the current week and next week of the habit
      let i = 1;
      let i2 = 7;
      for (let index = 0; index < twoWeeks.length; index++) {
        if (index <= 7)  // Loading previous week
        {
          twoWeeks[index] = new Date(todayDate);
          twoWeeks[index].setDate(todayDate.getDate()- i2);
          i2 -= 1;
        }
        else  // Loading next week
        {
          twoWeeks[index] = new Date(todayDate + i);
          twoWeeks[index].setDate(todayDate.getDate()+(i));
          i++;
        }
        twoWeeks[index] = twoWeeks[index].toLocaleDateString("en-US")
      }

      setWeek(twoWeeks);
    }

    
  

    const handleChange = async (event) => {
      
      if(week !== null){
        const [date,id] = event.target.getAttribute('id').split(',');
        const completedHabit = {
          date:date,
          id:id
        }
        console.log(completedHabit)
        await fetch('api/habits/complete', {
          method: 'POST',
          body: JSON.stringify(completedHabit),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      }
    }


  return (
    <TableContainer>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h4"
        id="tableTitle"
        component="div"
      >
        Track Your Habits
      </Typography>

      <Table sx={{ minWidth: 500 }} aria-label="Habit table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>{week && week[0]}</TableCell>
          <TableCell>{week && week[1]}</TableCell>
          <TableCell>{week && week[2]}</TableCell>
          <TableCell>{week && week[3]}</TableCell>
          <TableCell>{week && week[4]}</TableCell>
          <TableCell>{week && week[5]}</TableCell>
          <TableCell>{week && week[6]}</TableCell>
          <TableCell>{week && week[7]}</TableCell>
          <TableCell>{week && week[8]}</TableCell>
          <TableCell>{week && week[9]}</TableCell>
          <TableCell>{week && week[10]}</TableCell>
          <TableCell>{week && week[11]}</TableCell>
          <TableCell>{week && week[12]}</TableCell>
          <TableCell>{week && week[13]}</TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          {habits && habits.map((habit) => (
            <TableRow
              key={habit._id}
              inputProps={{'id':habit._id}}
              onChange = {handleChange}
            >
              <TableCell >
                {habit.name}
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[0]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[1]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[2]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[3]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[4]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[5]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[6]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[7]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[8]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[8]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[10]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[11]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[12]},${habit._id}`}}></Checkbox>
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{'id':`${week[13]},${habit._id}`}}></Checkbox>
              </TableCell>
            </TableRow>
            
            
          ))}


        </TableBody>
        
      </Table>
    </TableContainer>

  );
}

export default Home;
