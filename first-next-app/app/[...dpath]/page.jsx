const page = ({params}) => {
  return (
    <>
      <h1>Cath All routes</h1>
      <ul>
        {params.dpath.map((item) => {
          return (
            <li>{item}</li>
          )
        })}
      </ul>
    </>
    
  );
}

export default page;