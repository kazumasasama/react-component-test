import * as React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button, Container, Grid, Typography, TextField, Menu, MenuItem, Fade} from '@mui/material';

function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Timer</MenuItem>
        <MenuItem onClick={handleClose}>Counter</MenuItem>
      </Menu>
    </div>
  )
}

function Counter() {
  const [count, setCount] = React.useState(0)
  const [input1, setInput1] = React.useState('')
  const [currentTime, setCurrentTime] = React.useState(moment().format('YYYY-MM-DD HH:mm:ss'))

  React.useEffect(()=> {
    setInterval(() => {
      setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'))
    },1000)
  }, [currentTime])

  function handlePlus() {
    setCount(count + 1)
  }

  return (
    <Container maxWidth='sm'>
      <FadeMenu/>
      <Grid container spacing={2}>

          <Grid xs={12} item>
            <div>
              <Typography variant='h4' gutterBottom>Current Time</Typography>
              <Typography variant='h6'>{currentTime}</Typography>
            </div>
          </Grid>
          <Grid xs={6} md={8} className='counter-grid' item>
            <Button
              variant='contained'
              className='btn'
              onClick={ handlePlus }
            >
              カウンター: {count}
            </Button>
          </Grid>
          <Grid xs={6} className='text-counter-grid' item>
            <Typography variant='h5'>文字数カウンター</Typography>
            <TextField
              className='text-counter'
              value={input1}
              onChange={event => setInput1(event.target.value)}
              placeholder='Enter text here'
              multiline
              rows={3}
              color='info'
            />
            <Typography>{input1.length} letters in your text.</Typography>
          </Grid>
      </Grid>
    </Container>
  )
}

// function Flame() {
//   return (

//   )
// }

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
