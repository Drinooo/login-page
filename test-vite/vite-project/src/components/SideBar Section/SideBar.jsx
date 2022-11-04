import * as React from 'react';
import './SideBar.css';
import '../../App.css';
import Logo from '../../assets/NMS Logo.png' ;
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//SVG ICONS
import HomeIcon from '../../assets/icons/HomeFilled.svg'
import PersonIcon from '../../assets/icons/PersonFilled.svg'
import DateRangeIcon from '../../assets/icons/DaterangeOutlined.svg'
import ErrorIcon from '../../assets/icons/ErrorOutlined.svg'
import CallIcon from '../../assets/icons/call_end_24px.svg'
import RemoveIcon from '../../assets/icons/remove_circle_outline_24px.svg'
import MallIcon from '../../assets/icons/local_mall_24px.svg'
import FingerprintIcon from '../../assets/icons/fingerprint_24px.svg'
import RestoreIcon from '../../assets/icons/restore_24px.svg'
import AssignIcon from '../../assets/icons/assignment_ind_24px.svg'
import AccessIcon from '../../assets/icons/access_time_24px.svg'

const SideBar = () => {
  return (
    <div className='sideBar'>
        <div className='logoTitle'>
          <img src={Logo} alt="NMS Logo" className='logo'/>
          <h3 className='title'>Attendance</h3>
        </div>
        
        <div className='menu'>
        <h4>Menu</h4>
          <div className="list">
            <List className='ListItemText' aria-label="menu labels">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={HomeIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={PersonIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="Schedule" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={DateRangeIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="Roster" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={PersonIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="Leaves" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={ErrorIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="AWOL" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={CallIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="NCNS" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={RemoveIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="Suspension" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={MallIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="Extra Work" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={FingerprintIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="Biometrics" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={RestoreIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="ATS Dashboard" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>

        <h4>Forms</h4>
          <div className="list">
            <List className='ListItemText'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={HomeIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="My Leave" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={PersonIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="My Extra Work" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={DateRangeIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="My Schedule" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={PersonIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="My Biometrics" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={ErrorIcon}></img>
                  </ListItemIcon>
                  <ListItemText primary="My ATS Dashboard" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </div>

        <div className="list">
          <List className='ListItemText'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={ErrorIcon}></img>
                </ListItemIcon>
                <ListItemText primary="Get Help" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
    </div>
  )
}

export default SideBar
