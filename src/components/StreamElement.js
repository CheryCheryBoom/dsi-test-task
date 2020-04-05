import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveStream } from "../redux/modules/main";
import video from "../res.mp4";
import videoH264 from "../res1.mp4";

export default (props) => {
  const { stream, height, width } = props;
  const activeStreamId = useSelector(state => state.main.activeStreamId);
  const dispatch = useDispatch();
  //Variable for storing status of current video tag playing/paused
  const [isPlayButtonShown, setPlayButtonShown] = useState(true);

  const videoNode = useRef(null);

  //Put on pause video if no video stream selected or selected some other stream
  useEffect(() => {
    if (activeStreamId && activeStreamId !== stream.id) {
      videoNode.current.pause();
    }
  }, [activeStreamId]);

  //Change playing status of component and set current playing stream
  const handleClickButton = () => {
    dispatch(setActiveStream(stream.id));
    isPlayButtonShown ? videoNode.current.play() : videoNode.current.pause();
    setPlayButtonShown(!isPlayButtonShown);
  };

  return (
    <div className="element">
      <h4 className="element-header">Stream id: {stream.id}</h4>
      <div className="wrapper">
        <video ref={videoNode} height={height} width={width} playsInline muted autoPlay>
          <source src={video} type="video/mp4"/>
          <source src={videoH264} type="video/mp4"/>
        </video>
        <div className="content">
          <div onClick={() => handleClickButton()}
               className={`play ${!isPlayButtonShown && activeStreamId === stream.id ? 'paused' : 'active'}`} />
        </div>
      </div>
    </div>
  )
}