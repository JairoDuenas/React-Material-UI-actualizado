import { Stack, Typography } from '@mui/material';
import React from 'react';
import LocationInformation from '../../components/LocationInformation';
import PaperInformation from '../../components/PaperInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <div>
      <>
        <Stack sx={{justifyContent: 'center'}}>
          <Typography mt={2} variant='body1'>
          {bio != null ? `${bio}` : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, porro. Consequuntur ipsum corporis sint modi sequi. Quam deserunt odit veniam vel ea unde. Sunt eaque iure consequuntur consectetur nobis eum?'}
          </Typography>
          <PaperInformation userState={userState} />
          <LocationInformation userState={userState} />
        </Stack>
      </>
        
    </div>
  );
}

export default Description;
