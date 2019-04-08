import React, { Component } from 'react'
// import fetch from 'isomorphic-fetch'
import Resource from '../components/Resource'
import './Resources.css'

class Resources extends Component {

  state = {
      search: ''
    }


  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }

  render() {

    let filteredResources = this.props.resources.filter(
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

    if(this.props.loading) {
      return <div  className="Resources">Loading...</div>
    } else {
      return (
        <div className="Resources">
        <div className="search-box">
          <input  type="text" placeholder="Enter Search Term(s)"
            value={this.state.search}
            onChange={this.updateSearch}
            ></input>
          </div>
          <div className="views-container">
            <button onClick={() => this.props.changeView('trendingResources')}  className='header-button'>Trending Resources</button>
            <span>|</span>
            <button onClick={() => this.props.changeView('newResources')} className='header-button'>New Resources</button>
          </div>

          <ol className="resources">
            {
              filteredResources.map((resource, index) => <li className="list-item" key={resource._id}>
                <Resource {...resource} index={index} />
              </li>)
            }
          </ol>
      </div>
    )}
  }
}

export default Resources
