import React from "react";
import useApi from "../../hooks/useApi";
import "./video.css";

const Videos = () => {
  const { response, loading, error, refetch } = useApi(
    "GET",
    "/feeds/get-videos",
    []
  );

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>Error loading videos. Please try again.</p>;

  const videos = response?.data?.results?.data || [];
  return (
    <div>
      <div className="video-container" style={{ color: "#fff" }}>
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <video
              controls
              className="video-player"
              poster={video.thumbnail || "https://via.placeholder.com/300"}
            >
              <source src={video.video_link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="video-title">{video.title}</h3>
            <p className="video-channel">{video.channel_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
