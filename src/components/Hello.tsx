// import React from 'react';
import { Button } from '@mui/material';

interface HelloProps {  // Define an interface for your settings data
    name: string;
  }

const Hello : React.FC<HelloProps> = ({ name }) => (
  <Button variant="contained">Hello, {name}!</Button>
);

export default Hello;
