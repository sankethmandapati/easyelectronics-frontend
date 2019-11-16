import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default ({
    toolbarClassName,
    wrapperClassName,
    editorClassName,
    onChange = () => {}
}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    useEffect(() => {
        const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        onChange(html);
    }, [editorState]);
    return (
        <Editor
            editorState={ editorState }
            toolbarClassName={ toolbarClassName }
            wrapperClassName={ wrapperClassName }
            editorClassName={ editorClassName }
            onEditorStateChange={ setEditorState }
        />
    );
}