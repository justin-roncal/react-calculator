import React from 'react';
import ScreenRow from './screenRow';


const Screen =(props) => {
    return (
        <div className="screen">
            <ScreenRow value={props.question} />
            <ScreenRow value={props.andwer} />
        </div>
    );
}


Screen.propType ={
    question: React.PropType.string.isRequired,
    answer: React.PropType.string.isRequired
}

export default Screen;