import React, { useState } from "react";
import Table from "../shared/components/Table";
import { tableData } from "../data/tableDataUtils";
import { useMetaData } from "../layouts/AppLayout";
import Card from "../shared/components/Card";
export default function PaymentDashboard() {
  const  metaData = useMetaData();
  const [tableConfig,setTableConfig] = useState(tableData)
    return (
      <div className="paymentDashboard-wrapper">
           <div className="pd-1 display-flex">
              <span>{metaData.dashboard.title}</span>
              {
                metaData.dashboard.Relevancy?
                <div className="dropdown">
                  <select>
                  {metaData.dashboard.Relevancy.map((r,i)=>(<option>{r}</option>))}
                  </select>
              </div>:<></>
              }

          </div> 
          <div className="pd-2 display-flex">
              {
                metaData.stats.map((stat,i)=>(<Card config={stat}></Card>))
              }
              
          </div> 
          <div className="pd-3">
              <span>{metaData.dashboard.tabletitle}</span>
          </div> 
          <div>
              <Table config={tableConfig}></Table>
          </div>  

      </div>
    );
}