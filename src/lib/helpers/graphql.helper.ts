import { Cookies } from "react-cookie";
import { jwtCookiekey } from "../defaultConstants";

const API_URL = import.meta.env.API_URL || "http://localhost:5000/api/graphql";

const cookies = new Cookies();

type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

export async function graphql<T = unknown>(
  query: string,
  variables?: Record<string, unknown>
): Promise<GraphQLResponse<T>> {
  const token = cookies.get(jwtCookiekey);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return response.json();
}