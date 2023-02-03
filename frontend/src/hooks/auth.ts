import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlices";

export function userAuth() {
  const [isLogged, setIsLogged] = useState(false);

  const user = useSelector(selectUser).userReducer.logged

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user]);
  return { isLogged };
}
