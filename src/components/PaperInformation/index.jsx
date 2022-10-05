import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const PaperInformation = (props) => {
  const { userState } = props;
  const {
    public_repos,
    followers,
    following,
  } = userState
  return (
    <Paper elevation={12} sx={{marginTop: '15px'}}>
      <Stack sx={{
        justifyContent: 'space-evenly',
        margin: '20px'
      }}
        columns={{ xs: 2, sm: 2, md: 4 }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        direction={{ xs: 'column', sm: 'row' }}
      >
      <Stack
          direction={{ xs: 'row', sm: 'column' }}
          sx={{justifyContent: 'space-between'}}
      >
        <Typography variant='h5'>Repos</Typography>
        <Typography variant='h6'>{public_repos}</Typography>
      </Stack>
        <Stack
          direction={{ xs: 'row', sm: 'column' }}
          sx={{ justifyContent: 'space-between' }}
        >
        <Typography variant='h5'>Followers</Typography>
        <Typography variant='h6'>{followers}</Typography>
      </Stack>
        <Stack
          direction={{ xs: 'row', sm: 'column' }}
          sx={{ justifyContent: 'space-between' }}
        >
        <Typography variant='h5'>Following</Typography>
        <Typography variant='h6'>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default PaperInformation;
