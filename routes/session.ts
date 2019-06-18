import { signIn, signOut } from '../controllers/session';

const SessionRoute = [
    {
        path: "/session",
        method: "post",
        action: signIn
    },
    {
        path: "/session",
        method: "delete",
        action: signOut
    }
];

export default SessionRoute;
