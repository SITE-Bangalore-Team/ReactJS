import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserList from './UserList'
import axios from 'axios';
import UserProfile from './UserProfile'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`User data-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default class UserDetails extends React.Component {
    constructor(){
        super()
        this.state={
            value:0,
            users:[]
        }
    }

   async componentDidMount(){
       try{
    axios.get(`https://reqres.in/api/users?page=2`)
    .then(res => {
      const users = res.data;
      const list=users.data
      const userList=[...list]
      console.log('data',userList)
      this.setState({ users:userList });
    })
}
catch(e){
    console.log('error',e.message)
}
    }

   handleChange = (event, newValue) => {
    this.setState({value:newValue});
  };

   handleChangeIndex = index => {
    this.setState({value:index});
  };
render(){
    const{value,users}=this.state
    console.log('render',users)
  return (
    <div style={{width: 1300,
        margin:'20px',
        textTransform:'none'}}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={this.handleChange}
          style={{textTransform:'none',fontSize:'25px',color:'black'}}
          indicatorColor="primary"
          textColor="primary"
          textTransform="none"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="User List" {...a11yProps(0)} />
          <Tab label="User Profile" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={this.handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <UserList users={users}/>
        </TabPanel>
        <TabPanel value={value} index={1} >
          <UserProfile/>
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}
}