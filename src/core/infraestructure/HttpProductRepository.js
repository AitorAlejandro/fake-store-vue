import { FAKE_API_URL } from "./index";

export async function getProducts() {
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  const request = new Request(`${FAKE_API_URL}/products`);
  const response = await fetch(request, { method: "GET", headers });
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
