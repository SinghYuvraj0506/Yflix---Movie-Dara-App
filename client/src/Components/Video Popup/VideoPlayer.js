import React from "react";
import "./VideoPlayer.css";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

function VideoPlayer() {
  const videoPopupConfig = new useSelector((state) => state.videoPopupConfig); // getting video config from the redux
  const dispatch = new useDispatch();
  const { setVideoConfig } = bindActionCreators(actionCreators, dispatch);

  return (
    <div
      className="video_player_wrapper"
      onClick={() => {
        setVideoConfig({ openModal: false, videoKey: "" });
      }}
    >
      <div
        onClick={(e) => {
          e?.stopPropagation();
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoPopupConfig?.videoKey}`}
          controls={true}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
