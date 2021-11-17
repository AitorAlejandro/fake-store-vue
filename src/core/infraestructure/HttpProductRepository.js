import { FAKE_API_URL } from "./infraestructure.constants";

function getHeaders() {
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  return headers;
}

export async function getProducts() {
  const headers = getHeaders();
  const request = new Request(`${FAKE_API_URL}/products`);
  const response = await fetch(request, { method: "GET", headers });
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
