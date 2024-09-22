import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = ({ topics, fetchPhotosByTopic }) => {

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId); // Call the function with the selected topic's ID
  };
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic,index) => (
        
        <TopicListItem
          key= {index}  
          sampleDataForTopicList = {topic}  
          onClick={() => handleTopicClick(topic.id)} // Add onClick handle
        />
        
      ))}
    </div>
  );
};

export default TopicList;
