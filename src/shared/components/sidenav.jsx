import {sideNavItems} from '../../data/sideNavUtils'
import { useState,useEffect } from 'react';
import React from 'react';
import downArr from '../../assets/icons/chevronDown.svg';
import wallet from '../../assets/icons/wallet.svg';
import NavItem from './NavItem';
import { useMetaData } from '../../layouts/AppLayout';
export default function SideNav(){
    const  metaData = useMetaData();
    const [sideNavData, setsideNavData] = useState(sideNavItems);
    return (
        <div className='nav-wrapper display-flex'>
            <div className='nav-group-1 display-flex'>
                <div className='nav-header-content'>
                    <div className="company-icon-image">
                        <div className="rectangle">
                            <img className="image" src={require("../../assets/images/"+metaData.profileData.profileimg+".png")} alt='profile-icon' />
                        </div>
                        <div className="frame mobiledisplay-none">
                            <div className="text-wrapper company-title">{metaData.profileData.userName}</div>
                            <div className="div visit-str">{metaData.profileData.moreContent}</div>
                        </div>
                        <img className="bold-chevron-down mobiledisplay-none" src={downArr} alt='down-icon'  />
                    </div>
                </div>
                <ul className='nav-ul'>
                {
                    sideNavData.map((nav, index) => (
                    <NavItem  navData={nav}/>
                ))}
                </ul>
            </div>
            <div className='nav-group-2'>
                <div className='nav-footer-content'>
                        <div className="nav-footer-card display-flex">
                            <div className="">
                                <div className="icon-card alignCenter display-flex">
                                    <img className="wallet" src={wallet} />
                                </div>
                            </div>
                            <div className='display-flex flex-col wallet-bal mobiledisplay-none'>
                                <div className='wallet-lbl'>{metaData.creditsData.label}</div>
                                <div className='wallet-pt'>{metaData.creditsData.val}</div>
                            </div>
                        </div>
                
                </div>
            </div>
        </div>
    )
}