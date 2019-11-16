import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Upload from '../components/Upload';
import { getAll } from '../../utils/redux/actions/categories';
import api from '../../utils/api';

const mapStateToProps = (state) => {
    console.log("state: ", state);
    return {
        categories: state.categories.categories
    };
}

class UploadContainer extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.state = {
            redirectToVideos: false
        };
    }

    componentDidMount() {
        if(this.props.categories) {
            this.props.getAll();
        }
    }

    async onSubmit(e, description) {
        try {
            e.preventDefault();
            const {
                video,
                thumbnail,
                title,
                category
            } = e.target;
            const videoUploadRespose = await this.uploadFiles('uploadVideo', 'video', video.files[0]);
            const thumbnailUploadRespose = await this.uploadFiles('uploadThumbnail', 'thumbnail', thumbnail.files[0]);
            const reqPayload = {
                video: videoUploadRespose.fileName,
                thumbnail: thumbnailUploadRespose.fileName,
                title: title.value,
                description,
                category: category.value
            };
            await api.call('createVideo', {reqBody: reqPayload});
            this.setState({redirectToVideos: true});
        } catch(err) {
            console.log("Error in creating video...: ", err);
        }
    }

    async uploadFiles(endPoint, key, file) {
        try {
            const formData = new FormData();
            formData.append(key, file);
            const upoadResponse = await api.call(endPoint, {reqBody: formData}, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return upoadResponse.response;
        } catch(err) {
            console.log("Error in uploading file...: ", err);
        }
    }

    render() {
        const {categories} = this.props;
        return (
            <>
                <Upload 
                    categories={ categories }
                    onSubmit={ this.onSubmit }
                />
                {
                    this.state.redirectToVideos 
                    ? <Redirect to='/categories' />
                    : null
                }
            </>
        );
    }
}

export default connect(mapStateToProps, { getAll })(UploadContainer);
