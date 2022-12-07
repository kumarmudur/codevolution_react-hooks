import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromBtnClick, setIdFromBtnClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(response => {
                console.log('response', response);
                setPost(response.data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }, [idFromBtnClick]);

    const handleClick = () => setIdFromBtnClick(id);

    return (
        <div>
            <input type="text" value={id} onChange={event => setId(event.target.value)} />
            <button onClick={handleClick}>Fetch</button>
            <p>{ post.title }</p>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    );
};

export default DataFetching;