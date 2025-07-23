// import Hero from "./components/Hero";
// import hero from "../../public/assets/hero.jpg";
// import { getPosts } from "../sanity/lib/getPosts";
// import PostsWithClientWrapper from "./components/PostWithClientWrapper";
// export default async function Home() {
//   const posts = await getPosts();
//   return (
//     <div className="container mx-auto mt-[50px] md:mt-[96px]">

//       <PostsWithClientWrapper posts={posts} />
//     </div>
//   );
// }


'use client'
import React, { useEffect, useState } from 'react'
import PostsWithClientWrapper from "./components/PostWithClientWrapper";
import { getPosts } from '../sanity/lib/getPosts';


const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getPosts();
      setPosts(data);
      setLoading(false); 
    };

    fetchData();
  }, []);



  return (
    <div className="container mx-auto mt-[50px] md:mt-[96px]">
        <PostsWithClientWrapper posts={posts} loading={loading} />

    </div>
  );
};

export default PostsList;
