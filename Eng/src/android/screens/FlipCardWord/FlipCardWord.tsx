
import React from 'react';
import { FlipCard } from '../../components/FlipCard';
const FlipCardWord=(props:{data:any})=>{
    const {data}=props;
    return (
        <FlipCard data={data}/>
    );
}
export default FlipCardWord;