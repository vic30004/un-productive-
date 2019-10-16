import React, {Fragment, useContext, useEffect} from 'react'
import ProductiveContext from '../../../context/productive/ProductiveContext';
import PbooksItems from './PbooksItems.js';
import Spinner from '../../../layout/Spinner'

const PBooks = () => {
    const productiveContext = useContext(ProductiveContext);

    const {pBooks,getNewBook,loading} = productiveContext;
    useEffect(()=>{
        getNewBook();
        //eslint-disabled
    }, [])
    return (
        <Fragment>
        {pBooks !== null && !loading ? (<div id="productive">
        <div className="pContainer">
            {pBooks.map(books=>(
                <PbooksItems key={books.id} books={books}/>
            ))}
        </div>
        </div>):<Spinner/>}
        
        </Fragment>
    )
}

export default PBooks
