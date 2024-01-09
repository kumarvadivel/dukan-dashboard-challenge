
import React from 'react';
export default function NavItem(props){
    return (
        <li className='navItem' key={props.navData.id}>
            <img src={require('../../assets/icons/'+props.navData.icon+'.svg')} alt='icon'/>
            <div className='mobiledisplay-none'>
            {props.navData.label}
            </div>
        </li>
        
    )
}