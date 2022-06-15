import { Link } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";

const Navbar = () => {

  const { instance, accounts } = useMsal();
  function handleLogout(){
    instance.logoutRedirect().catch(
      console.error
    );
  }


    return (
      <nav className="navbar">
        <h1>Jobbie</h1>
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Post</Link>
          <button style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }} onClick={handleLogout}>
                Logout
            </button>

        </div>
      </nav>
    );
  }
   
  export default Navbar;