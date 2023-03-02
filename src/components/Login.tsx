import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../hooks/redux";
import { IUsersInfo } from "../models/interfaces";
import { useActions } from "../hooks/actions";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button/";
import Alert from "@mui/material/Alert";

const LoginScreen = () => {
  const { register, handleSubmit } = useForm<IUsersInfo>();
  const { database } = useAppSelector((state) => state.data);
  const { setIsLoginedTrue } = useActions();
  const navigate = useNavigate();
  const [isCorrectCreds, setIsCorrectCreds] = useState<boolean>(true);

  const onSubmit: SubmitHandler<IUsersInfo> = (data) => {
    let existingUser = database.find(
      (user) => user.login === data.login && user.password === data.password
    );
    if (existingUser) {
      setIsCorrectCreds(true);
      setIsLoginedTrue();
      navigate("/profile");
    } else {
      setIsCorrectCreds(false);
    }
  };

  return (
    <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
      {!isCorrectCreds && (
        <Alert severity="error">
          Ім'я користувача або пароль введено неправильно!
        </Alert>
      )}

      <div className="p-2">
        <label htmlFor="login">Login</label>
        <input
          type="login"
          className="border px-2 w-full mt-1"
          {...register("login")}
          required
        />
      </div>
      <div className="p-2 w-full">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="border px-2 w-full mt-1"
          {...register("password")}
          required
        />
      </div>

      <div className="mt-4 ml-2">
        <Button variant="contained" type="submit">
          <span className="text-2xl font-bold text-gray-400">Login</span>
        </Button>
      </div>
    </form>
  );
};
export default LoginScreen;
