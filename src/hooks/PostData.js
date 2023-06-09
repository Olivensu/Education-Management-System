import React, { useEffect, useState } from 'react';

const PostData = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res=>res.json())
        .then(data=> setPosts(data))
    },[])
    return ([posts, setPosts]);
};

export default PostData;