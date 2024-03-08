import getUser from "@/app/libs/getUser";
import getUserPosts from "@/app/libs/getUserPosta";
import { Suspense } from "react";

export default async function UserPage({params: {id}}) {

  //  initiate both request in parallel 
  const userData = await getUser(id);
  const userPosts = await getUserPosts(id);

  // wait for both request to complete
  const [user, posts] = await Promise.all([userData, userPosts]);

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">User Information</h1>
      <p className="text-3xl mt-10">{user.name}</p>
      <Suspense fallback={<p>Loading......</p>}>
        {posts.map(post => {
          return (
            <p key={post.id} className="text-3xl mt-10">{post.title}</p>
          )
        })}
      </Suspense>
    </div>
  )
}
