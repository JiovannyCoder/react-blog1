import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('Deviljo');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const blog = { title, body, author };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);


        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added !');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create-blog">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                    rows="5"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Yu Zhong">Yu Zhong</option>
                    <option value="Deviljo">Deviljo</option>
                    <option value="Alucard">Alucard</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding the blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;