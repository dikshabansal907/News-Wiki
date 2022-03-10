import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    articles=[]
  constructor(){
    super();
    console.log("i m constructor");
    this.state={
      articles:this.articles,
      loading: true,
      page: 1,
      totalResults: 0
    }
  }
 
  async componentDidMount(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f3b5aec2f01c4658bec823516a45765b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({
        articles: parsedData.articles,
        loading:false,
        totalResults: parsedData.totalResults,
        page:this.state.page + 1
    })
    this.props.setProgress(100);
    }
    fetchMoreData = async () => { 
      this.setState({page: this.state.page + 1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f3b5aec2f01c4658bec823516a45765b&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            // page: this.state.page + 1
        })
     };
  // iss code me news keliye rows banaaaa
  render(){
    // const handleNextClick=async()=>{
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f3b5aec2f01c4658bec823516a45765b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //         this.setState({loading:true});
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         this.setState({
    //             articles: parsedData.articles,
    //             page:this.state.page + 1,
    //             loading:false,
    //             totalResults: parsedData.totalResults,
    //         })  
    //     }

    //   }
    //   const handlePrevClick =  async ()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading:false,
    //     totalResults: parsedData.totalResults,
    // })
    //     }
        
    const gridContainer={
        display:"grid",
        gridTemplateRows:"1fr 1fr 1fr",
        // padding:"2%",
        // gridGap: "50px 100px",
        gridGap:"7rem",
        maxWidth:"30%",
        marginLeft:"8%",
        // marginLeft:"102px",
      }
    return(
      <div className='mainSection'>
      <h2 className='heading'>Trending Now</h2>
      {/* {this.state.loading && <Spinner/>} */}
      {/* <div className='ehnu grid row banaaa...ehde ch map lgaake columns bulaa dusri file cho..okay?'> */}
      <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                > 
      <div style={gridContainer} className="gridContainers">
      {this.state.articles.map((element)=>{
        return <div key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,35):" "} 
          description={element.description?element.description.slice(0,100):"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Class aptent tacitiad litora torquent per conubia nostra. "} 
          imageUrl={element.urlToImage?element.urlToImage:"https://lifeographies.com/static2/preview2/stock-vector-the-question-mark--a-circle-icon--77168.jpg"} 
          newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
      })}
      </div>
      </InfiniteScroll>
                 
      {/* {!this.state.loading&&<div className='prevNextButtonsDiv'>
        <button className='gridButton' disabled={this.state.page<=1} onClick={handlePrevClick}><span style={{fontSize:"40px"}}>&larr;</span></button>
        <button className='gridButton' disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))}onClick={handleNextClick}>&rarr;</button>
      </div>} */}
    </div>
    )
  }
}

