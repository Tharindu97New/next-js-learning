'use client'

function Button() {
  const onClickHandle = () => {
    alert("hello");
  }
  return (
    <button onClick={onClickHandle}>Click here</button>
  )
}

export default Button;