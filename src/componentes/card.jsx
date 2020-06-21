import React from 'react'
import './card.css'


function getColor(props){

    if(props.red) return "Red"
    if(props.blue) return "Blue"
    if(props.green) return "Green"
    return '';
}

export default props => {

    return ( 
        <div className={'Card ' + getColor(props)}>
            <div className='Header'>
              <span className='Title'>{props.title}</span>
            </div>
            <div className='Content'>
                {props.children}
            </div>
            
        </div>
    )
}