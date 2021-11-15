import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    '& ul li:first-child': {
      color: 'yellow',
      // height:"30px",
      textAlign: 'center',
      backgroundColor: '#74992e',
      border: 'thick double #32a1ce',
      boxShadow: '0px 0px 5px Red'
    },
    '& ul': {
      width: '10rem',
      // height: '10rem',
      border: 'thick double #32a1ce',
      paddingLeft: '0',
      margin: '0'
    },
    '& ul li:not(ul li:first-child)': {
      listStyle: 'none',
      textAlign: 'left',
      height: '40px'
    }
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
        <ul>
          <li>b</li>
          <li>b</li>
          <li>b</li>
          <li>b</li>
          <li>b</li>
        </ul>
        <ul>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
        </ul>
        <ul>
          <li>d</li>
          <li>d</li>
          <li>d</li>
          <li>d</li>
          <li>d</li>
        </ul>
      </div>
      <div className={classes.root}>
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
        <ul>
          <li>b</li>
          <li>b</li>
          <li>b</li>
          <li>b</li>
          <li>b</li>
        </ul>
        <ul>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
        </ul>
        <ul>
          <li>d</li>
          <li>d</li>
          <li>d</li>
          <li>d</li>
          <li>d</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
