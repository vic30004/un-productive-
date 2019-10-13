import React, {useState} from 'react';
import UnproductiveState from '../../context/unproductive/UnproductiveState'
import Form from './layout/Form'

const Unproductive = () => {
    return (
        <UnproductiveState>
            <Form/>
        </UnproductiveState>
    )
}

export default Unproductive
