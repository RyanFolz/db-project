import videoService from "./video-service"
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const VideoList = () => {
    const history = useHistory()
    const [videos, setVideos] = useState([])
    useEffect(() => {
        findAllVideos()
    }, [])
    const findAllVideos = () =>
        videoService.findAllVideos()
            .then(videos => setVideos(videos))

    return(
            <div>
                <h2>Videos</h2>
                <button onClick={() => history.push("/videos/new")}>
                    Add Video
                </button>
                <ul>
                {
                   videos.map(video =>
                      <li key={video.id}>
                      <Link to={`/videos/${video.id}`}>
                          {video.title}
                      </Link>
                      </li>)
                }
                </ul>
            </div>
        )

}

export default VideoList;