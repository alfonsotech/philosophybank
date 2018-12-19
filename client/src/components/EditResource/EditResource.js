import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import axios from "axios"
import './EditResource.css'


class EditResource extends Component {
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
      open:false
    }
  }

  componentDidMount = () => {
    const { resource } = this.props;
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
          pathPosition: resource.position
        })
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const {title, author, url, duration, description, upvotes, views, notes, media, mediaType, institution, categories,level, path, position, pathPosition} = this.state

    axios.put('/api/resources/' + this.state._id,  {title, author, url, duration, description, upvotes, views, notes, media, mediaType, institution, categories, level, path, position, pathPosition})
    .then( data => {
            console.log('form submitted, the following resource was added:', data)
          })
            // this.props.history.push('/topics')
  }

  handleDelete = () => {
    console.log('Delete button clicked');
    axios.delete('/api/resources/' + this.state._id)
    this.props.history.push('/topics')
  }

  render() {
    return (
      <MuiThemeProvider>
       <div className="EditResource">
         <h5 onClick={this.handleOpen} className={this.state.category}>
           <span>{this.state.title}</span>


           <span>  | </span>
           <span>{this.state.author}</span>
         </h5>

           <RaisedButton
             className='action-button'
             type="text"
             onClick={this.handleOpen}
             label="Edit"
           />

           <RaisedButton
             className='action-button'
             type="text"
             onClick={this.handleDelete}
             label="Delete"
           />


         <Dialog
           title="Edit Resource"
           modal={false}
           open={this.state.open}
           onRequestClose={this.handleClose}
           autoScrollBodyContent={true}
           >
             <div className="edit-resource">

               <form onSubmit={this.handleFormSubmit}>

                 <div className="form-group">



                   <h4>
                     <strong>Title*</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.title}
                     name="title"
                     placeholder="Title"
                     onChange={this.handleInputChange}
                     required
                   />

                   <h4>
                     <strong>Author*</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.author}
                     name="author"
                     placeholder="Author"
                     onChange={this.handleInputChange}
                     required
                   />

                   <h4>
                     <strong>Source URL*</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.url}
                     name="url"
                     placeholder="URL"
                     onChange={this.handleInputChange}
                     required
                   />

                   <h4>
                     <strong>Duration</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.duration}
                     name="duration"
                     placeholder="duration"
                     onChange={this.handleInputChange}
                   />

                   <h4>
                     <strong>Description</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.description}
                     name="description"
                       placeholder="description"
                     onChange={this.handleInputChange}
                   />


                   <h4>
                     <strong>Upvotes</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.upvotes}
                     name="upvotes"
                     placeholder="upvotes"
                     onChange={this.handleInputChange}
                   />

                   <h4>
                     <strong>Views</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.views}
                     name="views"
                     placeholder="views"
                     onChange={this.handleInputChange}
                   />

                   <h4>
                     <strong>Notes</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.notes}
                     name="notes"
                     placeholder="notes"
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
                     <strong>Media Type</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.mediaType}
                     name="mediaType"
                     placeholder="media type"
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

                   <h4>
                     <strong>Path</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.path}
                     name="path"
                     placeholder="path"
                     onChange={this.handleInputChange}
                   />

                   <h4>
                     <strong>Position</strong>
                   </h4>
                   <input
                     className="form-control"
                     type="text"
                     value={this.state.position}
                     name="position"
                     placeholder="position"
                     onChange={this.handleInputChange}
                   />

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

                 </div>

                 <div className="pull-right">
                   <FlatButton
                     type="text"
                     label="Submit"
                     onClick={this.handleClose}
                    />

                 </div>

               </form>
             </div>
           </Dialog>
       </div>
      </MuiThemeProvider>
    )
  }
}

export default EditResource
