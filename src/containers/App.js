import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StreamElement from "../components/StreamElement";
import useElementSize from "../custom-hooks/useElementSize";
import { setActiveStream } from '../redux/modules/main';


function App() {
  const streamsArray = useSelector(state => state.main.streams);
  const dispatch = useDispatch();
  const streamMatrix = [];
  let rowIndex = 0;
  streamsArray && streamsArray.forEach((stream, index) => {
    if ((index !== 0 && (index + 1) % 5 === 0)) {
      streamMatrix[rowIndex] = [ ...streamsArray.slice(index - 4, index + 1) ];
      rowIndex += 1;
    }
  });

  const { width, height } = useElementSize(5, 4);

  useEffect(() => {
    return () => dispatch(setActiveStream(null))
  }, []);

  return (
    <div className="main-container">
      {streamMatrix.map((row, index) =>
        <div className="row" key={`rowkey-${index}`}>
          {row.map(stream => <StreamElement key={`videokey-${stream.id}`}
                                            stream={stream}
                                            width={width}
                                            height={height}
          />)}
        </div>
      )}
    </div>
  );
}

export default App;
