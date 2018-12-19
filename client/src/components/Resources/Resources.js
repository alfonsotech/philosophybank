import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Resource from '../Resource'

class Resources extends Component {
  state = {
    docs: [],
    total: null,
    limit: 8,
    page: 1,
    pages: null,
    scrolling: false,
  }

  componentWillMount() {
    this.loadResources()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = () => {
    const { scrolling, pages, page} = this.state
    if (scrolling) return
    if (pages <= page) return
    var lastLi = document.querySelector('ul.resources > li:last-child')
    console.log('lastLi', lastLi);
    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore()
    }

  }

  loadResources = () => {
    const { limit, page, docs } = this.state
    const url = `/api/resources?limit=${limit}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
        docs: [...docs, ...json.docs],
        scrolling: false,
        pages: json.total_pages,
      })
    })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page+1,
      scrolling: true,
    }), this.loadResources)
  }

  render() {
    return <ul className="resources resource-container">
      {
        this.state.docs.map(resource => <li key={resource.id}>
          <Resource {...resource} />
        </li>)
      }
    </ul>
  }

}

export default Resources
