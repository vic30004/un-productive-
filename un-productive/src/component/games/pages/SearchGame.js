import React, {Component} from 'react'
import Header from "../../layout/Header"

class SearchGame extends Component {
    constructor(props){
        super(props)
        this.state = {
            games:[]
        }
    }
componentDidMount(){
        let queryUrl =
    `https://api.rawg.io/api/games?page_size=5&search=${this.props.text}`;
  fetch(queryUrl)
    .then(res => res.json())
    .then(data => {console.log(data.results)
    this.setState({games:data})
    })
} 

    render(){
return (
        <div>
            
        </div>
    )
    }
    
}

export default SearchGame


