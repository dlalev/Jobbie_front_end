import { useState, useEffect } from "react";
import PostList from "./PostList";

const Home = () => {

    const [posts, setPosts] = useState(null)

    // let name = 'dimitar';

    const [name, setName] = useState('dimitar');
    const [age, setAge] = useState('21')
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

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
        fetch('http://localhost:8000/posts')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setPosts(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            })
    }, []);



    return ( 
        <div className="home">
            <h2>
                Homepage
            </h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {!isPending && 
            <PostList posts={posts} title="All posts" handleDelete={handleDelete}/>
            }
            <button onClick={() => setName('dimm')}>Change Name</button>
            <p>{name}</p>
            {/* {isPending && <PostList posts={posts.filter((post) => post.author === 'Dimitar')} title="Dimitar's posts" handleDelete={handleDelete}/>
            } */}
        </div>
     );
}
 
export default Home;