import React, { useState, useContext, useEffect } from "react";
import axios from "../config/axios";
import { UserContext } from "../context/user.context";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("/users/logout", {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("token");
        setUser(null);
      });
  }, []);

  return <></>;
};

export default Logout;
