import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Resource from '../Resource'
import Header from '../Header'
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
    trendingResources:[],
    newResources: [],
    currentView: 'trendingResources',
    search:''
  }

  componentDidMount() {
    this.loadTrendingResources()
    this.loadNewResources()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = () => {
    const { scrolling, pages, page} = this.state
    if (scrolling) return
    if (pages <= page) return
    var lastLi = document.querySelector('ol.resources > li:last-child')

    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore()
    }

  }

  loadTrendingResources = () => {
    const { limit, page, trendingResources } = this.state
    let url = `/api/resources/trending?limit=${limit}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
        trendingResources: [...trendingResources, ...json.docs],
        scrolling: false,
        pages: json.total_pages,
      })
    })
  }


  loadNewResources = () => {
    const { limit, page, newResources } = this.state
    let url = `/api/resources/new?limit=${limit}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
        newResources: [...newResources, ...json.docs],
        scrolling: false,
        pages: json.total_pages,
      })
    })
  }

  loadMore = () => {
    if(this.state.currentView === 'trendingResources') {
      this.setState(prevState => ({
        page: prevState.page+1,
        scrolling: true,
      }), this.loadTrendingResources)
    } else {
      this.setState(prevState => ({
        page: prevState.page+1,
        scrolling: true,
      }), this.loadNewResources)
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

    let filteredResources = this.state[this.state.currentView].filter(
      resource => {
        for(var i =0; i< resource.author.length; i++) {
          var author = resource.author[i].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }

        if(resource.title) {
          var title = resource.title.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1
        }


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
      <div className="Resources">
        <Header history={this.props.history} />
        <div className="search-box">
        <input  type="text" placeholder="Search Resources"
          value={this.state.search}
          onChange={this.updateSearch}
          ></input>
          </div>
        <div className="views-container">
          <button onClick={() => this.changeView('trendingResources')}  className='header-button'>Trending Resources |</button>
          <button onClick={() => this.changeView('newResources')} className='header-button'>New Resources</button>
        </div>

        <ol className="resources resource-container">
          {
            filteredResources.map((resource, index) => <li key={resource._id}>
              <Resource {...resource} index={index} history={this.props.history} />
            </li>)
          }
        </ol>
    </div>
  )}

}

export default Resources
