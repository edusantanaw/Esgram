import { useEffect, useLayoutEffect, useState } from "react";
import { getUserAndToken } from "../utils/helpers";

export function userAuth() {
  const [isLogged, setIsLogged] = useState(false);
  const {user} =getUserAndToken()
  useEffect(() => {
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user]);
  return { isLogged };
}
