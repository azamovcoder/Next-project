export async function getData(path) {
  const res = await fetch(
    `https://66921a3026c2a69f6e9183dc.mockapi.io/candLeaf${path}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
