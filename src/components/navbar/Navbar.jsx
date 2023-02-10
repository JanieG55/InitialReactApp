import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ListIcon from '@mui/icons-material/List';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
const Navbar = () => {
  return (

    <div className='navbar'>
      <div className="wrapper">
        <div className="seachbar">
          <input type = 'text'  placeholder="search "/>
          <SearchIcon/>
        </div>
        <div className="items">
        <div className="item">
              <LanguageIcon className="icon"/>
           
          </div>
          <div className="item">
              <FullscreenExitIcon className="icon"/>
         
          </div>
          <div className="item">
              <NotificationsActiveIcon className="icon"/>
        
          </div>
          <div className="item">
              <ChatBubbleIcon className="icon"/>
         
          </div> 
          <div className="item">
              <ListIcon className="icon"/>
         
          </div>
          
           </div>

      </div>
    </div>
  )
}

export default Navbar