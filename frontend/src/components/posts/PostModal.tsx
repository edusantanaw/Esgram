import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useApi } from "../../hooks/useApi";
import { addNewComment } from "../../slices/postSlices";
import { userAuth } from "../../slices/userSlices";
import { useAppDispatch } from "../../store/store";
import { Api } from "../../utils/api";
import Loading from "../loading/Loading";
import Comment from "./Comment";

interface post {
  user: string;
  image: string;
  content: string;
  name: string;
  id: string;
  perfilPhoto: string;
}

interface comment {
  name: string;
  perfilPhoto: string;
  content: string;
  user: string;
  id: string;
}

const token = localStorage.getItem("@App:token");
const user = JSON.parse(localStorage.getItem("App:user") || "{}");

const PostModal = ({
  id,
  handleModal,
}: {
  id: string;
  handleModal: () => void;
}) => {
  const { data, loading } = useApi(`/posts/${id}`);
  const [comments, setComments] = useState<comment[]>([]);
  const comment = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  async function handleComment() {
    if (comment.current) {
      const data = {
        comment: comment.current.value,
        id: id,
      };
      const newComment = {
        name: user.name,
        perfilPhoto: user.perfilPhoto,
        content: comment.current.value,
        user: user,
        id: user.id,
      };
      comment.current.value = ""
     await setComments((list) => [...list, newComment]);
      await dispatch(addNewComment(data));
    }
  }

  useEffect(() => {
    Api.get(`/posts/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        setComments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(loading) return <Loading />
  return (
    <Modal>
      <div onClick={handleModal} className="close"></div>
      <div className="post">
        {data &&
          data.map((post: post) => (
            <>
              {post.image && (
                <img
                  src={`http://localhost:5001/posts/${post.image}`}
                  alt="post image"
                  className="principal"
                />
              )}

              <div className="right">
                <div className="header">
                  <img
                    src={`http://localhost:5001/users/${post.perfilPhoto}`}
                    alt="user photo"
                  />
                  <span>{post.name}</span>
                </div>
                <p>{post.content}</p>
                <ul>
                  {comments &&
                    comments.map((comment, i: number) => (
                      <Comment comment={comment} key={i} />
                    ))}
                </ul>
                <div className="new_comment">
                  <input type="text" placeholder="example..." ref={comment} />
                  <button onClick={() => handleComment()}>Send</button>
                </div>
              </div>
            </>
          ))}
      </div>
    </Modal>
  );
};

export default PostModal;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  opacity: 0;
  animation: animate 0.4s 0.2s ease-in-out forwards;
  .close {
    background-color: #00000063;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 200vh;
  }
  .post {
    z-index: 5;
    display: flex;
    background-color: #000;
    border: 1px solid #a0a0a0;
    border-radius: 10px;
    padding: 2em;
    max-width: 80%;
    height: 38em;
    gap: 2em;
    img {
      object-fit: cover;
      max-width: 50%;
      border-radius: 10px;
    }
    .right {
      padding: 1em;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      position: relative;
      .header {
        gap: 0.7em;
        display: flex;
        align-items: center;
        width: 25em;
        border: 0;
        padding-bottom: 0;
        img {
          width: 2em;
          height: 2em;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .new_comment {
        position: absolute;
        bottom: 10px;
        width: 100%;
        display: flex;
        gap: 1em;
        input {
          width: 80%;
          height: 2.8em;
          border: none;
          border-radius: 5px;
          padding: 0.5em;
        }

        button {
          width: 15%;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          background-color: #fff;
        }
      }
    }
    ul {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      height: 75%;

      scroll-behavior: smooth;
      scrollbar-width: 1px;

      &::-webkit-scrollbar {
        width: 0.5em;
        background-color: #272525;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 4px;
      }
    }

    @media (max-width: 1200px) {
      max-width: 95%;
    }

    @media (max-width: 1000px) {
      height: 34em;
      gap: 1em;
      img {
        width: 40%;
      }
      .new_comment{
        width: 90% !important;
      }
    }
    @media (max-width: 800px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 70%;
      height: 96vh;
      position: relative;

      img{
        object-fit: contain;
      }
      ul{
        height: 70%;
        width: 100%;
      }
      .new_comment{
        bottom: 0em !important;
      }
    }
    @media (max-width: 600px){
      max-width: 90%;
      height: 90vh;
      gap: 0;
      .right{
        height: 100vh;
      }
    }
  }
`;
