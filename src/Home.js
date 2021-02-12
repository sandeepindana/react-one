import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const [blogs, setBlogs] = useState([
        { title: 'First Blog', body: 'This is first blog....', author: 'first', id: 1 },
        { title: 'Second Blog', body: 'This is second blog....', author: 'second', id: 2 },
        { title: 'Third Blog', body: 'This is third blog....', author: 'first', id: 3 },
    ]);

    const handleClick = (e) => {
        console.log('Hello, ninjas', e);
        // alert('Hello, ninjas');
        setName('Barry');
        setAge(30);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
        // alert('Hello, ninjas');
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={(e) =>
                handleClickAgain('mario', e)
            }>Click Me Again</button> */}
            <br />
            <br />

            <BlogList blogs={blogs} title="Blogs List" />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'first')} title="First Blogs List" /> */}
        </div>
    );
}

export default Home;