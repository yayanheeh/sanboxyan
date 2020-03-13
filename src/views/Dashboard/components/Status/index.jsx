import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles(theme => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BadgeAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        

<table width="100%" border="0 "><tr><td width="20%" bgcolor="" align="center"><font color="black">
𝐒𝐭𝐨𝐫𝐲</font></td>

<td width="15%" bgcolor="" align="left"><StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
<Link to="/story">
            
      
        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/300px-Bachalpsee_reflection.jpg" />
      </Link>

</StyledBadge></td>
<td width="15%" bgcolor="" align="left"><StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
<Link to="/story">
            
      
        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/300px-Bachalpsee_reflection.jpg" />
      </Link>

</StyledBadge></td>

<td width="15%" bgcolor="" align="left"><StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
<Link to="/story">
            
      
        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/300px-Bachalpsee_reflection.jpg" />
      </Link>

</StyledBadge></td>

</tr></table>

</div>
      
  
  );
}
