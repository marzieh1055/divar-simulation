import React, { useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import Loader from "../loader/Loader";

function PostComments({ id }) {
  const { response, loading, error, fetchRequest } = useRequest(
    `/comments/${id}`,
    "GET"
  );

  useEffect(() => {
    if (id) {
      fetchRequest();
    }
  }, [id]);

  return (
    <div className=" my-2 relative">
      <h2 className=" font-bold p-2">نظر ها</h2>
      {loading && <Loader />}
      {response?.map((comment) => (
        <div
          key={comment.id}
          className=" bg-neutral-200 rounded-md p-4 flex gap-4 items-center my-4"
        >
          <div className="relative w-10 h-10 overflow-hidden bg-neutral-300 rounded-full">
            <svg
              className="absolute w-12 h-12 text-neutral-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className=" ">
            <p className=" pl-2 break-words">{comment.message}</p>
            <p className=" text-neutral-400 ">{comment.user_name}</p>
          </div>
        </div>
      ))}
      {response?.length === 0 && (
        <p className=" text-neutral-500 text-center">نظر هنوز ثبت نشده</p>
      )}
    </div>
  );
}

export default PostComments;
