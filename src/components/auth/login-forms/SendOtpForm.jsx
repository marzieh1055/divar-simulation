import { useEffect } from "react";
import Loader from "../../loader/Loader";
import useRequest from "../../../hooks/useRequest";
import { toast } from "react-toastify";
import ErrorAlert from "../../alerts/ErrorAlert";

function SendOtpForm({ mobile, setMobile, setShowCheckOtp }) {
  const {
    response: sendOtpResponse,
    error: sendOtpError,
    loading: sendOtpLoading,
    fetchRequest,
  } = useRequest("/auth/login", "post");

  useEffect(() => {
    if (sendOtpResponse) {
      sendOtpResponse?.otp
        ? toast(`کد تایید : ${sendOtpResponse?.otp?.otp_code}`)
        : toast("کد تایید برای شما پیامک شد");
      setShowCheckOtp(true);
    }
  }, [sendOtpResponse]);

  const onSubmit = (data) => {
    data.preventDefault();
    if (mobile && mobile?.length === 11) {
      fetchRequest({ mobile });
    }
  };

  return (
    <form onSubmit={onSubmit} className=" flex flex-col p-5">
      {sendOtpLoading && <Loader />}
      {sendOtpError && <ErrorAlert message={sendOtpError?.message} />}
      <label htmlFor="phoneNumber" className=" text-neutral-500">
        شماره تلفن خود را وارد کنید
      </label>
      <input
        type="text"
        id="phoneNumber"
        name="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className=" border rounded-md my-2 p-2 outline-red-800"
        placeholder="شماره تلفن"
      />
      <button
        type="submit"
        disabled={!(mobile.length > 0)}
        className={
          mobile.length > 0
            ? " bg-red-800 rounded-md text-white p-2 font-bold"
            : " bg-neutral-400 rounded-md text-white p-2 font-bold"
        }
      >
        دریافت کد تایید
      </button>
    </form>
  );
}

export default SendOtpForm;
