import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileCard, SideNavII } from "../../components";
import { StyledProfile } from "../../styles/pages/profile";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/users/${username}`);
      const fetched = await response?.data;
      setUser(fetched);
    } catch (error) {
      console.log({ error: error.message });
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <StyledProfile>
      <SideNavII />
      <ProfileCard isLoading={isLoading} user={user} error={error} />
    </StyledProfile>
  );
};

export default Profile;
