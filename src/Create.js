import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('barry');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        // console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit} action="">
                <label>Title</label>
                <input type="text" name="" id="" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label>Body</label>
                <textarea name="" id="" required onChange={(e) => setBody(e.target.value)}></textarea>
                <br />
                <label>Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="barry">Barry</option>
                    <option value="maari">Maari</option>
                </select>
                <br />
                {!isPending && <input type="submit" value="Add" />}
                {isPending && <input type="submit" value="Adding....." />}
            </form>

            <br />

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>

        </div>
    );
}

export default Create;