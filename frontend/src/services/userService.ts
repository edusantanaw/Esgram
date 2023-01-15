import { Api } from "../utils/api";import { getUserAndToken, makeOptions } from "../utils/helpers";
interface User {
  name?: string;
  password: string;
  email: string;
  confirmPassword?: string;
  type: string;
}
export async function auth(data: User) {
  const response = await Api.post(data.type, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  if (response.user && response.accessToken) {
    localStorage.setItem("App:user", JSON.stringify(response.user));
    localStorage.setItem("@App:token", response.accessToken);
  }
  console.log(response)
  return response;
}

export async function logout() {
  localStorage.removeItem("App:user");
  localStorage.removeItem("@App:token");
  return;
}

export async function update(data: FormData) {
  const { user } = getUserAndToken();
  const response = await Api.patch(
    `/users/update/${user.id}`,
    data,
    makeOptions()
  )
    .then((response) => response.data)
    .catch((error) => error.response.data);
  if (response.userUpdated)
    localStorage.setItem("App:user", JSON.stringify(response.userUpdated));

  return response;
}

export async function addFollow(id: string) {
  const response = await Api.post(`/users/add/${id}`, id, makeOptions())
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return response;
}
