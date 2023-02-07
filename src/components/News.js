import React, { useEffect,useState } from 'react'
import NewsItem from './newsitem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
const news=(props)=>{
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 document.title=`LokeshNews-${capitalizeFirstLetter(props.category)}`;
 
   
   const  UpdateNews=async()=>{
      props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`
      let data = await fetch(url);
      props.setProgress(30);
      let parseddata = await data.json();
      props.setProgress(50);
      setArticles(parseddata.articles);
      setLoading(false);
      setTotalResults(parseddata.totalResults);
        props.setProgress(100);
    }

   useEffect(() => {
    UpdateNews();
   }, [])
   

    const fetchMoreData = async() => {
         
          setLoading(false);
     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pagesize}`
     setPage(page+1);
      setLoading(true);
      let data = await fetch(url);
      let parseddata = await data.json();
      setArticles(articles.concat(parseddata.articles));
      setLoading(false);
      setTotalResults(parseddata.totalResults);
    };
  

    return (

      <>
        <h2 className="text-center my-200" style={{marginTop:'70px'}}>LokeshNews - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
         {loading && <Spinner/>}
           <InfiniteScroll
           dataLength={articles.length}
           next={fetchMoreData}
           hasMore={articles.length!==totalResults}
           loader={<Spinner/>}>
             <div className="container">
          <div className="row">
         {articles.map((element, index)=>{return <div className="col-md-4 my-2" key={index}><NewsItem source={element.source.name} author={element.author?element.author:"Unknown"} date={element.publishedAt} newsUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ljxzdxolgg50psch_1653498234.jpeg"} 
              title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,70):""}/></div> })}
          </div>   
          </div>
          </InfiniteScroll>
      </>
    )

}
news.defaultProps = {
  country:"us",
  pagesize:3,
  category:"sports"
}
news.propTypes = {
country:PropTypes.string,
pagesize:PropTypes.number,
category:PropTypes.string
}
export default news