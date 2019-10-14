import React, {Fragment, useContext, useEffect} from 'react'
import UnproductiveContext from '../../../context/unproductive/UnproductiveContext';
import UgamesItems from './UgamesItems';
import Spinner from '../../../layout/Spinner'

const Ugames = () => {
    const unproductiveContext = useContext(UnproductiveContext);

    const {uGames,getNewGame,loading} = unproductiveContext;
    useEffect(()=>{
        getNewGame();
        //eslint-disabled
    },[])
    return (
        <Fragment>
            {uGames !==null && !loading ?(<div id="productive">
            <div className="pContainer">
            {uGames.map(games=>(
                <UgamesItems key={games.id} games={games}/>
            ))}
            </div>
            
            </div>):<Spinner/>}
        </Fragment>
    )
}

export default Ugames
