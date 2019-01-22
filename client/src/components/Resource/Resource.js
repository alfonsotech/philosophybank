import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import axios from "axios"
import './Resource.css'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon
} from 'react-share'

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
            <div className="resource-media">
              {this.state.mediaType === 'www.youtube.com' || this.state.mediaType  === 'www.youtube-nocookie.com' || this.state.mediaType === "vimeo.com" || this.state.mediaType === "player.vimeo.com" ? <iframe src={this.state.url} title={this.state.title} width="280" height="157" target="_parent" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img className="resource-img" src={this.state.media} alt={this.state.title} />}
            </div>
            <div className="resource-text">
              <h2 onClick={this.handleUpViews}><a href={this.state.url} target="_blank">
                {this.state.title}</a>
              </h2>
              <p>{this.state.description}</p>
              <small><p><a href={this.state.url} target="_blank">{this.state.mediaType}</a></p></small>
              <div className="share-container">

                <div className="share-button">
                 <TwitterShareButton
                   url={this.state.url}
                   title={this.state.title}
                   via="tPhilosophia"
                   >
                   <TwitterIcon
                     size={24}
                     round />
                 </TwitterShareButton>
               </div>

               <div className="share-button">
                <FacebookShareButton
                  url={this.state.url}
                  quote={this.state.description}
                  >
                  <FacebookIcon
                    size={24}
                    round />
                </FacebookShareButton>
              </div>

              <div className="share-button">
                <WhatsappShareButton
                  url={this.state.url}
                  title={this.state.title}
                  separator=":: "
                  >
                  <WhatsappIcon size={24} round />
                </WhatsappShareButton>
              </div>

              <div className="share-button">
                <LinkedinShareButton
                  url={this.state.url}
                  title={this.state.title}
                  windowWidth={750}
                  windowHeight={600}
                  >
                  <LinkedinIcon
                    size={24}
                    round />
                </LinkedinShareButton>
              </div>

              <div className="share-button">
                <PinterestShareButton
                  url={String(window.location)}
                  media={`${String(window.location)}/${this.state.media}`}
                  windowWidth={1000}
                  windowHeight={730}
                  >
                  <PinterestIcon size={24} round />
                </PinterestShareButton>
              </div>

              <div className="share-button">
                <RedditShareButton
                  url={this.state.url}
                  title={this.state.title}
                  windowWidth={660}
                  windowHeight={460}
                  >
                  <RedditIcon
                    size={24}
                    round />
                </RedditShareButton>
              </div>



              <div className="share-button">
                <EmailShareButton
                  url={this.state.url}
                  subject={this.state.title}
                  body={this.state.description + ': ' + this.state.url}
                  >
                  <EmailIcon
                    size={24}
                    round />
                </EmailShareButton>
              </div>





              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Resource
