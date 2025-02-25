const API_BASE_URL = "http://localhost:3000/";

export const loginAuth = (username: string, password: string) => {
  return fetchData("api/auth/login", "POST", { username, password });
};

const fetchData = async (
  endpoint: string,
  method: string = "GET",
  body?: unknown
) => {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Request failed", error);
    return null;
  }
};
