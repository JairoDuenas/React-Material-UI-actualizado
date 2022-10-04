import { IconButton, Stack, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {
  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}
    >
      <TextField
        id='outlined-basic'
        label='GitHub User'
        variant='outlined'
        placeholder='Octocal'
        size='small'
        sx={{width: '90%', background: '#fafafa',}}
      />
      <IconButton size='samll' sx={{left: '-45px'}} >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export default Searcher;
