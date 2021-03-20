import { useState } from "react";
import UserCount from "../components/UsersCount"
import Button from '../components/Button';

const UsersCount = () => {
    // state
    const [count, setCount] = useState(0);

    // methodes
    const changeCount = () => {
        setCount(count + 10);
    }

    return (
    <>
        <UserCount count={count} />
        <Button changeCount={changeCount} title="FaceBook" className="btn btn-primary" />
    </>
    )
}

export default UsersCount
