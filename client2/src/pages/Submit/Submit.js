import React, { Component } from 'react'
// import API from '../../utils/API'
import axios from 'axios'
import './Submit.css'

class Submit extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      author:[],
      url: '',
      duration:'',
      description: '',
      upvotes: 1,
      views: 0,
      notes: '',
      media: '',
      mediaType: '',
      institution: '',
      categories: [],
      level: '',
      path: [],
      position: 0,
      pathPosition: [],
      expanded: false
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })

    console.log('this.state inside handleInputChange', this.state);
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const {title, author, url, duration, description, upvotes, views, notes, media, mediaType, institution, categories, level, path, position, pathPosition} = this.state

    axios.post('/api/resources',  {title, author, url, duration, description, upvotes, views, notes, media, mediaType, institution, categories, level, path, position, pathPosition})
    .then( data => {
            console.log('form submitted, the following resource was added:', data)
            this.setState({

                title: '',
                author:[],
                url: '',
                duration:'n/a',
                description: '',
                upvotes: 1,
                views: 0,
                notes: '',
                media: '',
                mediaType: '',
                institution: '',
                categories: [],
                level: '',
                path: [],
                position: 0,
                pathPosition: []

            })
            this.props.history.push('/topics')
          });
  }

  handleExpand = (event) => {
    event.preventDefault()
    if(!this.state.expanded) {
      this.setState({
        expanded: true
      })
    } else {
      this.setState({
        expanded: false
      })
    }
  }

  render() {
    // console.log('this.props', this.props);
    if(!this.state.expanded) {
      return (
        <div className="Submit">
          <h1>Submit Topic</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <h4>
                <strong>Title</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.title}
                name="title"
                placeholder='Title, e.g., "Frankfurt School"'
                onChange={this.handleInputChange}
                required
              />
              <h4>
                <strong>Source URL</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.url}
                name="url"
                placeholder='URL - where is it found?, e.g., "https://www.youtube.com/egh546jhd89"'
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-md btn-light">
                Submit
              </button>
            </div>
          </form>
          <form onSubmit={this.handleExpand}>
            <button
              type="submit"
              className="btn btn-md btn-light">
              Advanced Options
            </button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="Submit">
          <h1>Submit Topic</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <h4>
                <strong>pathPosition</strong>
              </h4>
              <input
              className="form-control"
              type="text"
              value={this.state.pathPosition}
              name="pathPosition"
              placeholder="pathPosition"
              onChange={this.handleInputChange}
            />

            <h4>
              <strong>Title</strong>
            </h4>
            <input
              className="form-control"
              type="text"
              value={this.state.title}
              name="title"
              placeholder='Title, e.g., "Frankfurt School"'
              onChange={this.handleInputChange}
              required
            />

            <h4>
              <strong>Author</strong>
            </h4>
            <input
            className="form-control"
            type="text"
            value={this.state.author}
            name="author"
            placeholder="Author - who made it?"
            onChange={this.handleInputChange}
            required
          />

          <h4>
            <strong>Source URL</strong>
          </h4>
          <input
            className="form-control"
            type="text"
            value={this.state.url}
            name="url"
            placeholder='URL - where is it found?, e.g., "https://www.youtube.com/egh546jhd89"'
            onChange={this.handleInputChange}
            required
          />

          <h4>
            <strong>Description</strong>
          </h4>
          <input
          className="form-control"
          type="text"
          value={this.state.description}
          name="description"
          placeholder="Description - what does it cover or treat?"
          onChange={this.handleInputChange}
        />

        <h4>
          <strong>Duration</strong>
        </h4>
        <input
        className="form-control"
        type="text"
        value={this.state.duration}
        name="duration"
        placeholder="Duration - how long does it take to listen to, watch, or read?"
        onChange={this.handleInputChange}
      />

      <h4>
        <strong>Media Type</strong>
      </h4>
      <input
      className="form-control"
      type="text"
      value={this.state.mediaType}
      name="mediaType"
      placeholder="Media Type - is this Video, Audio, or Written content?"
      onChange={this.handleInputChange}
    />

    <h4>
      <strong>Media</strong>
    </h4>
    <input
    className="form-control"
    type="text"
    value={this.state.media}
    name="media"
    placeholder="media link"
    onChange={this.handleInputChange}

    />

    <h4>
    <strong>Institution</strong>
    </h4>
    <input
      className="form-control"
      type="text"
      value={this.state.institution}
      name="institution"
      placeholder="institution"
      onChange={this.handleInputChange}
    />

    <h4>
      <strong>Categories</strong>
    </h4>
    <input
      className="form-control"
      type="text"
      value={this.state.categories}
      name="categories"
      placeholder="categories"
      onChange={this.handleInputChange}
    />

    <h4>
      <strong>Level</strong>
    </h4>
    <input
      className="form-control"
      type="text"
      value={this.state.level}
      name="level"
      placeholder="level"
      onChange={this.handleInputChange}
    />
  </div>
  <div className="text-center">
    <button
      type="submit"
      className="btn btn-md btn-light">
      Submit
    </button>
  </div>
  </form>
  <form onSubmit={this.handleExpand}>
    <button
      type="submit"
      className="btn btn-md btn-light">
      Simple Submit
    </button>
  </form>
  </div>
)
    }
  }
}

export default Submit
