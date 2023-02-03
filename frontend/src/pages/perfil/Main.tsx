import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { selectUser } from "../../slices/userSlices";
import { Api } from "../../utils/api";
import Perfil from "./components/Perfil";

export const Main = () => {
  const user = useSelector(selectUser).userReducer.user
  const token = localStorage.getItem("@App:token");
  const { id } = useParams<{ id: string }>();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [currentPerfil, setCurrentPerfil] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (id) if (id !== currentPerfil) setCurrentPerfil(id);
  }, [id]);

  useLayoutEffect(() => {
    setLoading(true);
    Api.get(`/users/perfil/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response)
        setResponse(response.data);

      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPerfil, user]);

  if (loading) return <Loading />;
  return <Perfil data={response} current={loading} />;
};
