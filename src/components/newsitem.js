import React from 'react'

const newsitem = (props)=>{

      let {title,description,imageUrl,newsUrl,date,author,source} = props;
    return (
      <div >
         <div className="card" >
           <div className="container " >
  <img className="card-img-top" style={{height: '200px',width:'{200*1.5}'}} src={imageUrl} alt=""/>
  <span style={{
    position: 'absolute',
    top:' 0px',
    right: '15px'}} className="badge badge-success">{source}</span></div>
  <div className="card-body" style={{height: '350px',width:'auto'}}>
    <h5 className="card-title">{title}...  </h5>
 
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author}  [{new Date(date).toGMTString()}]</small></p>
    <a href={newsUrl} target="_target" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default newsitem