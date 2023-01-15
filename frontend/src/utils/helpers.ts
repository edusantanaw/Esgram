export function makeOptions() {
  const { token } = getUserAndToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function getUserAndToken() {
  const storage = localStorage.getItem("App:user");
  const user = storage ? JSON.parse(storage) : null;
  const token = localStorage.getItem("@App:token");
  return { user, token };
}
