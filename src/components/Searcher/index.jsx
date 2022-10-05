import { CardMedia, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../statics/logo2.svg';

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
        width: '100%'
      }}
    >
      <CardMedia
          component='img'
          alt='logoPersonal'
          image={logo}
          sx={{
            width: '40px',
            height: '40px',
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
        size='small'
        sx={{
          width: '70%',
          background: '#fafafa',
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size='samll'
        sx={{ left: '-40px' }} >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export default Searcher;
