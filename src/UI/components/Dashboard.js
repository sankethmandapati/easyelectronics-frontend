import React, {useState, useEffect} from 'react';
import api from '../../utils/api';
import { Link } from "react-router-dom";

export default (props) => {
    const [viedos, setVideos] = useState([]);
    useEffect(() => {
        api.call('getAllVideos').then((response) => {
            if(response.success)
                setVideos(response.response);
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }, []);
    return (
        <div>
            {
                viedos.map((video) => (
                    <Link to={`/watchVideo/${video._id}`}>
                        <img src={`http://localhost:4000/${video.thumbnail}`} height="100px" width="100px" alt="thumbnail" />
                        <p>
                            {
                                video.title
                            }
                        </p>
                    </Link>
                ))
            }
        </div>
    );
}