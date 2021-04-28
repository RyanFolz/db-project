import reactionService from "./reaction-service"
import userService from "../users/user-service"
import videoService from "../videos/video-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const ReactionFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [reaction, setReaction] = useState({})
    const [user, setUser] = useState({})
    const [video, setVideo] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findReactionById(id)
        }
    }, []);
    const createReaction = (reaction) =>
        reactionService.createReaction(reaction)
            .then(() => history.push("/reactions"))
    const findReactionById = (id) =>
        reactionService.findReactionById(id)
            .then(reaction => {
                setReaction(reaction)
                findUserById(reaction.userId)
                findVideoById(reaction.videoId)
            })
    const findUserById = (userId) =>
        userService.findUserById(userId)
            .then(user => setUser(user))
    const findVideoById = (videoId) =>
        videoService.findVideoById(videoId)
            .then(video => setVideo(video))
    const deleteReaction = (id) =>
        reactionService.deleteReaction(id)
            .then(() => history.push("/reactions"))
    const updateReaction = (id, newReaction) =>
        reactionService.updateReaction(id, newReaction)
            .then(() => history.push("/reactions"))

    return (
        <div>
            <h2>Reaction Editor</h2>
            <label>ID</label>
            <input value={reaction.id}/>
            <br/>
            <label>Reply</label>
            <input
               onChange={(e) =>
                 setReaction(reaction =>
                   ({...reaction, reply: e.target.value}))}
               value={reaction.reply}/>
            <br/>
            <label>User Id</label>
            <input
                onChange={(e) =>
                    setReaction(reaction => ({...reaction, userId: e.target.value}))}
                value={reaction.userId}/>
            <br/>
            <label>Video Id</label>
            <input
                onChange={(e) =>
                    setReaction(reaction => ({...reaction, videoId: e.target.value}))}
                value={reaction.videoId}/>
            <br/>
            <label>Reaction Id</label>
            <input
                onChange={(e) =>
                            setReaction(reaction =>({...reaction, reactionId: e.target.value}))}
                value={reaction.reactionId}/>
            <br/>
            <button onClick={() => {history.push("/reactions")}}>Cancel</button>
            <button onClick={() => deleteReaction(reaction.id)}>Delete</button>
            <button onClick={() => createReaction(reaction)}>Create</button>
            <button onClick={() => updateReaction(reaction.id, reaction)}>Save</button>
            <h2>
                <label>Created by:&nbsp;</label>
                <Link to={`/users/${user.id}`}>
                    {user.username}
                </Link>
            </h2>
            <h2>
                <label>Video reaction to:&nbsp;</label>
                <Link to={`/videos/${video.id}`}>
                    {video.title}
                </Link>
            </h2>
        </div>
    )
}

export default ReactionFormEditor