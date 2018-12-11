import React, { Component } from 'react'
// import Dialog from 'material-ui/Dialog'
import FontAwesome from 'react-fontawesome'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
// import fontawesome from 'react-fontawesome'
import axios from "axios"
import './Resource.css'

// const customContentStyle = {
//   width: '90%',
//   maxWidth: 'none',
// }

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
    const { resource } = this.props
    this.setState({
      _id: resource._id,
      title: resource.title,
      author:resource.author,
      url: resource.url,
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
    this.props.history.push('/topics')
  }

  handleUpViews = () => {
    const viewed = this.state.views + 1
    this.setState({views:viewed})
    axios.put("/api/resources/" + this.state._id, {
      views: viewed
    })
  }

  handleOpen = () => {
    this.handleUpViews()
    if(this.state.media) {
      window.open(this.state.media)
    } else {
      // this.setState({open: true});
      window.open(this.state.url)
    }
  }

  // handleClose = () => {
  //   this.setState({open: false});
  // }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded})
  }

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle})
  }

  handleExpand = () => {
    this.setState({expanded: true})
  }

  handleReduce = () => {
    this.setState({expanded: false})
  }

  // handleInputChange = event => {
  //   const { name, value } = event.target
  //   this.setState({
  //     [name]: value
  //   })
  //   console.log('this.state.notes', this.state.notes);
  // }

  // handleNoteSubmit = event => {
  //   event.preventDefault()
  //   const notes = this.state.notes
  //   console.log('this.state.notes', this.state.notes)
  //   axios.put("/api/resources/note" + this.state._id, {notes: notes})
  //   .then( data => {
  //     console.log("New notes submitted: ", data);
  //   })
  // }

  render() {
    // console.log('this.props inside resource component', this.props.history);
    let mediaType;
    if(this.state.mediaType) {
      if(this.state.duration) {
         mediaType = <span><small>  ( {this.state.mediaType}, {this.state.duration} ) </small></span>
      } else {
        mediaType = <span><small>  ( {this.state.mediaType} ) </small></span>
      }
    } else {
      mediaType = null
    }

    let author;
    if(this.state.author.length) {
       author = <span>| {this.state.author}</span>
    } else {
      author = null
    }

    let description;
    if(this.state.description) {
       description = <span>Description: {this.state.description}</span>
    } else {
      description = 'No description provided'
    }

    return (
      <MuiThemeProvider>
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}
        className="card-item"
          >
          <CardHeader
              actAsExpander={true}
              showExpandableButton={true}
          />
          <CardText>
            <div className="list-item">

                <div className="Resource">
                  <div className="resource-body">
                    <small>
                      <p className="small-text">
                      <span onClick={this.handleUpvote}>
                        <FontAwesome
                          className='heart'
                          name='heart'
                          style={{ padding: 5, margin:0}}
                        /> {this.state.upvotes}</span>
                      <span>
                        <FontAwesome
                        className='icon'
                        name='eye'
                        style={{ padding: 5, margin:0}}
                      />{this.state.views}</span>
                      </p>
                    </small>
                    <h5 onClick={this.handleOpen} className={this.state.category}>
                      <span>{this.props.index}</span>
                      <span>{this.state.title}</span>
                      {author}
                      {mediaType}
                    </h5>
                  </div>
                </div>
            </div>
          </CardText>
          <CardText expandable={true}>
            {description}

            {/* <div className="resource-notes">
              <hr />
              <p>Notes:</p>
              <div>{this.state.notes}</div>
              <form onSubmit={this.handleNoteSubmit}>
                <textarea
                  value={this.state.value} onChange={this.handleInputChange}
                  placeholder="What stayed with you?"
                />
               <input type="submit" value="Submit" />
             </form>
            </div> */}
          </CardText>

          {/* <CardActions>
            <FlatButton label="Expand" onClick={this.handleExpand} />
            <FlatButton label="Reduce" onClick={this.handleReduce} />
          </CardActions> */}
        </Card>

      {/*<FlatButton type="text" className="broken-link-button"><a href="mailto:thinkphilosophy@nym.hush.com?Subject=Broken%20Link%20Report&body=Title%20of%20Topic%20with%20broken%20link:%20">Report Broken Link</a></FlatButton>*/}
      </MuiThemeProvider>
    )
  }
}

export default Resource
