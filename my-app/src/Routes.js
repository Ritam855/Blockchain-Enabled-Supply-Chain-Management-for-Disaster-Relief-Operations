import { BrowserRouter, Routes as Switch , Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/register"
import Login from "./pages/login"
import Admin from "./pages/Admin"
import Adminfunction from "./pages/Admin-function";
import Adminconfirm from "./pages/Admin-confirm";
import AddRH from "./pages/Admin/AddRH"
import IssueIdentity from "./pages/Admin/IssueIdentity"
import Addosdma from "./pages/Admin/Addosdma"
import Adddistributor from "./pages/Admin/Adddistributor"
import Addcivilian from "./pages/Admin/Addcivilian"
import Addrelief from "./pages/Admin/Addrelief"
import History from "./pages/Admin/History"
import Osdmalogin from "./pages/osdma-login"
import Osdmaconfirm from "./pages/osdma-confirm"
import Osdmafunction from "./pages/osdma-function"
import OsdmaAvailableReliefItem from "./pages/Osdma/AvailableReliefItem"
import OsdmaOwnReliefItem from"./pages/Osdma/OwnReliefItem"
import OsdmaOwnRequests from "./pages/Osdma/OwnRequests"
import OsdmaTransferReliefItem from "./pages/Osdma/TransferReliefItem"
import OsdmaReliefRequest from "./pages/Osdma/MakeReliefRequest"
import ReliefCamplogin from "./pages/ReliefCamp-login"
import ReliefCampconfirm from "./pages/ReliefCamp-confirm"
import ReliefCampfunction from "./pages/ReliefCamp-function"
import ReliefCampAvailableReliefItem from "./pages/ReliefCamp/AvailableReliefItem"
import ReliefCampOwnReliefItem from"./pages/ReliefCamp/OwnReliefItem"
import ReliefCampOwnRequests from "./pages/ReliefCamp/OwnRequests"
import ReliefCampTransferReliefItem from "./pages/ReliefCamp/TransferReliefItem"
import ReliefCampReliefRequest from "./pages/ReliefCamp/MakeReliefRequest"
import Distributorlogin from "./pages/Distributor-login"
import Distributorconfirm from "./pages/Distributor-confirm"
import Distributorfunction from "./pages/Distributor-function"
import DistributorAvailableReliefItem from "./pages/Distributor/AvailableReliefItem"
import DistributorOwnReliefItem from"./pages/Distributor/OwnReliefItem"
import DistributorOwnRequests from "./pages/Distributor/OwnRequests"
import DistributorTransferReliefItem from "./pages/Distributor/TransferReliefItem"
import DistributorReliefRequest from "./pages/Distributor/MakeReliefRequest"
import Civilianlogin from "./pages/Civilian-login"
import Civilianconfirm from "./pages/Civilian-confirm"
import Civilianfunction from "./pages/Civilian-function"
import CivilianAvailableReliefItem from "./pages/Civilian/AvailableReliefItem"
import CivilianOwnReliefItem from"./pages/Civilian/OwnReliefItem"
import CivilianReliefRequest from "./pages/Civilian/MakeReliefRequest"
import Contact from "./pages/Contact.js"

const Routes = ()=>{

    return (
        <BrowserRouter>
        <Switch>
            <Route path = "/"  element= {<Home/>}/>
            <Route path = "/Contact"  element= {<Contact/>}/>
            <Route path = "/register"  element= {<Register/>}/>
            <Route path = "/login"  element= {<Login/>}/>
            <Route path = "/Admin"  element= {<Admin/>}/>
            <Route path = "/Admin-confirm"  element= {<Adminconfirm/>}/>
            <Route path = "/Admin-function"  element= {<Adminfunction/>}/>
            <Route path = "/Admin/AddRH" element ={<AddRH/>}/>
            <Route path = "/Admin/Addosdma" element ={<Addosdma/>}/>
            <Route path = "/Admin/Adddistributor" element ={<Adddistributor/>}/>
            <Route path = "/Admin/Addcivilian" element ={<Addcivilian/>}/>
            <Route path = "/Admin/Addrelief" element ={<Addrelief/>}/>
            <Route path = "/Admin/History" element ={<History/>}/>
            <Route path = "/Admin/IssueIdentity" element ={<IssueIdentity/>}/>
            <Route path = "/osdma-login"  element= {<Osdmalogin/>}/>
            <Route path = "/osdma-confirm"  element= {<Osdmaconfirm/>}/>
            <Route path = "/osdma-function"  element= {<Osdmafunction/>}/>
            <Route path = "/Osdma/AvailableReliefItem" element ={<OsdmaAvailableReliefItem/>}/>
            <Route path = "/Osdma/OwnReliefItem" element ={<OsdmaOwnReliefItem/>}/>
            <Route path = "/Osdma/OwnRequests" element ={<OsdmaOwnRequests/>}/>
            <Route path = "/Osdma/TransferReliefItem" element ={<OsdmaTransferReliefItem/>}/> 
            <Route path = "/Osdma/MakeReliefRequest" element ={<OsdmaReliefRequest/>}/>   
            <Route path = "/ReliefCamp-login"  element= {<ReliefCamplogin/>}/>
            <Route path = "/ReliefCamp-confirm"  element= {<ReliefCampconfirm/>}/>
            <Route path = "/ReliefCamp-function"  element= {<ReliefCampfunction/>}/>
            <Route path = "/ReliefCamp/AvailableReliefItem" element ={<ReliefCampAvailableReliefItem/>}/>
            <Route path = "/ReliefCamp/OwnReliefItem" element ={<ReliefCampOwnReliefItem/>}/>
            <Route path = "/ReliefCamp/OwnRequests" element ={<ReliefCampOwnRequests/>}/>
            <Route path = "/ReliefCamp/TransferReliefItem" element ={<ReliefCampTransferReliefItem/>}/> 
            <Route path = "/ReliefCamp/MakeReliefRequest" element ={<ReliefCampReliefRequest/>}/> 
            <Route path = "/Distributor-login"  element= {<Distributorlogin/>}/>
            <Route path = "/Distributor-confirm"  element= {<Distributorconfirm/>}/>
            <Route path = "/Distributor-function"  element= {<Distributorfunction/>}/>
            <Route path = "/Distributor/AvailableReliefItem" element ={<DistributorAvailableReliefItem/>}/>
            <Route path = "/Distributor/OwnReliefItem" element ={<DistributorOwnReliefItem/>}/>
            <Route path = "/Distributor/OwnRequests" element ={<DistributorOwnRequests/>}/>
            <Route path = "/Distributor/TransferReliefItem" element ={<DistributorTransferReliefItem/>}/> 
            <Route path = "/Distributor/MakeReliefRequest" element ={<DistributorReliefRequest/>}/>      
            <Route path = "/Civilian-login"  element= {<Civilianlogin/>}/>
            <Route path = "/Civilian-confirm"  element= {<Civilianconfirm/>}/>
            <Route path = "/Civilian-function"  element= {<Civilianfunction/>}/>
            <Route path = "/Civilian/AvailableReliefItem" element ={<CivilianAvailableReliefItem/>}/>
            <Route path = "/Civilian/OwnReliefItem" element ={<CivilianOwnReliefItem/>}/>
            <Route path = "/Civilian/MakeReliefRequest" element ={<CivilianReliefRequest/>}/>     
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;