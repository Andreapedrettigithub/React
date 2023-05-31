import React from 'react';

export const Title = (props) => {
    console.log(props);
    return (
        <h2 className='greeting'>{props.greeting}</h2>
    );
}

export default Title;