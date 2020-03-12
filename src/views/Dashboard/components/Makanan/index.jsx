import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';    
  
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import green from '@material-ui/core/colors/green';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  media: {
    height: 140,
    maxWidth: 200,
  },
}));


export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
        
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           
          </Typography>
</CardContent>
  
<Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor=""
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >

          
      <table width="1000%" border="0 "><tr>

<td width="25%" bgcolor="" align="left"><Card title="My AppBar" style={{ backgroundColor: '#163F23' }} 
   className={classes.root}>
      <CardContent>

<Badge color="secondary" badgeContent="200k ">
<img src="https://cdn.pixabay.com/photo/2018/01/11/17/29/ice-tea-3076517_1280.jpg" width="150" height="150"/>
</Badge>

      </CardContent> </Card></td>&ensp; 
<td width="25%" bgcolor="" align="left"><Card title="My AppBar" style={{ backgroundColor: '#163F23' }} 
  className={classes.root}>
      <CardContent>
<Badge color="secondary" badgeContent="2k ">
<img src="https://cdn.pixabay.com/photo/2017/05/29/13/13/lime-2353743_1280.jpg" width="150" height="150"/>
</Badge>

      </CardContent> </Card></td>

&ensp; 
<td width="25%" bgcolor="" align="left"><Card title="My AppBar" style={{ backgroundColor: '#163F23' }} 
   className={classes.root}>
      <CardContent>
<Badge color="secondary" badgeContent="2k ">
<img src="https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg" width="150" height="150"/>
</Badge>

      </CardContent> </Card></td>

&ensp; 
<td width="25%" bgcolor="" align="left"><Card title="My AppBar" style={{ backgroundColor: '#163F23' }} 
   className={classes.root}>
      <CardContent>
<Badge color="secondary" badgeContent="2k ">
<img src="https://cdn.pixabay.com/photo/2016/07/21/11/17/mineral-water-1532300_1280.jpg" width="150" height="150"/>
</Badge>
      </CardContent> </Card></td>
</tr></table>             
      
</Tabs>

<CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Makanan
          </Typography>
</CardContent>



<Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor=""
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >

          
      <table width="1000%" border="0 "><tr>

<td width="25%" bgcolor="" align="left"><Card className={classes.root}>
      <CardContent>

<Badge color="secondary" badgeContent="2k ">
<img src="https://cdn.pixabay.com/photo/2018/01/11/17/29/ice-tea-3076517_1280.jpg" width="150" height="150"/>
</Badge>

      </CardContent> </Card></td>&ensp; 
<td width="25%" bgcolor="" align="left"><Card className={classes.root}>
      <CardContent>
<Badge color="secondary" badgeContent="2k ">
<img src="https://cdn.pixabay.com/photo/2017/05/29/13/13/lime-2353743_1280.jpg" width="150" height="150"/>
</Badge>

      </CardContent> </Card></td>

&ensp; 
<td width="25%" bgcolor="" align="left"><Card className={classes.root}>
      <CardContent>
<Badge color="secondary" badgeContent="2k ">
<img src="https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg" width="150" height="150"/>
</Badge>

      </CardContent> </Card></td>

&ensp; 
<td width="25%" bgcolor="" align="left"><Card className={classes.root}>
      <CardContent>
<Badge color="secondary" badgeContent="2k ">
<img src="https://cdn.pixabay.com/photo/2016/07/21/11/17/mineral-water-1532300_1280.jpg" width="150" height="150"/>
</Badge>
      </CardContent> </Card></td>
</tr></table>             
      
</Tabs>

    </div>
  );
}
