import React from 'react';
import { useParams } from "react-router-dom";

export default function WatchVideo(props) {
    const { id } = useParams();
    return (
        <div>
            Watch Video: {id}
            <video id="videoPlayer" controls>
                <source src={`http://localhost:4000/api/v1/video/streamVideo/${id}`} type="video/mp4" />
            </video>
        </div>
    );
}