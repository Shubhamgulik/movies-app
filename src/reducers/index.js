export const initialState = {
  movies: [],
  favourites: [],
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIES":
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
}
