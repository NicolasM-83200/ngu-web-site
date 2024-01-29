import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  const channelId = 'UCIbuERcgR2AAIj74j7twMmw';
  const url = `https://www.googleapis.com/youtube/v3/search?key=${
    import.meta.env.VITE_API_KEY
  }&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;
  console.log(url);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setVideos(result);
    };
    fetchData();
  }, []);

  return (
    <motion.section
      id='videos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className='videos-container'>
        {videos.items?.map((video) => (
          <iframe
            key={video.etag}
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </motion.section>
  );
};

export default Videos;
