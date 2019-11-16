import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getAllVideos } from '../../utils/redux/actions/video';

const mapStateToProps = ({video}) => {
    console.log("video.videos: ", video.videos);
    return ({
    videos: video.videos
});}

export default connect(mapStateToProps, {
    getAllVideos
})(Dashboard);
