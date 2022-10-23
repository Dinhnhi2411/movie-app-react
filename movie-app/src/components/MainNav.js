
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';

import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

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
      </BottomNavigation>
    </Box>
  );
}


// import React, { useEffect } from "react";
// import {styled} from "@mui/material";
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import LiveTvIcon from '@mui/icons-material/LiveTv';
// import MovieIcon from '@mui/icons-material/Movie';
// 
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import { useNavigate } from "react-router-dom";

// const useStyles = styled({
//   root: {
//     width: "100%",
//     position: "fixed",
//     bottom: 0,
//     backgroundColor: "#2d313a",
//     zIndex: 100,
//   },
// });

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (value === 0) {
//      navigate.push("/");
//     } else if (value === 1) {
//       navigate.push("/movies");
//     } else if (value === 2) {
//      navigate.push("/series");
//     } else if (value === 3) {
//       navigate.push("/search");
//     }
//   }, [value, navigate]);

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction
//         style={{ color: "white" }}
//         label="Trending"
//         icon={<WhatshotIcon />}
//       />
//       <BottomNavigationAction
//         style={{ color: "white" }}
//         label="Movies"
//         icon={<MovieIcon />}
//       />
//       <BottomNavigationAction
//         style={{ color: "white" }}
//         label="TV Series"
//         icon={<LiveTvIcon />}
//       />
//       <BottomNavigationAction
//         style={{ color: "white" }}
//         label="Search"
//         icon={<SearchIcon />}
//       />
//     </BottomNavigation>
//   );
// }