export default async function getUserPosts(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  if(!response.ok) {
    throw Error('failed to fetch user posts');
  }

  return await response.json();
}