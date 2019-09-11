import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';



class Home extends React.Component {
  state = {
    showIsochrones: false,
    modeSelected: '',
    timeSelected: '',
  };

  onChangeMode = event => {
    const {value} = event.target
    console.log(value)
    this.setState({ modeSelected: value })
  }

  onChangeTime = event => {
    this.setState({ timeSelected: event.target.value })
  }

  update = () => {
    const selectedOptions = {
      mode: this.state.modeSelected,
      time: this.state.timeSelected
    }
    
    console.log(selectedOptions);
    // aqui ya tenemos el objeto con los dos atributos
    // dispatch({ selectedOptions: {mode: this.state.modeSelected, time: this.state.timeSelected}})

  }
  
  render() {
    const { crop, croppedImageUrl, src } = this.state;
    
    const currencies = [
      {
        value: 'USD',
        label: 'Dollar $',
      },
      {
        value: 'EUR',
        label: 'Euro €',
      },
      {
        value: 'BTC',
        label: 'Bitcoins ฿',
      },
      {
        value: 'JPY',
        label: 'Yenes ¥',
      },
    ];

    return (
        <div style={{display: "block"}}>
          <TextField
            id="standard-select-currency"
            select
            label="Mode"
            value={this.state.modeSelected}
            onChange={this.onChangeMode}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-currency"
            select
            label="Time"
            value={this.state.timeSelected}
            onChange={this.onChangeTime}
            helperText="Please select your time"
            margin="normal"
          >
            <MenuItem value={1}>1 Hour</MenuItem>
            <MenuItem value={2}>2 Hour</MenuItem>
            <MenuItem value={3}>3 Hour</MenuItem>
          </TextField>

          <Button variant="contained" color="primary" onClick={this.update}>
            Save
          </Button>
        </div>
    );
  }
}

export default Home;