import { userGetAllAction, userGetByIdAction, userSaveAction } from '../controllers/user';

const UserRoute = [
    {
        path: "/users",
        method: "get",
        action: userGetAllAction
    },
    {
        path: "/users/:id",
        method: "get",
        action: userGetByIdAction
    },
    {
        path: "/users",
        method: "post",
        action: userSaveAction
    }
];

export default UserRoute;
