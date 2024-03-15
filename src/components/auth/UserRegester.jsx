import React, { useEffect, useState } from "react";
import LoginModal from "../modal/LoginModal";
import LoginPage from "../../pages/auth/login";
import SignupPage from "../../pages/auth/signup";
import useRequest from "../../hooks/useRequest";

function UserRegester() {
  const { response, loading, error, fetchRequest } = useRequest(
    "/auth/who-am-i",
    "get"
  );

  const [isOpen, setIsOpen] = useState(false);
  const [registerType, setRegisterType] = useState("login"); // enum("login", "signup")

  useEffect(() => {
    fetchRequest();
  }, [isOpen]);

  return (
    <>
      {response ? (
        <p>
          {"کاربر "}
          {response?.name}
        </p>
      ) : (
        <button onClick={() => setIsOpen((prev) => !prev)}>ورود</button>
      )}

      <LoginModal isOpen={isOpen} user={response}>
        {registerType === "login" ? (
          <LoginPage setIsOpen={setIsOpen} setRegisterType={setRegisterType} />
        ) : (
          <SignupPage setIsOpen={setIsOpen} setRegisterType={setRegisterType} />
        )}
      </LoginModal>
    </>
  );
}

export default UserRegester;
