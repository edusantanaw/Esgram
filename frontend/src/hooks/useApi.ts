import { Api } from "../utils/api";
import { useState, useEffect } from "react";

<<<<<<< HEAD
=======
const token = localStorage.getItem("@App:token");
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08

export function useApi(url: string, dependence?: any) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
<<<<<<< HEAD
  const token = localStorage.getItem("@App:token");
=======
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08

  useEffect(() => {
    Api.get(url ? url : "/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.response.data);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
<<<<<<< HEAD
        }, 500);
=======
        }, 1000);
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
      });
  }, [dependence]);

  return { data, loading, error };
}
