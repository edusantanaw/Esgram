export function makeOptions() {
  const { token } = getUserAndToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function getUserAndToken() {
  const user = JSON.parse(localStorage.getItem("App:user") || "{}");
  const token = localStorage.getItem("@App:token");
  return { user, token };
}
