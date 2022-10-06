import { CardMedia, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../statics/logo.png';

const Searcher = (props) => {

  const { setInputUser } = props
  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }

  const handleSubmit = () => {
    setInputUser(valueInput);
  }

  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '100%',
        height: '55px'
      }}
    >
      <CardMedia
          component='img'
          alt='logoPersonal'
          image={logo}
          sx={{
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            marginX: '10px'
          }}
        />
      <TextField
        id='outlined-basic'
        label='GitHub User'
        variant='outlined'
        placeholder='Octocat'
        value={valueInput}
        onChange={onSearchValueChange}
        size='medium'
        sx={{
          width: '70%',
          background: '#fafafa',
        }}
      />
      <IconButton
        onClick={handleSubmit}
        // size='medium'
        sx={{
          left: '-55px',
          height: '55px',
          width: '55px'
        }} >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export default Searcher;
