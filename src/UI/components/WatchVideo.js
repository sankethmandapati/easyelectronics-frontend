import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from '../../utils/config';
import '../../styles/video.scss';

export default ({
    videoInfo,
    id,
    toggleVideoDescription,
    showDescription
}) => (
    <div className="video">
        <section className="row">
            <video className="col-lg-8 col-md-8 col-sm-12" id="videoPlayer" controls poster={`${baseUrl}/${videoInfo.thumbnail}`}>
                <source src={ `${ baseUrl }/api/v1/video/streamVideo/${ id }` } type="video/mp4" />
            </video>
        </section>
        <section className="row">
            <h2 className="col-lg-8 col-md-8 col-sm-12">
                {
                    videoInfo.title
                }
            </h2>
        </section>
        <section className="row">
            <div onClick={ toggleVideoDescription } className="video__subtitle col-lg-8 col-md-8 col-sm-12">
                <span>
                    {
                        moment(videoInfo.uploadedOn).fromNow()
                    } | {
                        videoInfo.category ? videoInfo.category.name : ''
                    } | {
                        videoInfo.uploadedBy ? videoInfo.uploadedBy.name : ''
                    }
                </span>
                <FontAwesomeIcon
                    icon={ showDescription ? faCaretUp : faCaretDown } 
                    size="1x" />
            </div>
        </section>
        {
            showDescription ? (
                <section className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 video__description">
                        <hr />
                        {
                            videoInfo.description
                        }
                        <hr />
                    </div>
                </section>
            ) : null
        }
    </div>
);