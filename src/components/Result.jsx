

const Result = ({result}) => {
  return (
    <div>
      <img src={result.Poster}/>
      <h3>{result.Title}</h3>
    </div>
  )
}

export default Result
