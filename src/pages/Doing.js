import React, {useEffect, useState} from 'react';
  
const Doing = () => {
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await fetch('/api/habits');
      const json = await res.json();
      if(res.ok){
        setHabits(json);
      }
    }

    fetchHabits();
  }, [])


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      {habits && habits.map( (habit) => (
        // temp change p tag to custom component passing habit._id as key and habit as a prop
        // schema 
        //habit {
        //   name
        //   _id
        //   description
        //   date
        //   category
        //   importance
        //   createdAt
        //}
        // see backend/models/habit.js
        <p key={habit._id}>{habit.name}</p>
      )) }
    </div>
  );
};
  
export default Doing;