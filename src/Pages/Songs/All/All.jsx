import React, { useContext } from "react";
import Track from "../../../Components/Track/Track";
import { MyContext } from "../../../MyContext";
import { audio } from "../../../Components/Audios";
import API_URL from '../../../Data/API_URL';

import "./All.css";

const url = `${API_URL}/v1/music/song`;
const All = () => {
  const { songPlay } = useContext(MyContext);
  if (songPlay.length == 0) {
    return (
      <>
        <div className="sound_cloud-songs_all">
          <div className="sound_cloud-songs_all_list">
            {audio.slice(100, 120)?.map((item, i, self) => (
              <div key={item?._id} className="sound_cloud-songs_all_list_item">
                <Track key={item?._id} song={item} index={i} self={self} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="sound_cloud-songs_all">
        <div className="sound_cloud-songs_all_list">
          {songPlay?.map((item, i, self) => (
            <div key={item?._id} className="sound_cloud-songs_all_list_item">
              <Track key={item?._id} song={item} index={i} self={self} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
