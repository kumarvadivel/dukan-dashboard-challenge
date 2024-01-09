import React  from "react";
import search from '../../assets/icons/Search.svg';
import triangle from '../../assets/icons/Triangle-Icon.svg';
import info from '../../assets/icons/Info.svg';
import sort from '../../assets/icons/Sort.svg';
import download from '../../assets/icons/download.svg';
import leftarr from '../../assets/icons/Chevron Right.svg';
export default function Table(props) {
    return (
      <div className="table-wrapper">
            <div className="table-operation-wrapper">
            {
                props.config.allowSearch?
                <div className="table-search display-flex">
                    <div className="search-icon-tbl">
                        <img src={search} alt="icon"/>
                    </div>
                    <input type="text" className="search-inp-tbl" placeholder="Search by order ID..."></input>
                </div>
                :
                <div></div>
            }
                
                <div className="table-operation">
                {props.config.allowSort?
                    <div>
                        <button className="br-4 btn-grop-tbl">
                            <span>Sort</span>
                            <img src={sort} alt="icon"/>
                        </button>
                    </div>:
                    <div></div>
                }
                {props.config.exportTableContents?
                    <div>
                        <button className="br-4 btn-grop-tbl"><img src={download} alt="icon"/></button>
                    </div>
                    :
                    <div></div>}
                    
                    
                </div>
            </div>
            <div className="table-content-wrapper">
                <table>
                    <thead>
                        <tr>
                        {props.config.headers.map((head,index)=>( 
                            <th className="header-table">
                            
                            <span>{head.label}</span>{head.rowSorting?<img className="ml-5" src={triangle}/>:head.info?<img className="ml-5" src={info} title={head.info} alt="icon"/>:<></>}
                            </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                    {
                        props.config.data.map((row,indx)=>(
                            <tr>
                                {props.config.headers.map((col,i)=>( <td>{col.linkType?<a>{row[col.id]}</a>:row[col.id]}</td>))}
                            </tr>
                        ))
                    }
                    
                    </tbody>
                </table>
            </div>
            {
                props.config.allowPagination?
                <div className="table-pagination-wrapper display-flex">
                <div className="display-flex button-group">
                    <div>
                        <button className="display-flex alignCenter movebtn">
                            <img className="prevbt" src={leftarr} alt="icon"/>
                            <span>Previous</span>
                        </button>
                    </div>
                    <div className="display-flex paginate-group">
                        <button className="">1</button>
                        <button className="">...</button>
                        <button className="active">10</button>
                        <button className="">11</button>
                        <button className="">12</button>
                        <button className="">13</button>
                        <button className="">14</button>
                        <button className="">15</button>
                        <button className="">16</button>
                        <button className="">17</button>
                        <button className="">18</button>
                    </div>
                    <div>
                            <button className="display-flex alignCenter movebtn">
                                <span>Next</span>
                                <img src={leftarr} alt="icon"/>
                            </button>
                    </div>
                </div>
            </div>:<></>
            }
            
          
      </div>
    );
}