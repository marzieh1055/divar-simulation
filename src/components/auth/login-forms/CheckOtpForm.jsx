// import useRequest from "@/hooks/useRequest";
import { useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import Loader from "../../loader/Loader";
import { setCookie } from "../../../utils/cookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../alerts/ErrorAlert";
function CheckOtpForm({ mobile, code, setCode, setMobile, setIsOpen }) {
  const navigate = useNavigate();
  const {
    response: sendOtpResponse,
    error: sendOtpError,
    loading: sendOtpLoading,
    fetchRequest,
  } = useRequest("/auth/check-otp", "post");

  useEffect(() => {
    if (sendOtpResponse) {
      setCookie("accessToken", sendOtpResponse?.token);
      toast.success("با موفقیت وارد شدید");
      setIsOpen(false);
      navigate("/new");
    }
  }, [sendOtpResponse]);

  const onSubmit = (data) => {
    data.preventDefault();
    if (mobile && mobile?.length === 11) {
      fetchRequest({ mobile, code });
    }
  };

  return (
    <form onSubmit={onSubmit} className=" flex flex-col p-5">
      {sendOtpLoading && <Loader />}
      {sendOtpError && <ErrorAlert message={sendOtpError?.message} />}
      <label htmlFor="code" className=" text-neutral-500">
        کد ارسالی را وارد کنید
      </label>
      <input
        type="text"
        id="phoneNumber"
        name="mobile"
        value={mobile}
        disabled
        onChange={(e) => setMobile(e.target.value)}
        className=" border rounded-md my-2 p-2 outline-red-800 text-neutral-500"
        placeholder="شماره تلفن"
      />
      <input
        type="text"
        id="code"
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className=" border rounded-md my-2 p-2 outline-red-800"
        placeholder="کد تایید"
      />
      <button
        type="submit"
        className=" bg-red-800 rounded-md text-white p-2 font-bold"
      >
        ورود
      </button>
    </form>
  );
}

export default CheckOtpForm;
