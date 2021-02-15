import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, isError } = useFetch("http://localhost:8000/blogs");

    // const [name, setName] = useState('mario');

    // [
    //     { title: 'First Blog', body: 'This is first blog....', author: 'first', id: 1 },
    //     { title: 'Second Blog', body: 'This is second blog....', author: 'second', id: 2 },
    //     { title: 'Third Blog', body: 'This is third blog....', author: 'first', id: 3 },
    // ]

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // const handleClick = (e) => {
    //     console.log('Hello, ninjas', e);
    //     // alert('Hello, ninjas');
    //     setName('Barry');
    //     setAge(30);
    // }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
        // alert('Hello, ninjas');
    }




    return (
        <div className="home">
            {/* <h2>HomePage</h2>
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e) =>
                handleClickAgain('mario', e)
            }>Click Me Again</button> */}
            {/* <br />
            <br /> */}
            {isError && <div>{isError}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="Blogs List" />}
            {/* handleDelete={handleDelete} */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'first')} title="First Blogs List" /> */}
        </div>
    );
}

export default Home;