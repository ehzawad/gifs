import React, {Component} from "react"
import "./App.css"
import axios from "axios"
import SearchForm from "./SearchForm"
import GifList from "./GifList"

class App extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      loading: true
    }
  }

  componentDidMount() {
    const URL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"

    axios
      .get(
        `${URL}`
      )
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error)
      })
  }


  performSearch = query => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
      )
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error)
      })
  }

  render() {
    console.log(this.state.gifs)
    return (
      <div>
        <div>
          <div>
            <h1>GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div>
          {this.state.loading
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs} />}
        </div>
      </div>
    )
  }
}

export default App
