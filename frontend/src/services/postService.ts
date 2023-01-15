import { Api } from "../utils/api";
import { makeOptions, getUserAndToken } from "../utils/helpers";

export async function post(data: FormData) {
  const {user} = getUserAndToken()
  const response = await Api.post(`/posts/${user.id}`, data, makeOptions())
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
}

export async function remove(id: string) {
  const response = await Api.post(`/${id}`, makeOptions())
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
}

export async function addLike(id: string) {
  const response = await Api.post(`/posts/like/${id}`, id, makeOptions())
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return response;
}

export async function newComment(data: { id: string; comment: string }) {
  const response = Api.post(`/posts/comments/${data.id}`, data, makeOptions())
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
}
