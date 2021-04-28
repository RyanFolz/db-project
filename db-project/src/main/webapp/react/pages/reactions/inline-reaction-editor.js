const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineReactionEditor = ({reaction, deleteReaction, updateReaction}) => {
    const [reactionCopy, setReactionCopy] = useState(reaction)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={reactionCopy.reply}
                            onChange={(e)=>setReactionCopy(reactionCopy => ({...reactionCopy, reply: e.target.value}))}/>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/reactions/${reactionCopy.id}`}>
                            {reactionCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/reactions/${reactionCopy.id}`}>
                            {reactionCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/reactions/${reactionCopy.id}`}>
                            {reactionCopy.reactionname}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/reactions/${reactionCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineReactionEditor;