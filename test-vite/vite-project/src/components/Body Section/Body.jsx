import { useState } from 'react'
import './Body.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

//SVG ICONS
import AwolIcon from '../../assets/icons/assignment_late_24px.svg'
import SuspensionIcon from '../../assets/icons/Group 1023.svg'
import LateIcon from '../../assets/icons/directions_run_24px.svg'
import LeavesIcon from '../../assets/icons/beach_access_24px.svg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const App = () => {
  return (
    <div className="container">
      <div className='header'>
        <h1>Attendance</h1>            
      </div>

      <div className="body-content">
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexGrow: 1,
              '& > :not(style)': {
                m: 1,
                width: 250,
                height: 60,
                textAlign: 'left',
                padding: 3,
              },
            }}
          >
          <Paper elevation={1}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                  <Avatar sx={{ bgcolor: '#F8F5FD', width:61, height: 61 }}>
                    <img src={AwolIcon} alt="" />
                  </Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h5'>10</Typography>
                <Typography variant='p'>Total Awol</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={1}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                  <Avatar sx={{ bgcolor: '#F3FBF8', width:61, height: 61 }}>
                    <img src={SuspensionIcon} alt="" />
                  </Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h5'>10</Typography>
                <Typography variant='p'>Total Suspension</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={1}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                  <Avatar sx={{ bgcolor: '#F3FAFE', width:61, height: 61 }}>
                    <img src={LateIcon} alt="" />
                  </Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h5'>10</Typography>
                <Typography variant='p'>Total Late</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={1}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                  <Avatar sx={{ bgcolor: '#FDF7F7', width:61, height: 61 }}>
                    <img src={LeavesIcon} alt="" />
                  </Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h5'>10</Typography>
                <Typography variant='p'>Remaining Leaves</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Box>
        </Stack>


        <Stack>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            my: 4,
            '& > :not(style)': {
              m: 2,
              width: '170px',
              height: '170px',
              borderRadius: '40px',
            },
          }}
        >
          <Paper elevation={5} sx={{bgcolor:'#D7D7D7'}}>
              
          </Paper>
          <Paper elevation={5} sx={{bgcolor:'#D7D7D7'}}>

          </Paper>
          <Paper elevation={5} sx={{bgcolor:'#D7D7D7'}}>

          </Paper>
          <Paper elevation={5} sx={{bgcolor:'#D7D7D7'}}>

          </Paper>
          <Paper elevation={5} sx={{bgcolor:'#D7D7D7'}}>

          </Paper>
          <Paper elevation={5} sx={{bgcolor:'#D7D7D7'}}>

          </Paper>
        </Box>
        </Stack>
      </div>
    </div>
  )
}

export default App
