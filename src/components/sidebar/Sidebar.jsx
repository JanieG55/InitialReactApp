import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
              <span className="logo">Makie</span>
         </div>
         <hr />
        <div className="center">
            <ul>
              <p className="title">Main</p>
                <li>
            <DashboardIcon className="icon"/>
                  <span>Dashboard</span>
                </li>
                <p>USEFUL</p> 
                
                <li>
                <AccountBalanceIcon className="icon"/>
                  <span>Finances</span>
                </li>
               
                <li>
                <PersonIcon className="icon"/>
                  <span>Employees</span>
                </li>
              
                <li>
                <ApartmentIcon className="icon"/>
                  <span>Properties</span>
                </li>
                
               <li>
               <ConstructionIcon className="icon"/>
                <span>utilities</span>
               </li>
             
               <li>
               <NotificationsIcon className="icon"/>
                <span>Notification</span>
               </li>
                 
               <li>
               <SettingsIcon className="icon"/>
                <span>Settings</span>
               </li>
              
               <li>
               <LogoutIcon className="icon"/>
                <span>Log out</span>
               </li>
            </ul>
        </div>
        <div className="botom">logo</div>

    </div>
  )
}

export default Sidebar