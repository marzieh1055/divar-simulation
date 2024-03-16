import React, { useEffect, useState } from "react";
import OrderModal from "../modal/OrderModal";
import { IoMdClose } from "react-icons/io";
import useRequest from "../../hooks/useRequest";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../alerts/ErrorAlert";

function AddOrder({ id }) {
  const userData = useAuth();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [proposed_price, setProposed_price] = useState(1000);
  const [message, setMessage] = useState("");

  const { response, loading, error, fetchRequest } = useRequest(
    "/orders",
    "POST"
  );

  useEffect(() => {
    if (response) return navigate("/orders");
  }, [response]);

  const subHandler = (e) => {
    e.preventDefault();

    if (!userData) return toast.error("وارد شوید");

    if (!proposed_price || message.length === 0)
      return toast.error("فیلد ها را با دقت پر کنید");

    fetchRequest({
      post_id: id,
      proposed_price,
      message,
    });
  };

  return (
    <>
      <button
        onClick={() =>
          userData ? setShow(true) : toast.error("ابتدا وارد شوید")
        }
        className=" w-1/2 bg-red-800 rounded-md text-white p-2 font-bold"
      >
        سفارش
      </button>

      <OrderModal isOpen={show}>
        <div className=" bg-white w-1/3 flex flex-col relative items-center rounded-md p-4">
          {loading && <Loader />}
          <div className=" flex justify-between w-full p-4">
            <h1 className=" font-bold text-xl">ثبت سفارش</h1>
            <IoMdClose
              className=" text-xl cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>
          <p className=" mt-2"></p>
          <form
            onSubmit={subHandler}
            method="post"
            className=" flex flex-col w-full p-5"
          >
            {error && <ErrorAlert message={error?.message} />}
            <label htmlFor="proposed_price" className=" text-neutral-500">
              قیمت پیشنهادی
            </label>
            <input
              type="number"
              id="proposed_price"
              name="proposed_price"
              value={proposed_price}
              onChange={(e) => setProposed_price(e.target.value)}
              className=" border rounded-md my-2 p-2 outline-red-800"
              placeholder="قیمت"
            />

            <label htmlFor="proposed_price" className=" text-neutral-500">
              پیام سفارش
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" border rounded-md my-2 p-2 outline-red-800"
              placeholder="متن پیام..."
            />
            <button className=" bg-red-800 rounded-md text-white p-2 mt-2 font-bold">
              سفارش
            </button>
          </form>
        </div>
      </OrderModal>
    </>
  );
}

export default AddOrder;
