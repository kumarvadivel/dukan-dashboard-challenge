import React from "react"
import './header.css';
import help from '../../../assets/icons/Help.svg';
import search from '../../../assets/icons/Search.svg';
import headerdropdown from '../../../assets/icons/Menu.svg';
import message from '../../../assets/icons/meassge.svg';
import { useMetaData } from "../../../layouts/AppLayout";
export default function Header(){
    const  metaData = useMetaData();
    return (
        <div className="header-wrapper">
            <div className="header-section-1 display-flex">
                <div className="header-title">{metaData.headerMetaData.headerTitle.label}</div>
                {
                    metaData.headerMetaData.headerTitle.info? 
                    <div className="header-section-1-hitw display-flex">
                    <div>
                        <img src={help}/>
                    </div>
                    <div className="header-sub-title mobiledisplay-none">{metaData.headerMetaData.headerTitle.info.label}</div>
                </div>:<></>
                }
            </div>
            {
                metaData.headerMetaData.showSearch?
                <div className="search-wrapper display-flex">
                <div className="search-ico">
                    <img src={search}/>
                </div>
                <input className="search-inp" type="text" placeholder="Search features, tutorials, etc."/>
                </div>:<></>
            }
            
            <div className="display-flex icon-menu mobiledisplay-none">
                <div>
                    <img src={message}/>
                </div>
                <div>
                    <img src={headerdropdown}/>
                </div>
            </div>
        </div>
    )
}