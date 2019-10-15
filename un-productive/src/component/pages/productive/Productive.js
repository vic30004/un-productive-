import React, { useState } from 'react';
import ProductiveState from '../../context/productive/ProductiveState';
import Form from './layout/Form'



const Productive = props => {
  return (
    <ProductiveState>
     <Form/>
    </ProductiveState>
  );
};

export default Productive;
