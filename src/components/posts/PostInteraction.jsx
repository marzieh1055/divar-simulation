import React, { useEffect, useState } from "react";
import PostComments from "./PostComments";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useRequest from "../../hooks/useRequest";
import Loader from "../loader/Loader";
import SuccessAlert from "../alerts/SuccessAlert";
import ErrorAlert from "../alerts/ErrorAlert";

function PostInteraction({ id, image }) {
  const userData = useAuth();
  const [commentText, setCommentText] = useState("");

  const { response, loading, error, fetchRequest } = useRequest(
    "/comments",
    "POST"
  );

  useEffect(() => {
    if (response) {
      setCommentText("");
    }
  }, [response]);

  const submitForm = (e) => {
    e.preventDefault();
    const payload = { post_id: id, message: commentText };

    if (!userData) return toast.error("ابتدا به حساب خود واردشوید");

    fetchRequest(payload);
  };

  return (
    <div className=" w-1/2">
      <img className=" rounded-md w-full h-64" src={image} alt="آگهی" />
      <form
        onSubmit={submitForm}
        method="POST"
        className=" relative w-full my-2 p-2"
      >
        {loading && <Loader />}
        {response && <SuccessAlert message={"نظر شما بزودی منتشر می شود"} />}
        {error && <ErrorAlert message={error?.message} />}
        <textarea
          className=" w-full border border-neutral-300 rounded-md my-2 p-2 outline-red-800 "
          name="message"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="نظر شما ..."
        />
        <button
          className={
            commentText.length > 0
              ? " w-full bg-red-800 rounded-md text-white p-2 font-bold"
              : " w-full bg-neutral-400 rounded-md text-white p-2 font-bold"
          }
          disabled={!(commentText.length > 0)}
        >
          ثبت نظر
        </button>
      </form>
      <hr className="" />
      <PostComments id={id} />
    </div>
  );
}

export default PostInteraction;
