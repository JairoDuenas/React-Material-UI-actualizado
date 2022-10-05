import { Stack, Typography } from '@mui/material';
import React from 'react';

const PrincipalInformation = (props) => {
  const { userState } = props;
  const {
    name,
    login,
    created_at,
  } = userState

  return (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ justifyContent: 'space-evenly' }}

        columns={{ xs: 1, sm: 4, md: 8 }}
        spacing={{ xs: 1, sm: 4, md: 4 }}
      >
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='subtitle2'>{created_at}</Typography>
      </Stack>
      <Typography variant='caption'>{`@${login}`}</Typography>
    </>
  );
}

export default PrincipalInformation;
