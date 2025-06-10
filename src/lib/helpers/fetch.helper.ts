import { Cookies } from "react-cookie";

import { jwtCookiekey } from "../defaultConstants";

const API_URL = import.meta.env.VITE_API_URL || "http:localhost:5000/api";

const cookies = new Cookies();

export function get(endpoint: string) {
  const token = cookies.get(jwtCookiekey);
  return fetch(API_URL + endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function post(
  endpoint: string,
  body: Record<string, unknown> | undefined
) {
  const token = cookies.get(jwtCookiekey);

  return fetch(API_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

export function delet(endpoint: string) {
  const token = cookies.get(jwtCookiekey);

  return fetch(API_URL + endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
