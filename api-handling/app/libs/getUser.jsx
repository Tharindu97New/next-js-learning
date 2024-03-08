export default async function getUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if(!response.ok) {
    throw Error('failed to fetch user');
  }

  return await response.json();
}