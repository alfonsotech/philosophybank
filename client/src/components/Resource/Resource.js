import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import axios from "axios"
import './Resource.css'

class Resource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      title: '',
      author:[],
      url: '',
      duration:'',
      description: '',
      upvotes: 0,
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
      open:false,
      expanded: false
    }
  }

  componentDidMount = () => {
    let resource = this.props

    this.setState({
      _id: resource._id,
      title: resource.title,
      author:resource.author,
      url: resource.url.replace("watch?v=", "embed/"),
      duration: resource.duration,
      description: resource.description,
      upvotes: resource.upvotes,
      views: resource.views,
      notes: resource.notes,
      media: resource.media,
      mediaType: resource.mediaType,
      institution: resource.institution,
      categories: resource.categories,
      level: resource.level,
      path: resource.path,
      position: resource.position,
      pathPosition: resource.pathPosition
    })
  }

  handleUpvote = () => {
    const upvoted = this.state.upvotes + 1
    this.setState({upvotes:upvoted})
    axios.put("/api/resources/" + this.state._id, {
      upvotes: upvoted
    })
    this.props.history.push('/')
  }

  handleUpViews = () => {
    const viewed = this.state.views + 1
    this.setState({views:viewed})
    axios.put("/api/resources/" + this.state._id, {
      views: viewed
    })
      this.props.history.push('/')
  }

  render() {
    // console.log('this.props.history', this.props.history);

    return (
      <div className="Resource" id={this.state._id}>
        <div className="resource-header">
            <p className={this.state.category}>
            <span>Rank#:{this.props.index + 1}</span>
            <span onClick={this.handleUpvote}>
              <FontAwesome
                className='heart'
                name='heart'
                style={{ padding: 5, margin:0}}
              /> Upvotes: {this.state.upvotes}</span>
            <span>
              <FontAwesome
              className='icon'
              name='eye'
              style={{ padding: 5, margin:0}}
            />Views: {this.state.views}</span>
            </p>
            </div>
            <div className="resource-body">

            {this.state.mediaType === 'www.youtube.com' || this.state.mediaType  === 'www.youtube-nocookie.com' ? <iframe src={this.state.url} title={this.state.title} width="280" height="157" target="_parent" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img className="resource-img" src={this.state.media} alt={this.state.title} />}

            <div className="resource-text">
              <h2 onClick={this.handleUpViews}><a href={this.state.url} target="_blank">
                {this.state.title}</a>
              </h2>
              <p>{this.state.description}</p>
              <small><p><a href={this.state.url} target="_blank">{this.state.mediaType}</a></p></small>
            </div>
        </div>
      </div>
    )
  }
}

export default Resource
