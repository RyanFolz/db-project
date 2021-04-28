import reactionService from "./reaction-service"
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ReactionList = () => {
    const history = useHistory()
    const [reactions, setReactions] = useState([])
    useEffect(() => {
        findAllReactions()
    }, [])
    const findAllReactions = () =>
        reactionService.findAllReactions()
            .then(reactions => setReactions(reactions))

    return(
            <div>
                <h2>Reactions</h2>
                <button onClick={() => history.push("/reactions/new")}>
                    Add Reaction
                </button>
                <ul>
                {
                   reactions.map(reaction =>
                      <li key={reaction.id}>
                      <Link to={`/reactions/${reaction.id}`}>
                          {reaction.reply},
                          {reaction.userId},
                          {reaction.reactionId}
                      </Link>
                      </li>)
                }
                </ul>
            </div>
        )

}

export default ReactionList;