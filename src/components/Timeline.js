import React from "react";
import timelineData from "./Data";
import TimelineItem from "./TimelineItem";
import './Timeline.css'

const Timeline =() => timelineData.length > 0 &&(
    <div className="timeline-container">
        {timelineData.map((timelineData, index) => (
            <TimelineItem data={timelineData} key={index}/>
        ))}
    </div>
);

export default Timeline;