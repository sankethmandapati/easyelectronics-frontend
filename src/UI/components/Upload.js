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
            console.log("eeeeeee: ", e.target);
            const {
                video,
                thumbnail,
                title,
                description
            } = e.target;
            console.log("video: ", video);
            const videoUploadRespose = await this.uploadFiles(video.files[0]);
            console.log("thumbnail: ", thumbnail);
            const thumbnailUploadRespose = await this.uploadFiles(thumbnail.files[0]);
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
            return upoadResponse;
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