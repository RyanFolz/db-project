import videoService from "./video-service"
import userService from "../users/user-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const VideoFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [video, setVideo] = useState({})
    const [user, setUser] = useState({})
    const [reactions, setReactions] = useState([])

    useEffect(() => {
        if (id !== "new") {
            findVideoById(id)
        }
    }, []);
    const createVideo = (video) =>
        videoService.createVideo(video)
            .then(() => history.push("/videos"))
    const findVideoById = (id) =>
        videoService.findVideoById(id)
            .then(video => {
                setVideo(video)
                findReactionsByVideo(video.id)
                findUserById(video.userId)
            })
    const findUserById = (userId) =>
        userService.findUserById(userId)
            .then(user => setUser(user))
    const findReactionsByVideo = (videoId) =>
        videoService.findReactionsByVideo(videoId)
            .then(reactions => setReactions(reactions))
    const deleteVideo = (id) =>
        videoService.deleteVideo(id)
            .then(() => history.push("/videos"))
    const updateVideo = (id, newVideo) =>
        videoService.updateVideo(id, newVideo)
            .then(() => history.push("/videos"))

    return (
        <div>
            <h2>Video Editor</h2>
            <label>ID</label>
            <input value={video.id}/>
            <br/>
            <label>Title</label>
            <input
                onChange={(e) =>
                    setVideo(video =>
                        ({...video, title: e.target.value}))}
                value={video.title}/>
            <br/>
            <label>Length</label>
            <input
                onChange={(e) =>
                    setVideo(video => ({...video, length: e.target.value}))}
                value={video.length}/>
            <br/>
            <label>User Id</label>
            <input
                onChange={(e) =>
                    setVideo(video => ({...video, userId: e.target.value}))}
                value={video.userId}/>
            <br/>
            <button onClick={() => history.push("/videos")}>Cancel</button>
            <button onClick={() => deleteVideo(video.id)}>Delete</button>
            <button onClick={() => createVideo(video)}>Create</button>
            <button onClick={() => updateVideo(video.id, video)}>Save</button>
            <br/>
            <h2>Reactions</h2>
            {
                reactions.map(reaction =>
                    <li key={reaction.id}>
                        <Link to={`/reactions/${reaction.id}`}>
                            {reaction.reply}
                        </Link>
                    </li>)
            }
            <br/>
            <h2>
                <label>Created by:&nbsp;</label>
                <Link to={`/users/${user.id}`}>
                    {user.username}
                </Link>
            </h2>
        </div>
    )
}

export default VideoFormEditor