
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';

import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import AccountCircle from "@mui/icons-material/AccountCircle";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
    React.useEffect(()=>{
        if(value===0)
        navigate("/")
        if(value===1)
        navigate("/movies")
        if(value===2)
        navigate("/series")
        if(value===3)
        navigate("/search")
    },[value, navigate])
  return (
    <Box sx={{ width: "100%" }} position="fixed" bottom="0" zIndex="100">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
        
        label="Trending" 
        icon={<WhatshotIcon/>} 
        />


        <BottomNavigationAction 
       
        label="Movies" 
        icon={<MovieIcon/>} 
        />

        <BottomNavigationAction 
        label="TV Series" 
        icon={<LiveTvIcon/>} 
        />
        
        <BottomNavigationAction 
        label="Search" 
        icon={<SearchIcon/>} 
        />
          <BottomNavigationAction 
        label="Account" 
        icon={<AccountCircle/>} 
        />
      </BottomNavigation>
    </Box>
  );
}

