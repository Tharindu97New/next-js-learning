import Link from "next/link";


export default function Home() {
  return (
    <div className="text-center mt-20">
      <div className="text-5xl font-bold">
          <h1>Home</h1>
          <Link href="/users">Go to Users</Link>
      </div>
    </div>
  );
}
