import React from 'react';
import  Box  from '@mui/material/Box';
import Stack from '@mui/material/Stack';
  
export default function Home() {
  return (
    <Box
      sx={{ width: 980, display: 'flex', flexWrap: 'wrap', justifyContent: "Center" }}>
      <div>
        <Stack direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={2}>
          <h1>Add A Habit</h1>
          <hr />
        </Stack>
      </div>
    </Box>
  )
}
  
