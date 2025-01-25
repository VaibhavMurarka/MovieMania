export default (state, action) => {
    switch (action.type)
    {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload,...state.watchlist],
                watched: state.watched.filter((a)=>a.id !== action.payload.id)
            }
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched],
                watchlist: state.watchlist.filter((a)=>a.id !== action.payload.id)
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter((a)=> a.id !== action.payload)
            }
        case "WATCHED_MOVIE":
            return{
                ...state,
                watchlist: state.watchlist.filter((a)=> a.id !== action.payload.id),
                watched: [action.payload,...state.watched]
                
            }
        case "REMOVE_MOVIE_FROM_WATCHED":
            return{
                ...state,
                watched: state.watched.filter((a)=> a.id !== action.payload)
            }
        case "WATCHLIST_MOVIE":
            return{
                ...state,
                watched: state.watched.filter((a)=> a.id !== action.payload.id),
                watchlist: [action.payload,...state.watchlist]
            }
        default:
            return state
    }
}
