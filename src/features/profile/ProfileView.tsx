import { useAppSelector } from "../../shared/redux/hooks";

const ProfileView = () => {
    const user = useAppSelector((state) => state.auth.user);
    console.log(user);

    if (!user) {
        return <p>No user loaded</p>
    }
    return (
        <div className="dark:bg-black bg-white">
            <h1 className="dark:text-red-400">Hola</h1>
        </div>
    )
};

export default ProfileView;