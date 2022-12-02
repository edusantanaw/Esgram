<<<<<<< HEAD
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { selectUser } from "../../slices/userSlices";
=======
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
import { Api } from "../../utils/api";
import Perfil from "./components/Perfil";

export const Main = () => {
<<<<<<< HEAD
  const user = useSelector(selectUser).userReducer.user
=======
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
  const token = localStorage.getItem("@App:token");
  const { id } = useParams<{ id: string }>();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [currentPerfil, setCurrentPerfil] = useState<string | null>(null);

<<<<<<< HEAD
  useLayoutEffect(() => {
    if (id) if (id !== currentPerfil) setCurrentPerfil(id);
  }, [id]);

  useLayoutEffect(() => {
=======
  useEffect(() => {
    if (id) if (id !== currentPerfil) setCurrentPerfil(id);
  }, [id]);

  useEffect(() => {
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08
    setLoading(true);
    Api.get(`/users/perfil/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setResponse(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
<<<<<<< HEAD
  }, [currentPerfil, user]);
=======
  }, [currentPerfil]);
>>>>>>> f174fc661d8f9cdaea1388c195722ebff6b7eb08

  if (loading) return <Loading />;
  return <Perfil data={response} current={loading} />;
};
