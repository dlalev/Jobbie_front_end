const PostList = ({ posts, title, handleDelete}) => {
    //We can also write (props) and its going to work the same way, but giving all props 
    //
    

    return ( 

        <div className="blog-list">

        <h2>{title}</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <h2>{ post.title }</h2>
                    <p>Written by: { post.author }</p>
                    <button onClick={() => handleDelete(post.id)}>Delete post</button>
                </div>
            ))}

        </div>

     );
}
 
export default PostList;