import userService from "./user-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [videos, setVideos] = useState([])
    const [reactions, setReactions] = useState([])
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.goBack())
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => {
                setUser(user)
                findVideosByUser(user.id)
                findReactionsByUser(user.id)
            })
    const findVideosByUser = (userId) =>
        userService.findVideosByUser(userId)
            .then(videos => setVideos(videos))
    const findReactionsByUser = (userId) =>
        userService.findReactionsByUser(userId)
            .then(reactions => setReactions(reactions))
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.push("/users"))
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.push("/users"))

    return (
        <div>
            <h2>User Editor</h2>
            <label>ID</label>
            <input value={user.id}/>
            <br/>
            <label>First Name</label>
            <input
               onChange={(e) =>
                 setUser(user =>
                   ({...user, firstName: e.target.value}))}
               value={user.firstName}/>
            <br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user => ({...user, lastName: e.target.value}))}
                value={user.lastName}/>
            <br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user => ({...user, username: e.target.value}))}
                value={user.username}/>
            <br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                            setUser(user =>({...user, password: e.target.value}))}
                value={user.password}/>
            <br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setUser(user =>({...user, email: e.target.value}))}
                value={user.email}/>
            <br/>
            <label>Date of Birth</label>
            <input
                onChange={(e) =>
                    setUser(user =>({...user, dateOfBirth: e.target.value}))}
                value={user.dateOfBirth}/>
            <br/>
            <button onClick={() => {history.push("/users")}}>Cancel</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => createUser(user)}>Create</button>
            <button onClick={() => updateUser(user.id, user)}>Save</button>
            <br/>
            <h2>Videos</h2>
            {
                videos.map(video =>
                    <li key={video.id}>
                        <Link to={`/videos/${video.id}`}>
                            {video.title}
                        </Link>
                    </li>)
            }
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
        </div>
    )
}

export default UserFormEditor