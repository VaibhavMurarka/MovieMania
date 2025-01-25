import React, {useContext} from 'react'
import {BsEyeFill} from 'react-icons/bs'
import {RxCross1} from 'react-icons/rx'
import {AiFillEyeInvisible} from 'react-icons/ai'
import './moviecontrol.css'
import { GlobalContext } from '../../context/GlobalState'


export const MovieControls = ({movie, type}) => {
  const {removeMovieFromWatchlist, watchedMovie, removeMovieFromWatched, watchlistMovie} = useContext(GlobalContext)

  
  return (
    <div className="controls">
      <div className="card-control">
      
      {type === 'watchlist' && (
          <>
              <button className="ctrl-btn" onClick={()=>watchedMovie(movie)} title="Mark as Watched"><BsEyeFill/></button>
              <button className="ctrl-btn" onClick={()=>removeMovieFromWatchlist(movie.id)} title='Remove'><RxCross1/></button>

          </>
      )}
      {type === 'watched' && (
        <>
          <button className="ctrl-btn" onClick={()=>watchlistMovie(movie)} title='Move To Watchlist'><AiFillEyeInvisible/></button>
          <button className="ctrl-btn" onClick={()=>removeMovieFromWatched(movie.id) } title='Remove'><RxCross1/></button>
          {/* <button className="ctrl-btn"  title='Remove'><RxCross1/></button> */}
        </>
      )}
  </div>
    </div>
    
  )
}

export default MovieControls
