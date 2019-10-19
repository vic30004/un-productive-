/*import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BooksItems = ({ books: { title, imageLinks } }) => {
  return (
    <section id='books'>
      <div className="card">
        <h2 className='title'>{title}</h2>
        <img src={imageLinks.thumbnail} alt='' />
        <Link to={`/productive/${title}`} className='btn btn-book'>
          Learn More
        </Link>
      </div>
    </section>
  );
};

BooksItems.propTypes = {
  books: PropTypes.object.isRequired
}
export default BooksItems;*/
import React, {Component} from 'react';
import request from 'supertest';
/*import Books from './component/books/pages/Books';*/
import logo from './images/Un-productive.png';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import { tsConstructorType } from '@babel/types';

class App extends Component{
  constructor(props){
      super(props);
      this.state={
        books:[],
        loading:false,
      /*games:[],*/
        slideCount:0,
      }
    }

    componentWillMount(){
      this.fetchBooks();
    }
    fetchBooks(){
      request
      .get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=1&key=${process.env.REACT_APP_GOOGLE_KEY}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data.items);
        this.setState({books:data.items, loading:false});
    })
  }
  
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Slideshow</h1>
        </header>
        

          /* Displaying the images in slideshow*/
          <div>
          {this.state.books.map((photo, key)=> {
            return(
              <div key={photo.id}>
                <img src={photo.images.standard_resolution.url} alt={photo.caption}/>
              </div>
            )
          })}
          </div>

          /* Display caption in our books*/
          <div style={{width:'600px', margin:'24px auto', fontstyle: 'italic'}}>
            {logo.caption !== null ? logo.caption.text: ''}
          </div>

          /* Adding the slider arrows*/
          const BackArrow=(props)=>(
            <div style={{fontsize: '2em', marginRight:'12px'}}>
              <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
            </div>
          )

          const NextArrow=(props)=>(
            <div style={{fontsize:'2em', marginleft:'12px'}}>
              <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i> 
            </div>
            )

          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to my slideshow</h1>
            </header>
            <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', marginTop: '30px'}}>
              {this.state.slideCount !==0 ? <BackArrow previousImage={this.previousImage}/> : ''};
              {this.state.books.map((photo, key)=>{
                if(this.state.books.indexOf(photo) === this.state.slideCount){
                  return(
                    <div key={photo.id} style={{margin: '0 auto'}}>
                      <img src={photo.images.standard_resolution.url} alt=''/>
                      <div style={{width:'600px', margin:'24px auto', fontstyle:'italic'}}>
                        {photo.caption !== null ? photo.caption.text: ''}
                      </div>
                    </div>
                  )
                }
                return ''
              })}
              {this.state.slideCount !== (this.state.books.lenght -1)? <NextArrow nextImage={this.nextImage}/>:''}</div>

              nextImage(){
              this.setState({slideCount:this.state.slidecount + 1})
                }
              previousImage(){
              this.setState({slideCount:this.state.slideCount - 1})
                }
              
              const BackArrow={props} => (
                <div onClick={props.previousImage} style={{fontSize: '2em',marginRight:'12px'}}>
                  <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
                </div>
              )
              const NextArrow=(props) => (
                <div onClick={props.nextImage} style={{fontSize: '2em', marginLeft:'12px'}}>
                  <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                </div>
              )
              
              <BackArrow previousImage={this.previousImage}/>
              <NextArrow nextImage={this.nextImage}/>

              //1678826271.1677ed0.15c57fd844a74f45be4f7fa9de32a5e1
        
            <div>
              {console.log(this.state.books)};
            </div>
        
      };  
    )
  }

export default App;