import React, {Component} from 'react';
import '../../styles/uploads.scss';

export default ({
    onSubmit,
    categories = []
}) => (
    <div className="uploads">
        <form onSubmit={onSubmit}>
            <input name="title" placeholder="Title" type="text" />
            <input name="video" type="file" placeholder="Video" accept="video/*" />
            <input name="thumbnail" type="file" placeholder="Thumbnail" accept="image/*" />
            <textarea name="description" placeholder="Description" />
            <select name="category">
                <option value="">Select a category</option>
                {
                    categories.map(c => (
                        <option key={c._id} value={c._id}>
                            {
                                c.name
                            }
                        </option>                        
                    ))
                }
            </select>
            <button type="submit">
                Create Video
            </button>
        </form>
    </div>
);