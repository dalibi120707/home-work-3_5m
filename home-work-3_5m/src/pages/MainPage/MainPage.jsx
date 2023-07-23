import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const MainPage = () => {
  const [data, setData] = useState([]);
  const requestSend = async () => {
    try {
      const info = await axios({
        method: "GET",
        url: "https://dummyjson.com/posts",
      });
      // console.log(info.data.posts);
      setData(info.data.posts);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    requestSend();
  }, []);
  console.log(data);
  const navigate = useNavigate();


        const handleDeletePost = async (postId) => {
            try{
                await axios.delete(`https://dummyjson.com/posts/${postId}`)
            } catch (error){
                console.error(error);
            }
        }
      

  return (
    <div>
      <button onClick={() => navigate("/AddPost")}>добавить посты</button>
      <div>
        {data.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={()=>handleDeletePost(post.id)}>удалить</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
