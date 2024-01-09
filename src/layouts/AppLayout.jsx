import { metaDatautil } from "../data/metaDataUtils";
import PaymentDashboard from "../pages/PaymentsDashboard";
import Header from "../shared/components/header/header";
import SideNav from "../shared/components/sidenav";
import { useContext,createContext,useState } from "react";

const metaContext = createContext();
export default function AppLayout(){
    const [metaData, setmetaData] = useState(metaDatautil);
    return (
        <metaContext.Provider value={metaData}>
            <main className="root">
                <SideNav/>
                <section className="content-area-wrapper">
                    <Header/>
                    <div className="content-area">
                        <PaymentDashboard/>
                    </div>
                </section>
            </main>
        </metaContext.Provider>
       
        
    );
}
export const useMetaData = () => {
    return useContext(metaContext);
  };