import { Button } from '@mui/material';
import React from 'react';
import Center from './utils/component-library/Center';
import './App.css'

const App = () => {
  return (
    <div className="relative h-[100vh] w-[100vw] bg-[#00005C] -z-20">
      <Center more="bg-[#00005C]/30 backdrop-blur-xl z-10"></Center>

      <div className="absolute top-[50px] left-[50px] h-[400px] w-[400px] bg-gradient-to-br from-[#34D399]/60 via-[#14B8A6]/60 to-[#4ADE80]/60 -z-10 blur-lg customBorder"></div>
      <div className="absolute right-[50px] bottom-[50px] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[] via-[] to-[] -z-10"></div>
    </div>
  );
}

export default App