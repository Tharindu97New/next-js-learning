import Link from "next/link";

const page = () => {
  const vigis = [
    {
      id: 1,
      name: "Banana",
    },
    {
      id: 2,
      name: "Apple",
    },
    {
      id: 1,
      name: "Beans",
    },
  ];

  return (
    <>
      <h1>Vegis page</h1>
      <div>
        {vigis.map((vigi) => {
          return <>
            <div key={vigi.id}><Link href={`/products/vegis/${vigi.name}`}>{vigi.name}</Link></div>
          </>
        })}
      </div>
    </>
    
  );
}

export default page;