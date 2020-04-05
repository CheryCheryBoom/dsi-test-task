
const SET_ACTIVE_STREAM = "SET_ACTIVE_STREAM";

const initialState = {
  activeStreamId: null,
  streams: []
};

export default function reducer() {
  //Creating array with 20 videos
  for (let i = 0; i < 20; i++) {
    initialState.streams.push({
      id: i,
      streamSrc: "../../res.mp4"
    });
  }

  return function(state = initialState, action) {
    switch (action.type) {
      case SET_ACTIVE_STREAM: {
        return {
          ...state,
          activeStreamId: action.data
        }
      }
      default: return state
    }
  }
}

export const setActiveStream = (id = null) => {
  return {
    type: SET_ACTIVE_STREAM,
    data: id
  }
};