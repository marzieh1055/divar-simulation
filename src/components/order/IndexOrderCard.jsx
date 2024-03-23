import React, { useState } from "react";
import OrderModal from "../modal/OrderModal";

function IndexOrderCard({ id, post, proposed_price, order_state, message }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className=" flex justify-between rounded-md p-4 border border-neutral-300 max-sm:flex-col-reverse max-sm:items-center"
      >
        <div className=" h-full max-sm:text-center max-sm:p-2 max-sm:h-fit">
          <h1 className=" h-2/3 break-words max-sm:h-fit">
            {id} - {post.post_title}
          </h1>
          <div className=" text-neutral-400">
            <p
              className={
                order_state === "expectation"
                  ? "text-yellow-400"
                  : "text-neutral-400"
              }
            >
              {proposed_price} تومان
            </p>
          </div>
        </div>
        <div className=" relative rounded-md w-16 h-16 max-sm:w-full max-sm:h-16">
          <div className=" absolute top-0 right-0 z-0 flex items-center justify-center  w-full h-full bg-neutral-300 rounded">
            <svg
              className="w-10 h-10 text-neutral-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          {post.post_image && (
            <img
              src={`${post.post_image}`}
              className=" rounded-md w-full h-full absolute top-0 right-0 z-10"
            />
          )}
        </div>
      </button>

      <OrderModal isOpen={show}>
        <div class=" w-1/3 flex flex-col items-center p-6 bg-white border border-neutral-200 rounded-lg shadow ">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-neutral-900 ">
            {post.post_title}
          </h5>
          <hr className="  w-full" />
          <div className=" p-2">
            <h1>پیام</h1>
            <p class="mb-3 font-normal text-neutral-700 ">{message}</p>
          </div>
          <hr className="  w-full" />
          <div className=" p-2">
            <p class=" font-normal text-neutral-700 ">
              وضعیت :‌ {order_state}
            </p>
          </div>
          <hr className="  w-full" />
          <div className=" p-2">
            <p class=" font-normal text-neutral-700 ">
              قیمت پیشنهادی :‌ {proposed_price}
            </p>
          </div>
          <hr className="  w-full" />

          <div className=" flex w-full gap-4 mt-4">
            <button
              onClick={() => setShow(false)}
              class="text-center w-1/2 items-center px-3 py-2 text-sm font-medium text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 "
            >
              بستن
            </button>
            <button class="text-center w-1/2 items-center px-3 py-2 text-sm font-medium text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 ">
              قبول کردن
            </button>
          </div>
        </div>
      </OrderModal>
    </>
  );
}

export default IndexOrderCard;
