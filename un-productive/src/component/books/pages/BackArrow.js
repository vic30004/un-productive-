import React, { Component } from 'react'
import BooksItems from './BooksItems'

export class BackArrow extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {previousImage}=this.props
        return (
            <div>
            <div onClick={previousImage} style={{fontSize: '2em',marginRight:'12px'}}>
            <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
          </div>
            </div>
        )
    }
}

export default BackArrow
