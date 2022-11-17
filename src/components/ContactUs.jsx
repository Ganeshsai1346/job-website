/** @format */

import { useEffect, useState } from "react";

const ContactUs = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch("http://localhost:3000/profiles");
      if (response.ok) {
        const profiles = await response.json();

        console.log(profiles);
        setList(profiles);
        console.log("this is a new array", list);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <></>;
};

export default ContactUs;
