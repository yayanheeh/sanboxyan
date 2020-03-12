import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles,styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Book from '@material-ui/icons/Book';
import Forum from '@material-ui/icons/Forum';
import Hidden from '@material-ui/core/Hidden';


import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Visibility } from '@material-ui/icons';

const MyVisibility = styled(Visibility)({
    color: 'white',
});

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (  <Hidden smUp> 
<BottomNavigation title="My Bottom" style={{ backgroundColor: '#577746' }} 
className={classes.stickToBottom}
>
<br/><br/>
    <BottomNavigation title="My Bottom" style={{ backgroundColor: '#577746' }} 

      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      
 <BottomNavigationAction
        component={Link}
        to="/dashboard"
        label="Home"
        value="Home"
        icon={<Home />}
        className={classes.content}
    />

<BottomNavigationAction
        component={Link}
        to="/tentangkami"
        label="Tentang"
        value="Tentang"
        icon={<FavoriteIcon />}
        className={classes.content}
    />
<BottomNavigationAction
        component={Link}
        to="/paduan"
        label="Paduan"
        value="Paduan"
        icon={<Book />}
        className={classes.content}
    />

<BottomNavigationAction
        component={Link}
        to="/paduan"
        label="Chat"
        value="Chat"
        icon={<Forum />}
        className={classes.content}
    />
      
</BottomNavigation>
</BottomNavigation></Hidden>
  );
}
