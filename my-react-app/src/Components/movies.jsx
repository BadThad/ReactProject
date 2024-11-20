import lotrPic from "../assets/lotr_fotr.jpg"

function Movies() {
    return (
        <>
        <img src={lotrPic} alt="The Fellowship of the Ring" />
        <h2>The Fellowship of the Ring</h2>
        <p>
          I only included the first movie when in fact the whole
          trilogy would make this list as my favorite movies of 
          all time.
        </p>
        </>
    )
}

export default Movies;