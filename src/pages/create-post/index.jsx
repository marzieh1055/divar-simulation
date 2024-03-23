import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../components/alerts/ErrorAlert";

function CreatePostPage() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    title: "",
    category_id: 1,
    description: "",
    price: 1000,
    address: "",
    image: null,
  });
  const { response, loading, error, fetchRequest } = useRequest(
    "/categorys",
    "get"
  );

  const {
    response: createPostRes,
    loading: createPostLoading,
    error: createPostError,
    fetchRequest: createPost,
  } = useRequest("/posts", "post", { "Content-Type": "multipart/form-data" });

  useEffect(() => {
    fetchRequest();
  }, []);

  useEffect(() => {
    if (createPostRes) {
      navigate("/new");
    }
  }, [createPostRes, createPostError]);

  const onSubmit = (e) => {
    e.preventDefault();
    createPost(datas);
  };

  return (
    <div className=" relative">
      {createPostError && <ErrorAlert message={createPostError?.message} />}
      {createPostLoading && <Loader />}
      <h1 className=" text-lg font-bold">ایجاد آگهی جدید</h1>
      <form className=" p-2" onSubmit={onSubmit}>
        <div className=" flex flex-col p-2">
          <label htmlFor="title">عنوان</label>
          <input
            type="text"
            id="title"
            name="title"
            value={datas.title}
            onChange={(e) =>
              setDatas({ ...datas, [e.target.name]: e.target.value })
            }
            className=" border rounded-md my-2 p-2 outline-red-800"
          />
        </div>

        <div className=" flex flex-col p-2">
          <label htmlFor="category_id">دسته بندی</label>
          <select
            id="category_id"
            name="category_id"
            value={datas.category_id}
            onChange={(e) =>
              setDatas({ ...datas, [e.target.name]: e.target.value })
            }
            className=" bg-white border rounded-md my-2 p-2 outline-red-800"
          >
            {response?.data?.categorys?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className=" flex flex-col p-2">
          <label htmlFor="description">توضیحات</label>
          <textarea
            id="description"
            name="description"
            value={datas.description}
            onChange={(e) =>
              setDatas({ ...datas, [e.target.name]: e.target.value })
            }
            className=" border rounded-md my-2 p-2 outline-red-800"
          />
        </div>

        <div className=" flex flex-col p-2">
          <label htmlFor="price">قیمت</label>
          <input
            type="number"
            id="price"
            name="price"
            value={datas.price}
            onChange={(e) =>
              setDatas({ ...datas, [e.target.name]: e.target.value })
            }
            className=" border rounded-md my-2 p-2 outline-red-800"
          />
        </div>

        <div className=" flex flex-col p-2">
          <label htmlFor="address">آدرس</label>
          <input
            type="text"
            id="address"
            name="address"
            value={datas.address}
            onChange={(e) =>
              setDatas({ ...datas, [e.target.name]: e.target.value })
            }
            className=" border rounded-md my-2 p-2 outline-red-800"
          />
        </div>

        <div className=" flex flex-col p-2">
          <label htmlFor="image">تصویر</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) =>
              setDatas({ ...datas, [e.target.name]: e.target.files[0] })
            }
            className=" border rounded-md my-2 p-2 outline-red-800"
          />
        </div>

        <button
          type="submit"
          className=" w-full bg-red-800 rounded-md text-white p-2 font-bold"
        >
          ثبت آگهی
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
