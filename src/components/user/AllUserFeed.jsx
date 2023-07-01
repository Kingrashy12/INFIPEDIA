import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledUser } from "../../styles/components/user/all.styled";
import AllItem from "./AllItem";
import { HeaderOne, Loader } from "../../libs";
import { BASE_URL } from "../../hooks/api";
import axios from "axios";
import Error from "../posts/Error";

const AllUserFeed = () => {
  const auth = useSelector((state) => state.credentails);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const getAllUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      const fetched = await response?.data;
      setUsers(fetched);
      console.log(users);
    } catch (error) {
      setError(true);
      console.log({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  }, [users]);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <StyledUser>
      <HeaderOne
        fontSemiBold
        fontSofia
        text="People you may know"
        className="text-2xl h1"
      />
      <div className={`flex flex-wrap gap-2 w-full h-auto`}>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader isLoading={isLoading} />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center w-full">
            <Error />
          </div>
        ) : (
          users
            .filter((user) => user._id !== auth?._id)
            .map((user, index) => (
              <AllItem user={user} key={index} isLoading={isLoading} />
            ))
        )}
      </div>
    </StyledUser>
  );
};

export default AllUserFeed;
