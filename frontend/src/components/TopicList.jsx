import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {

  const sampleDataForTopicList = props.topics;
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic,index) => (
        
        <TopicListItem
          key= {index}  
          sampleDataForTopicList = {topic}  
          
        />
      ))}
    </div>
  );
};

export default TopicList;
