import React from 'react'

const About = () => {
  return (
    <div className="container">
      <p className='display-4'>Contact Information</p>
      <div className="row ml-3">
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fas fa-laptop"></i>
          <a href="http://leseanbruneau.com" target="_blank" rel="noopener noreferrer">Website</a>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fas fa-rss"></i>
          <a href="https://medium.com/@leseanbruneau" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fab fa-twitter"></i>
          <a href="https://twitter.com/leseanbruneau" target="_blank" rel="noopener noreferrer">@leseanbruneau</a>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-3">
          <i className="mr-3 fab fa-github"></i>
          <a href="https://github.com/leseanbruneau/react-ccja" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
      <hr />
      <p className='display-4'>Simple Finance App</p>
      <hr />
      <div className="display-5">
        <ul>
            <li>Mortgage Calculator for reference</li>
            <li>Major Stock Indexes Closing prices</li>
        </ul>
        <p>
            Note: Some data is pulled from Yahoo Finance.  If the API goes away, then I won't be updating this site any more.
        </p>
      </div>
      <br></br>
      <p className='display-4'>Goals For This Project</p>
      <hr />
    </div>
  )
}

export default About;