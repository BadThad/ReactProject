import lotrPic from "../assets/lotr_fotr.jpg";
import interstellarPic from "../assets/interstellar.jpg";
import dunePic from "../assets/dune_p2.jpg";
import mononokePic from "../assets/princessmononoke.jpg";
import darkknightPic from "../assets/thedarkknight.jpg";
import lawrencePic from "../assets/lawrenceofarabia.jpg";

import "../movies.css";

export function Lotr() {
    return (
        <div className = "movie-container">
            <img src={lotrPic} alt="The Fellowship of the Ring" />
            <h2 className = "movie-title">The Lord of the Rings Trilogy</h2>
            <p className = "movie-text">
                The movie experience of what is likely the most celebrated 
                book series of all time. How the team behind the making of 
                the film managed to pull it off is a feat in and of itself 
                and is a testament to their dedication to bring this story 
                to life. I mean, I rewatch the trilogy pretty much every year!
            </p>
        </div>
    )
}

export function Interstellar() {
    return (
        <div className = "movie-container">
            <img src={interstellarPic} alt="Interstellar" />
            <h2 className="movie-title">Interstellar</h2>
            <p className="movie-text">
                In my opinion, one of the greatest sci-fi movies of all
                time. Did you know that to model the black hole accurately
                the movie makers collaborated with a CGI team and that this 
                work eventually resulted in the publishing of 3 scientific
                papers?
            </p>
        </div>
    )
}

export function Dune2() {
    return (
        <div className = "movie-container">
            <img src={dunePic} alt="Dune: Part 2" />
            <h2 className="movie-title">Dune: Part 1 and 2</h2>
            <p className="movie-text">
                Based on what is perhaps the most celebrated sci-fi novel 
                of all time, these movies bring the universe of Frank Herberts 
                Dune to life in way that is guaranteed to blow you away. Between
                the cinematography, the musical score, and the creators relentless
                attention to detail these movies are set to be classics.
            </p>
        </div>
    )
}

export function PrincessMononoke() {
    return (
        <div className = "movie-container">
            <img src={mononokePic} alt="Princess Mononoke" />
            <h2 className="movie-title">Princess Mononoke</h2>
            <p className="movie-text">
                Princess Mononoke &#40;or its Japanese name Mononoke Hime&#41; is set
                in Japan sometime between the 14th and 16th centuries and includes 
                many fantasy elements. The movies emphasis on nature and the spirituality
                of nature in adversity to industrialization is a hallmark of the director
                Hayao Miyazaki. The world as depicted in the movie, with all its beauty
                and brutality is a stunning work of art.          
            </p>
        </div>
    )
}

export function DarkKnight() {
    return (
        <div className = "movie-container">
            <img src={darkknightPic} alt="The Dark Knight" />
            <h2 className="movie-title">The Dark Knight</h2>
            <p className="movie-text">
                As the second movie in the Dark Knight Trilogy it was released the same
                year as Marvels Iron Man which led to a renaissance in the superhero movie 
                genre which would last nearly a decade. Unlike many previous installments of
                Batmans adventures, The Dark Knight takes place in a more contemporary setting 
                and offers the characters, both the good guys and the bad guys greater complexity.   
            </p>
        </div>
    )
}

export function LawrenceOfArabia() {
    return (
        <div className = "movie-container">
            <img src={lawrencePic} alt="Lawrence of Arabia" />
            <h2 className="movie-title">Lawrence of Arabia</h2>
            <p className="movie-text">
                This epic story based on the real events of the life of T.E. Lawrence and his participation 
                in the Arab Revolt against the Ottoman Empire during World War 1 is of course a well known
                classic. The jaw-dropping cinematography of the tremendous landscapes exhibited in this movie 
                combined with the fantastic musical score succeed in shaping the desolate and unforgiving 
                landscape of the desert as one of the main characters of the film.
            </p>
        </div>
    )
}