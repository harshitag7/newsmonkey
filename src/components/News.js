import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'


export class News extends Component {

  static propTypes = {
    pageSize : PropTypes.number,
    country : PropTypes.string,
    category : PropTypes.string
  }

  static defaultProps = {
    pageSize : 9,
    country : 'in',
    category : 'general'
  }

  articles = [];

  constructor() {
    super();  // because this class news is the derived class of Component and we need to call the constructor of super/parent class first
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false
    }
  };
  /*
  to fetch the data & change the state using the fetched data we will be using componentDidMount method/function
  */

  async componentDidMount() {
    console.log("componentDidMount", process.env.REACT_APP_API_KEY);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parcedData = await data.json();   /*jo data aayega usko json me karna hi padaega to acces the articles key in the parcedData */
    this.setState({ loading: false })
    this.setState({
      articles: parcedData.articles,
      totalResults: parcedData.totalResults
    })
  }

  increasePageNumber = async () => {
    console.log("componentDidMount", process.env.REACT_APP_API_KEY);
    console.log('increasePageNumber');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })/*loading-start*/
    let data = await fetch(url);
    let parcedData = await data.json();   /*jo data aayega usko json me karna hi padaega to acces the articles key in the parcedData */
    this.setState({ loading: false }) /*loading-end*/
    this.setState({
      articles: parcedData.articles,
      page: this.state.page + 1
    })
  }

  decreasePageNumber = async () => {
    console.log('decreasePageNumber');
    console.log("componentDidMount", process.env.REACT_APP_API_KEY);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })/*loading-start*/
    let data = await fetch(url);
    let parcedData = await data.json();   /*jo data aayega usko json me karna hi padaega to acces the articles key in the parcedData */
    this.setState({ loading: false }) /*loading-end*/
    this.setState({
      articles: parcedData.articles,
      page: this.state.page - 1
    })
  }



  render() {

    // let {pageSize} = this.props;
    return (
      <>
          <h1 className='my-3 text-center'>Latest News</h1>
        <div className="container my-3 ">
          {this.state.loading && <Spinner />}
          {!this.state.loading && <div className=" row my-2">
            {this.state.articles?.map((article) => { return <NewsItem title={article.title} description={article.description} newsUrl={article.url} imageUrl={article.urlToImage} /> })}

          </div>}
        </div>
         <div className="container mb-5 mt-3 d-flex justify-content-between">
          <button type='button' disabled={this.state.page <= 1} className="btn btn-primary btn-lg" onClick={this.decreasePageNumber}>&larr; Previous</button>
          <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary btn-lg" onClick={this.increasePageNumber}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News
