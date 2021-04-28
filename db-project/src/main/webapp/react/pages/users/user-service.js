const USERS_URL = "http://localhost:8080/api/users"
const VIDEOS_URL = "http://localhost:8080/api/videos"
const REACTIONS_URL = "http://localhost:8080/api/reactions"

export const findAllUsers = () =>
    fetch(USERS_URL)
        .then(response => response.json())

export const findUserById = (id) =>
    fetch(`${USERS_URL}/${id}`)
        .then(response => response.json())

export const findVideosByUser = (userId) =>
    fetch(`${VIDEOS_URL}/by_user/${userId}`)
        .then(response => response.json())

export const findReactionsByUser = (userId) =>
    fetch(`${REACTIONS_URL}/by_user/${userId}`)
        .then(response => response.json())

export const deleteUser = (id) =>
    fetch(`${USERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateUser = (id, user) =>
    fetch(`${USERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
    findAllUsers,
    findUserById,
    findVideosByUser,
    findReactionsByUser,
    deleteUser,
    createUser,
    updateUser
}
