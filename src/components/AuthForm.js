import { useState } from "react";
import { useNavigate } from "react-router";
import "firebase/auth";
import App from "../Firebase";

/* eslint-disable react/style-prop-object */
const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authUser = (e) => {
    e.preventDefault();
    if (props.action === "signUp") {
      App.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    } else {
      App.auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    }
  };

  return (
    <form onSubmit={(e) => authUser(e)}>
      <div>
        <div className="text-sm font-bold text-gray-700 tracking-wide">
          Email Address
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="mike@gmail.com"
          value={email}
        />
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Password
          </div>
          <div></div>
        </div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="Enter your password"
          value={password}
        />
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                  shadow-lg"
        >
          {props.action === "signUp" ? "Sign up" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
