import React, { Component } from "react"
// import API from "../../utils/API"
import axios from "axios"
import Resources from '../../components/Resources'
import './Topics.css'

class Topics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trendingTopics: [],
      newTopics: [],
      currentView: 'trendingTopics',
      search:''
    }
  }

  componentDidMount = () => {
    axios.all([this.getTrendingTopics(), this.getNewTopics()])
    .then(axios.spread( (trendingTopics, newTopics) => {
      this.setState({
        trendingTopics: trendingTopics.data,
        newTopics: newTopics.data
      })
    }))
    .catch(err => console.log(err))
  }

  getTrendingTopics = () => axios.get("/api/resources/trending")

  getNewTopics = () => axios.get("/api/resources/new")

  changeView = (currentView) => {
    this.setState({
      currentView: currentView
    })
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  // filterTopics = () => {
  //
  //
  // }

  render() {

    let filteredTopics = this.state[this.state.currentView].filter(
      resource => {
        for(var i =0; i< resource.author.length; i++) {
          var author = resource.author[i].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }

        var title = resource.title.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1

        if(resource.description) {
          var description = resource.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }

        if(resource.categories) {
          for(var j =0; j< resource.categories.length; j++) {
            //if category is a not a Number
            if(typeof resource.categories[j] === 'string'){
              var categories = resource.categories[j].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            }
          }
        }

        if(resource.path) {
          for(var k =0; k< resource.path.length; k++) {
            //if category is a not a Number
            if(typeof resource.path[k] === 'string'){
              var path = resource.path[k].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            }
          }
        }

        if(resource.level) {
          var level = resource.level.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }

        return description || title || author || categories || path || level

      }
    );

    return (
      <div className="Topics">

        <div className="page-header">
          <h1>Topics are...</h1>
          <h3>... written, audio, or video content, crowd-sourced and upv♥ted by you. Go ahead, click on a topic to check it out. Upvote it if you'd recommend it to others. <a href="/submit">Then submit your favorite topics here.</a></h3>

          <div className="search-box">
            <input type="text" placeholder="search topics"
              value={this.state.search}
              onChange={this.updateSearch}
              ></input>
            </div>
        </div>


        <button onClick={() => this.changeView('trendingTopics')}  className='header-button'>Trending Topics</button>

        <button onClick={() => this.changeView('newTopics')} className='header-button'>New Topics</button>

        <Resources
          resources={filteredTopics} history={this.props.history}
        />

    </div>
    )
  }
}

export default Topics
