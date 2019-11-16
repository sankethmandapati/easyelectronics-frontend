import React, { useEffect } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import '../../styles/dashboard.scss';

export default ({
    getAllVideos,
    videos = []
}) => {
    console.log("videos: ", videos);
    useEffect(() => {
        if(videos.length === 0) {
            getAllVideos();
        }
    }, []);
    return (
        <div className="dashboard">
            <section className="dashboard__videoContainer row">
            {
                videos.map((video) => (
                        <Link key={video._id} className="col-md-3 col-sm-6 dashboard__videoContainer--video"  to={`/watchVideo/${video._id}`}>
                            <img src={`http://localhost:4000/${video.thumbnail}`} height="100px" width="100px" alt="thumbnail" />
                            <h2>
                                {
                                    video.title
                                }
                            </h2>
                            {/* <p>
                                {
                                    video.uploadedBy.name
                                }
                            </p> */}
                            <p>
                                {
                                    video.category.name
                                } | {
                                    moment(video.uploadedOn).fromNow()
                                }
                            </p>
                            <div className="dashboard__videoContainer--playButton">
                                <FontAwesomeIcon icon={ faPlay } color="#FFF" size="lg" />
                            </div>
                        </Link>
                ))
            }
            </section>
        </div>
    );
}