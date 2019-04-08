import React, { Component } from 'react'

export default class SubmitBox extends Component {

  state = {
      url: ''
    }

    onChange = event => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
    }

  render() {
    console.log('this.props', this.props);
    return (
      <form onSubmit={(url) => this.props.handleUrlSubmit(this.state.url)}>
        <input
          className="form-control"
          type="text"
          value={this.state.url}
          name="url"
          placeholder='Paste In URL'
          onChange={this.onChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
