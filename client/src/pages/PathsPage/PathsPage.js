import React, { Component } from "react"
import axios from "axios"
import Paths from '../../components/Paths'
import './PathsPage.css'

class PathsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPaths: [],
      allPaths: [],
      currentView: 'allPaths',
      search: ''
    }
  }

  componentDidMount = () => {
    axios.all([this.getAllPaths(), this.getNewPaths()])
    .then(axios.spread( (allPaths, newPaths) => {

      this.setState({
        allPaths: allPaths.data,
        newPaths: newPaths.data
      })
    }))
    .catch(err => console.log(err))
  }

  getAllPaths() {
    return axios.get("/api/paths")
  }

  getNewPaths() {
    return axios.get("/api/paths/new")
  }

  changeView(currentView) {
    this.setState({currentView: currentView})
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    let filteredTopics = this.state[this.state.currentView].filter(
      (path) => {
        if(path.description) {
          var description = path.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }
        if(path.author) {
          for(var i =0; i< path.author.length; i++) {
            var author = path.author[i].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
          }
        }

        if(path.categories) {
          for(var j =0; j< path.categories.length; j++) {
            //if category is a not a Number
            if(typeof path.categories[j] === 'string'){
              var categories = path.categories[j].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            }
          }
        }

        var title = path.title.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1

        return title  || description || author || categories
      }
    )
    return (

        <div>
          <div className="Paths">
            <div className="page-header">

            <h1>Paths are...</h1>
            <h3>... curated by passionate experts. They offer the opportunity to study philosophy in a more structured way. Go ahead, click on a path now to start your journey.</h3>

            <div className="search-box">
              <input type="text" placeholder="search paths"
                value={this.state.search}
                onChange={this.updateSearch}
                ></input>
              </div>
            </div>


        <button onClick={() => this.changeView('newPaths')} label="New Paths" className='header-button'>New Paths</button>
        <button onClick={() => this.changeView('allPaths')} label="All Paths" className='header-button'>All Paths</button>

        <Paths paths={filteredTopics} />
    </div>
    </div>

    )
  }
}

export default PathsPage
