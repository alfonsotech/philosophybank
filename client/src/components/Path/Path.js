import React, { Component } from 'react'
import Resource from '../../components/Resource'
import {Card, CardHeader, CardText} from 'material-ui/Card'
// import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from "axios"
import './Path.css'

class Path extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      path: '',
      title: '',
      author:'',
      description: '',
      resources: [],
      media: '',
      categories: '',
      date: ''
    }
  }

  componentDidMount = (props) => {
    const { path } = this.props
    this.setState({
      path:path.path,
      id: path.id,
      title: path.title,
      author:path.author,
      description: path.description,
      media: path.media,
      categories: path.categories,
      date: path.date
    })
  }

  render() {
    return (
      <MuiThemeProvider>
      <Card>
        <CardHeader
          title={this.state.title}
          subtitle={this.state.description}
          actAsExpander={true}
          showExpandableButton={true}
        />
        {/* <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions> */}
        <CardText expandable={true}>

          <PathResource path={this.state.path}/>

        </CardText>
      </Card>
    </MuiThemeProvider>
    )
  }
}

class PathResource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '',
      resources: []
    }
  }

  componentDidMount = (props) => {
    const pathName = this.props.path
    console.log('pathName', pathName);
    axios.get('/api/resources/' + pathName)
      .then( results => {
        this.setState({
          path: this.props.path,
          resources:results.data
        })
        console.log('results from path call as this.state.resources: ', this.state.resources);
      })
  }

  render() {
    return (
      this.state.resources.map( (resource, i) => {
        return (

          <Resource resource={resource} />

        )
      })
    )
  }
}

export default Path
