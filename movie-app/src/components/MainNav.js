
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import StarIcon from "@mui/icons-material/Star";

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
        if(value===4)
        navigate("/account")
        if(value===5)
        navigate("/favorite")
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

        <BottomNavigationAction 
        label="Account" 
        icon={<StarIcon/>} 
        />
      </BottomNavigation>
    </Box>
  );
}

