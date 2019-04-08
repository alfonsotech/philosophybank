import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import axios from "axios"
import SocialButtons from '../SocialButtons'
import './Resource.css'


class Resource extends Component {
  state = {
    upvotes: '',
    views: ''

  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     _id: '',
  //     title: '',
  //     author:[],
  //     url: '',
  //     duration:'',
  //     description: '',
  //     upvotes: 0,
  //     views: 0,
  //     notes: '',
  //     media: '',
  //     mediaType: '',
  //     institution: '',
  //     categories: [],
  //     level: '',
  //     path: [],
  //     position: 0,
  //     pathPosition: [],
  //     open:false,
  //     expanded: false
  //   }
  // }

  componentDidMount = () => {
    this.setState({
      upvotes: this.props.upvotes,
      views: this.props.views,
    })
  }

  handleUpvote = () => {
    const upvotes = this.state.upvotes + 1
    this.setState({upvotes:upvotes})
    axios.put("/api/resources/" + this.props._id, {
      upvotes
    })
    // this.props.history.push('/')
  }

  handleUpViews = () => {
    const views = this.state.views + 1
    this.setState({views:views})
    axios.put("/api/resources/" + this.props._id, {
      views
    })
      // this.props.history.push('/')
  }

  render() {
    // console.log('this.props', this.props);
    return (
      <div className="Resource" id={this.props._id}>
        <div className="resource-header">
            <p className={this.props.category}>
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
            <div className="resource-media">
              {!this.props.media ? <span></span> : this.state.mediaType === 'www.youtube.com' || this.state.mediaType  === 'www.youtube-nocookie.com' || this.state.mediaType === "vimeo.com" || this.state.mediaType === "player.vimeo.com" ? <iframe src={this.state.url} title={this.state.title} width="280" height="157" target="_parent" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img className="resource-img" src={this.props.media} alt={this.props.title} />}

            </div>
            <div className="resource-text">
              <h2 onClick={this.handleUpViews}><a href={this.props.url} target="_blank">
                {this.props.title}</a>
              </h2>
              <p>{this.props.description}</p>
              <small><p><a href={this.props.url} target="_blank">{this.props.mediaType}</a></p></small>
             <SocialButtons resource={this.props}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Resource
