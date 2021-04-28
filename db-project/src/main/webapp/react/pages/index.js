import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import VideoList from "./videos/video-list";
import VideoFormEditor from "./videos/video-form-editor";
import ReactionList from "./reactions/reaction-list";
import ReactionFormEditor from "./reactions/reaction-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path={["/videos"]} exact={true}>
                    <VideoList/>
                </Route>
                <Route path="/videos/:id" exact={true}>
                    <VideoFormEditor/>
                </Route>
                <Route path={"/reactions"} exact={true}>
                    <ReactionList/>
                </Route>
                <Route path="/reactions/:id" exact={true}>
                    <ReactionFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
