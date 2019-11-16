import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import WatchVideo from '../components/WatchVideo';
import { getVideoDetails, toggleVideoDescription } from '../../utils/redux/actions/video';

const StreamVideo = ({
    video,
    getVideoDetails,
    showDescription,
    toggleVideoDescription
}) => {
    const { id } = useParams();
    useEffect(() => {
        getVideoDetails(id);
    }, []);
    return (
        <WatchVideo
            id={ id } 
            videoInfo={ video }
            toggleVideoDescription={ toggleVideoDescription }
            showDescription={ showDescription }
        />
    );
};

const mapStateToProps = ({video}) => ({
    video: video.videoDetails,
    showDescription: video.showDescription
});

export default connect(mapStateToProps, {
    getVideoDetails,
    toggleVideoDescription
})(StreamVideo);
