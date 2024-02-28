import Link from "next/link";

const page = ({params}) => {
  return (
    <>
    <h1>Vegis page: {params.vigsId} </h1>
    <div>
      <Link href="/products/vegis">Back to Vegis Page</Link>
    </div>
    </>
    
  );
}

export default page;