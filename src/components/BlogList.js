import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {

    return ( 
         <div className="blogs">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-preview">
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
         </div>
     );

}
 
export default BlogList;