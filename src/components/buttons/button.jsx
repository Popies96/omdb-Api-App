

const button = ({children , onClick }) => {
  return (
    <button className="rounded-xl text-xl border-black px-3 border text-center   " onClick={onClick}
    >{children}</button>
  )
}

export default button