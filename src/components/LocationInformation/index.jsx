import { Grid, Paper, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import React from 'react';

const LocationInformation = (props) => {
  const { userState } = props;
  const {
    location,
    twitter_username,
    blog,
    company
  } = userState;

  return (
    <Grid container>
      <Grid item xs={6} >
        <Stack>
          <LocationOnIcon />
          <Typography>
            {location ? `${location}` : ' Not Available'}
          </Typography>
          </Stack>
      </Grid>
      <Grid item xs={6}>
        <TwitterIcon />
        <Typography>
          {twitter_username ? `@${twitter_username}` : 'No available'} 
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <LanguageIcon />
        <Typography>
          {blog ? `${blog}` :' Not Available'}
        </Typography> 
      </Grid>
      <Grid item xs={6}>
        <BusinessIcon />
          <Typography>
            {company ? `${company}` : 'Not Available'}
          </Typography> 
      </Grid>
    </Grid>
  );
}

export default LocationInformation;
