import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBar from './components/SideBar Section/SideBar.jsx'
import BodySection from './components/Body Section/Body.jsx'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <NavBar />
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
          <BodySection />
          </Item>
        </Grid>
      </Grid>
    </Box>
  </React.StrictMode>
)
