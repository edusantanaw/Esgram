import { useEffect, useState } from "react";
import { userSlice } from "../slices/userSlices";

export function userAuth() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (userSlice.getInitialState().logged) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [userSlice.getInitialState().logged]);
  return { isLogged };
}
