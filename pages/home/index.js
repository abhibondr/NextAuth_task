import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(60);

  const Logout = () => {
    sessionStorage.clear();
    router.push("/sign-in");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft === 0) {
          return 0;
        } else return timeLeft - 1;
      });
      if (timeLeft === 0) {
        Logout();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div
      className="homeWrapper"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="navbar">
        <div className="logout">
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
      <div className="timer">
        <p style={{ color: "black" }}>
          You will be logged out in {timeLeft} seconds
        </p>
      </div>
    </div>
  );
};

export default Home;
