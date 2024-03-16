import { Link } from "react-router-dom";

function AdvertisingCard({ id, title, price, address, image }) {
  return (
    <Link
      to={`/posts/${id}`}
      className=" flex justify-between rounded-md p-4 border border-neutral-300 max-sm:flex-col-reverse max-sm:items-center"
    >
      <div className=" h-full max-sm:text-center max-sm:p-2 max-sm:h-fit">
        <h1 className=" h-2/3 break-words max-sm:h-fit">{title}</h1>
        <div className=" text-neutral-400">
          <p>{price} تومان</p>
          <p>{address}</p>
        </div>
      </div>
      <div className=" relative rounded-md w-36 h-32 max-sm:w-full max-sm:h-52">
        <div className=" absolute top-0 right-0 z-0 flex items-center justify-center  w-full h-full bg-gray-300 rounded">
          <svg
            className="w-10 h-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        {image && (
          <img
            src={`${image}`}
            // width={140}
            // height={140}
            className=" rounded-md w-full h-full absolute top-0 right-0 z-10"
          />
        )}
      </div>
    </Link>
  );
}

export default AdvertisingCard;
