import { useState, useEffect } from "react";
import PostList from "./PostList";
import useFetch from "./useFetch";

const Home = () => {


    // let name = 'dimitar';

    const { data, isPending, error } =  useFetch('http://localhost:8000/posts');

    const [name, setName] = useState('dimitar');
    const [age, setAge] = useState('21')
   

    const handleClick = (e) => {
        setName('Dimitar');
        setAge('22')
    }

    // const handleDelete = (id) => {
    //     const newPosts = posts.filter(post => post.id !== id); 
    //     setData(newPosts);
    // }

    
    
    



    return ( 
        <div className="home">
            <h2>
                Homepage
            </h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {!isPending && 
            <PostList posts={data} title="All posts"/>
            }
            <button onClick={() => setName('dimm')}>Change Name</button>
            <p>{name}</p>
            {/* {isPending && <PostList posts={posts.filter((post) => post.author === 'Dimitar')} title="Dimitar's posts" handleDelete={handleDelete}/>
            } */}
        </div>
     );
}
 
export default Home;