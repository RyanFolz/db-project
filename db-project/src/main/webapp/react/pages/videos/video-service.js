const VIDEOS_URL = "http://localhost:8080/api/videos"
const REACTIONS_URL = "http://localhost:8080/api/reactions"

export const findAllVideos = () =>
    fetch(VIDEOS_URL)
        .then(response => response.json())

export const findVideoById = (id) =>
    fetch(`${VIDEOS_URL}/${id}`)
        .then(response => response.json())

export const deleteVideo = (id) =>
    fetch(`${VIDEOS_URL}/${id}`, {
        method: "DELETE"
    })

export const findReactionsByVideo = (videoId) =>
    fetch(`${REACTIONS_URL}/by_video/${videoId}`)
        .then(response => response.json())

export const createVideo = (video) =>
    fetch(VIDEOS_URL, {
        method: 'POST',
        body: JSON.stringify(video),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateVideo = (id, video) =>
    fetch(`${VIDEOS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(video),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllVideos,
    findVideoById,
    findReactionsByVideo,
    deleteVideo,
    createVideo,
    updateVideo
}
