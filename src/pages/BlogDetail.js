import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();
    
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>loading</div> }
            { error && <div>{ error }</div> }
            {  blog && (
                <div className="blog">
                    <h2>{ blog.title }</h2>
                    <p className='author'>Written by { blog.author }</p>
                    <p>{ blog.body } </p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetail;