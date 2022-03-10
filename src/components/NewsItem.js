import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let{title, description, imageUrl,newsUrl,author,date}=this.props;
    const width="300px"
    const height="200vh"
    // const fontWeight="1000"
    return(
      <div className='grids'>
          <img className="gridImage" src={imageUrl} alt="#" width={width} height={height} />
          <h4 className='gridHeading'>{title}</h4>
          <p className='gridDescription left'>{description}</p><br></br>
          <p className="smallText" style={{padding:"10px", fontSize:"x-small", color:"#F5BC53"}}>By {author} on {new Date (date).toGMTString()}</p>
          <button className='gridButton right'><a href={newsUrl}  rel="noreferrer" target="_blank" >Read More &rarr;</a></button>
         </div>
    )
  }
  // YAHAAAN PE COLUMS KO EXPORT KRAAAA....SMJHI?
}
