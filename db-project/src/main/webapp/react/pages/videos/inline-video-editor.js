const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineVideoEditor = ({video, deleteVideo, updateVideo}) => {
    const [videoCopy, setVideoCopy] = useState(video)
    const [editing, setEditing] = useState(false)
    return(
        <div>

        </div>
    )
}

export default InlineVideoEditor;
