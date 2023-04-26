import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { allUsersReducer, followUnfollowReducer, forgotPasswordReducer, oneUserReducer, userReducer } from "./Reducers/userReducer";
import { allPostsReducer, captionReducer, commentReducer, deleteCommentReducer, deletePostReducer, newPostReducer } from "./Reducers/postReducer";

const reducer = combineReducers({
    user:userReducer,
    forgotPassword:forgotPasswordReducer,
    users:allUsersReducer,
    oneuser:oneUserReducer,
    follow:followUnfollowReducer,
    post:newPostReducer,
    posts:allPostsReducer,
    caption:captionReducer,
    deletePost:deletePostReducer,
    comment:commentReducer,
    deleteComment:deleteCommentReducer
   
})

let initialState = {}

const middleware = [thunk]

const store = legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store