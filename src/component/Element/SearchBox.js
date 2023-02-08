import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Typography } from '@mui/material';

export default function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Typography sx={{backgroundColor:'#6B6B6B',color:'#fff', width: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    height: 47
    }}>
        Search
        </Typography>
    </Paper>
  );
}