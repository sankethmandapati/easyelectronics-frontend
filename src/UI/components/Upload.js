import React, {Component} from 'react';
import api from '../../utils/api';
import '../../styles/uploads.scss';

export default class UploadContainer extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }
    async onSubmit(e) {
        try {
            e.preventDefault();
            const {
                video,
                thumbnail,
                title,
                description
            } = e.target;
            const videoUploadRespose = await this.uploadFiles(video.files[0]);
            const thumbnailUploadRespose = await this.uploadFiles(thumbnail.files[0]);
            console.log("videoUploadRespose: ", videoUploadRespose);
            console.log("thumbnailUploadRespose: ", thumbnailUploadRespose);
            const reqPayload = {
                video: videoUploadRespose.fileName,
                thumbnail: thumbnailUploadRespose.fileName,
                title: title.value,
                description: description.value
            };
            console.log("reqPayload: ", reqPayload);
            const videoCreateResponse = await api.call('createVideo', reqPayload);
            console.log("videoCreateResponse: ", videoCreateResponse);
        } catch(err) {
            console.log("Error in creating video...: ", err);
        }
    }
    async uploadFiles(file) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const upoadResponse = await api.call('uploadFile', formData, {
                'content-type': 'multipart/form-data'
            });
            console.log("upoadResponse: ", upoadResponse);
            return upoadResponse.response;
        } catch(err) {
            console.log("Error in uploading file...: ", err);
        }
    }
    render() {
        return (
            <div className="uploads">
                <form onSubmit={this.onSubmit}>
                    <input name="title" placeholder="Title" type="text" />
                    <input name="video" type="file" placeholder="Video" accept="video/*" />
                    <input name="thumbnail" type="file" placeholder="Thumbnail" accept="image/*" />
                    <textarea name="description" placeholder="Description" />
                    <button type="submit">
                        Create Video
                    </button>
                </form>
            </div>
        );
    }
}