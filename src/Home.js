import { useState, useEffect } from "react";
import PostList from "./PostList";

const Home = () => {

    const [posts, setPosts] = useState([
        { title: 'My new post', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'My second post', body: 'lorem ipsum...', author: 'Dimitar', id: 2},
        { title: 'My third post', body: 'lorem ipsum...', author: 'Dimitar', id: 3}

    ])

    // let name = 'dimitar';

    const [name, setName] = useState('dimitar');
    const [age, setAge] = useState('21')
    const [isPending, setIsPending] = useState(true);

    const handleClick = (e) => {
        setName('Dimitar');
        setAge('22')
    }

    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id); 
        setPosts(newPosts);
    }

    
    //renders just once, because of the [] in the end. if I include name for example its gonna wait for name to change and then render again.
    useEffect(() => {
        console.log('use effect ran');
        fetch('API')
            .then(res => {
                res.json()
                    return res.json();
            })
            .then(data => {
                setPosts(data);
                setIsPending(false);
            })
    }, []);



    return ( 
        <div className="home">
            <h2>
                Homepage
            </h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {isPending && 
            <PostList posts={posts} title="All posts" handleDelete={handleDelete}/>
            }
            <button onClick={() => setName('dimm')}>Change Name</button>
            <p>{name}</p>
            <PostList posts={posts.filter((post) => post.author === 'Dimitar')} title="Dimitar's posts" handleDelete={handleDelete}/>

        </div>
     );
}
 
export default Home;