import React, { Component } from 'react'
import BooksItems from './BooksItems'

export class NextArrow extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {nextImage}=this.props
        return (
            <div>
            <div onClick={nextImage} style={{fontSize: '2em', marginLeft:'12px'}}>
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
          </div>
            </div>
        )
    }
}

export default NextArrow
