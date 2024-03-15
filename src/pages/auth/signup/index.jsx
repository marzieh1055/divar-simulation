import React, { useState } from "react";
import CheckOtpForm from "../../../components/auth/login-forms/CheckOtpForm";
import SendOtpForm from "../../../components/auth/login-forms/SendOtpForm";
import { IoMdClose } from "react-icons/io";
import SignUpForm from "../../../components/auth/login-forms/SignUpForm";

function SignupPage({ setIsOpen, setRegisterType }) {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [showCheckOtp, setShowCheckOtp] = useState(false);

  return (
    <div className=" bg-white w-1/3 flex flex-col relative items-center rounded-md p-4">
      <div className=" flex justify-between w-full p-4">
        <h1 className=" font-bold text-xl">ایجاد حساب جدید</h1>
        <IoMdClose
          className=" text-xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <p className=" mt-2">مشخصات فردی خود را وارد نمایید</p>
      {showCheckOtp ? (
        <CheckOtpForm
          mobile={mobile}
          code={otpCode}
          setCode={setOtpCode}
          setMobile={setMobile}
          setIsOpen={setIsOpen}
        />
      ) : (
        <SignUpForm
          mobile={mobile}
          name={name}
          setName={setName}
          setMobile={setMobile}
          setShowCheckOtp={setShowCheckOtp}
        />
      )}
      <p
        className=" text-sm text-neutral-500 hover:text-red-700 cursor-pointer"
        onClick={() => setRegisterType("login")}
      >
        ازقبل حساب دارید؟
      </p>
    </div>
  );
}

export default SignupPage;
