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
    <div>
      <Paper elevation={12}>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Paper>
    </div>
  );
}

export default PaperInformation;
