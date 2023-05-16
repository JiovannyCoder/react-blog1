import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <h1>Webji blog</h1>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="create">Create new blog</NavLink>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;