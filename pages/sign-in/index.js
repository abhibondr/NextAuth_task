import { useFormik } from "formik";
import { RegisterSchema } from "../../validationSchema/RegisterSchema";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const signIn = async (data) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", data);
      const result = await res.data;
      sessionStorage.setItem("token", result.token);
      router.push("/home");
    } catch (error) {
      console.log("err", error);
      setErrMsg(true);
    }
  };

  const { handleChange, handleBlur, touched, errors, handleSubmit } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (data) => {
        signIn(data);
      },
    }
  );

  return (
    <div className="formWrapper">
      <div className="formContentLogin">
        <div className="formTitle">sign in</div>
        <form onSubmit={handleSubmit}>
          <div className="inputForm">
            <div> Email </div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <span className="errMessage"> {errors.email} </span>
            )}
          </div>
          <div className="inputForm">
            <div> Password </div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <span className="errMessage"> {errors.password} </span>
            )}
          </div>
          <div className="inputForm">
            <button type="submit"> Sign in</button>
          </div>
          {errMsg ? (
            <div className="errMsg">Please enter valid email address</div>
          ) : (
            ""
          )}
          <div className="register">
            Don’t have an acount?{" "}
            <span
              onClick={() => {
                router.push("/");
              }}
            >
              {" "}
              Signup for free
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
