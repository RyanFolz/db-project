const REACTIONS_URL = "http://localhost:8080/api/reactions"

export const findAllReactions = () =>
    fetch(REACTIONS_URL)
        .then(response => response.json())

export const findReactionById = (id) =>
    fetch(`${REACTIONS_URL}/${id}`)
        .then(response => response.json())

export const deleteReaction = (id) =>
    fetch(`${REACTIONS_URL}/${id}`, {
        method: "DELETE"
    })

export const createReaction = (reaction) =>
    fetch(REACTIONS_URL, {
        method: 'POST',
        body: JSON.stringify(reaction),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateReaction = (id, reaction) =>
    fetch(`${REACTIONS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(reaction),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
    findAllReactions,
    findReactionById,
    deleteReaction,
    createReaction,
    updateReaction
}
