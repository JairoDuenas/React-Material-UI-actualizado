import { IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

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
        width: '80%'
      }}
    >
      <TextField
        id='outlined-basic'
        label='GitHub User'
        variant='outlined'
        placeholder='Octocat'
        value={valueInput}
        onChange={onSearchValueChange}
        size='small'
        sx={{width: '90%', background: '#fafafa',}}
      />
      <IconButton
        onClick={handleSubmit}
        size='samll'
        sx={{ left: '-45px' }} >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export default Searcher;
