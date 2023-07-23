import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const AddPostPage = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const sendRequest = async (e) => {
    e.preventDefault(); // не обновляйся, страница!
    try {
      await axios({
        method: "POST",
        url: "https://dummyjson.com/posts/add",
        data: {
          body: body,
          title: title,
          id: 1000,
          userId: 35,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(title, body);
  return (
    <div>
      <form onSubmit={sendRequest}>
        <input onChange={(e) => setTitle(e.target.value)} placeholder="title" />
        <input onChange={(e) => setBody(e.target.value)} placeholder="text" />
        {/* <button onClick={sendRequest()}>send</button> */}
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default AddPostPage;
