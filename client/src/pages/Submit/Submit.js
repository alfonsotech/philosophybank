import React, { Component } from 'react'
import axios from 'axios'
import './Submit.css'
var linkPreview = require("link-preview")

class Submit extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      url: '',
      upvotes: 1,
      views: 0,
      expanded: false
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    console.log('event', event);
    const url = this.state.url

    linkPreview.parse(url)
    .then(res => {
      console.log(res)
      let {title, url} = res
      axios.post('/api/resources',  {title, url})
      .then( data => {
              console.log('form submitted, the following resource was added:', data)
              this.setState({
                  title: '',
                  url: '',
                  upvotes: 1,
                  views: 0
              })
              this.props.history.push('/topics')
            })
    })
    .catch(err => console.log(err));
  }


  render() {
    // console.log('this.props', this.props);
      return (
        <div className="Submit">
          <h1>Submit Topic</h1>
          <form onSubmit={this.handleFormSubmit}>
              <input
                className="form-control"
                type="text"
                value={this.state.url}
                name="url"
                placeholder='URL'
                onChange={this.handleInputChange}
                required
              />
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-md btn-light">
                Submit
              </button>
            </div>
          </form>
        </div>
      )
    }
  }


export default Submit
