import { Stack, Typography } from '@mui/material';
import React from 'react';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <div>
      <>
        <Stack>
          <Typography>
          {bio != null ? `${bio}` : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, porro. Consequuntur ipsum corporis sint modi sequi. Quam deserunt odit veniam vel ea unde. Sunt eaque iure consequuntur consectetur nobis eum?'}
          </Typography>
        </Stack>
      </>
        
    </div>
  );
}

export default Description;
