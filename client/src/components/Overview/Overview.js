import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome'
import './Overview.css';

const paths = [{
  icon: '✽',
  title: 'Crowsourced Philosophy Topics',
  message: 'Written, audio, or video content submitted and rated by you and organized into trending topic lists, so you can easily find the best and most popular philosophy content on the interwebs, crowsourced by you.',
  link:"/topics",
  linkText: "See trending Topics..."
},{
  icon: '✾',
  title: 'Curated Learning Paths',
  message: 'Curated by passionate experts, learning Paths offer the opportunity to study philosophy in a more structured way. Whatever your level or interests, you are likely to find a learning path worth following here.',
  link:"/paths",
  linkText: "Explore curated Paths..."
}
]

class Overview extends Component {
  render() {
    return (
      <section className="Overview">
        {paths.map((path, index) => {
          return (
            <div  className="Card" key={index}>
              <a className="path-link" href={path.link}>  <h1>{path.icon}</h1></a>
              <a className="path-link" href={path.link}><h4>{path.title}</h4></a>
              <p>{path.message}</p>
              <a className="path-link" href={path.link}><p>{path.linkText}</p></a>
            </div>
          )
        })}
      </section>
    );
  }
}

export default Overview;
