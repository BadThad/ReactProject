import {Lotr, Interstellar, Dune2, PrincessMononoke, DarkKnight, LawrenceOfArabia} from "../Components/movies.jsx";

import "../Home.css"

function Home() {
  return (
    <div className = "movie-grid">
      <Lotr/>
      <Interstellar/>
      <Dune2/>
      <PrincessMononoke/>
      <DarkKnight/>
      <LawrenceOfArabia/>
    </div>
  )
}

export default Home;