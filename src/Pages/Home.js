import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from '../Components/SearchBar';
import CurrentWeather from '../Components/CurrentWeather'
import '../styles/main.css'

 class Home extends Component {
  state = {
    location: '',
    searchLocation: "",
    selectedLocation: "",
    currentWeather: '',
    weatherLoaded : false,
    isSearching: false,
    isLoading: false
  }


  handleSearchInput = (e) => {
    this.setState({
        [e.target.name] : e.target.value,
        isSearching: true
    })

    // clearTimeout(this.timeout);

    // this.timeout = setTimeout(() => {
    //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=320ecea5186519242dbb779eeba2757a`)
    //     .then(res => {
    //       this.setState({
    //         searchLocation: res.data
    //       })
    //     })
    //     .catch(err => console.log(err))
    // })
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name] : e.target.value,
      isLoading: true,
      weatherLoaded: false,
    })
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=320ecea5186519242dbb779eeba2757a&units=metric`)
    .then(res => {
      console.log(res.data)
      this.setState({
        currentWeather: res.data,
        isLoading: false,
        isSearching: false,
        currentWeatherLoaded: true
      })
    })
    .catch(err => console.log(err))
  }
  //Implement location search 
  render() {
    return (
      <div className="home">
        <SearchBar
          searchlocation={this.state.searchLoaction}
          handleSearch={this.handleSearchInput}
          isSearching={this.state.isSearching}
          submit={this.handleSubmit}
        />
        {this.state.currentWeatherLoaded ? 
        ( <CurrentWeather 
            currentWeather={this.state.currentWeather} /> ) 
        : null}
      </div>
    )
  }
}


export default Home