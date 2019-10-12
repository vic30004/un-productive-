import React, {Fragment, useContext} from 'react'
import ProductiveContext from '../../../context/productive/ProductiveContext';
import PbooksItems from './PbooksItems.js';

const PBooks = () => {
    const productiveContext = useContext(ProductiveContext);

    const {pBooks} = productiveContext
    return (
        <Fragment>
        <div id="productive">
        <div className="pContainer">
            {pBooks.map(books=>(
                <PbooksItems key={books.author} books={books}/>
            ))}
        </div>
        </div>
        </Fragment>
    )
}

export default PBooks
