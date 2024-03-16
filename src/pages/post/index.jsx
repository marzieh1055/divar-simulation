import React, { useEffect } from "react";
import PostInfo from "../../components/posts/PostInfo";
import PostInteraction from "../../components/posts/PostInteraction";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

function PostPage() {
  const { id } = useParams();

  const { response, loading, error, fetchRequest } = useRequest(
    `/posts/${id}`,
    "get"
  );

  console.log(response);

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className=" max-w-3xl mx-auto flex gap-6">
      <PostInfo {...response} />
      <PostInteraction {...response} />
    </div>
  );
}

export default PostPage;
