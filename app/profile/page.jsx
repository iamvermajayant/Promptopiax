'use client'

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@components/Profile'

const MyProfile = () => {

  const {data: session } = useSession();

  const [posts, setposts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
     
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setposts(data);

      console.log(posts);
    }

    if(session?.user.id) 
      fetchPosts();
  },[])


  const handleEdit = () => {

  }

  const handleDelete  = () => {

  }

  return (
    <Profile
      name = "My"
      desc = "This is my profile page"
      data = {posts}
      handleEdit = {handleEdit}
      handleDelete = {handleDelete}
    />
  )
}

export default MyProfile;