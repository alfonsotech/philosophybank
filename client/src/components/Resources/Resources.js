import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Resource from '../Resource'
import './Resources.css'

class Resources extends Component {
  state = {
    docs: [],
    history:null,
    total: null,
    limit: 10,
    page: 1,
    pages: null,
    scrolling: false,
    trendingTopics:[],
    newTopics: [],
    currentView: 'newTopics',
    search:''
  }

  componentDidMount() {
    this.loadTrendingTopics()
    this.loadNewTopics()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = () => {
    const { scrolling, pages, page} = this.state
    if (scrolling) return
    if (pages <= page) return
    var lastLi = document.querySelector('ul.resources > li:last-child')

    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore()
    }

  }

  loadTrendingTopics = () => {
    const { limit, page, trendingTopics } = this.state
    let url = `/api/resources/trending?limit=${limit}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
        trendingTopics: [...trendingTopics, ...json.docs],
        scrolling: false,
        pages: json.total_pages,
      })
    })
  }


  loadNewTopics = () => {
    const { limit, page, newTopics } = this.state
    let url = `/api/resources/new?limit=${limit}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
        newTopics: [...newTopics, ...json.docs],
        scrolling: false,
        pages: json.total_pages,
      })
    })
  }

  loadMore = () => {
    if(this.state.currentView === 'trendingTopics') {
      this.setState(prevState => ({
        page: prevState.page+1,
        scrolling: true,
      }), this.loadTrendingTopics)
    } else {
      this.setState(prevState => ({
        page: prevState.page+1,
        scrolling: true,
      }), this.loadNewTopics)
    }


  }

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
        <ul className="resources resource-container">
          {
            filteredTopics.map(resource => <li key={resource._id}>
              <Resource {...resource} />
            </li>)
          }
        </ul>
    </div>
  )}

}

export default Resources
