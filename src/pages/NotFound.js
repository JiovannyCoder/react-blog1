import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404 Error</h1>
            <h3>Page not found</h3>
            <p>Oooops, something goes wrong...</p>
            <Link to="/">Go to home</Link>
        </div>
     );
}
 
export default NotFound;