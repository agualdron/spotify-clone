export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finish dev
    // token: "BQDWFeQO5sBQrgbKEn9ddUb68Ooic7W9Vt6CXaHWxPFJKlKIeeI7Kdd4wVt1FR4AF29CSkeBb81rKTf9eaMHn8yWaUy52CH8S3C-Xdkc4hZCa9r-fY52tPG0eNGnSf5bGnPV3t9s_w6hFsLEfeYU1a4rJQ"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };

export default reducer;