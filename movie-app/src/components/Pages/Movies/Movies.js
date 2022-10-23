import axios from "axios";
import React, { useState } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../CustomPagination/CustomPagination";
import "./Movies.css";
import Genres from "../../Genres";
import useGenre from "../../../hooks/useGenre";

const Movies =() => {
 const [page, setPage] = useState(1);
 const [content, setContent] = useState([]);
 const [numOfPages, setNumOfPages] = useState();
 const [loading, setLoading] =  useState(false);
 const [selectedGenres, setSelectedGenres] = useState([]);
 const [genres, setGenres] = useState([]);
 const genreforURL = useGenre(selectedGenres);

    const fetchMovies =  async() => {
       const {data} =  await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f3d8e4feb56f8aa83c7956ede155fe74&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
            );
         console.log("data movies", data) 
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }
React.useEffect(()=>{
    fetchMovies()
},[page, genreforURL])


    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
            type="movie"
            selectedGenres={selectedGenres} 
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
            />
            <div className="movies">
                {content.map((c)=> 
                <SingleContent 
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type="movie"
                    vote_average={c.vote_average}
                    vote_count={c.vote_count}
                />)}
            </div>
              {numOfPages>1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
              )}      
          
        </div>    
    )
}
export default Movies;