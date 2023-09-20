import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So how are you doing?</p>
      <hr />
      <h2>The profile you visited is here:</h2>
      <Outlet />
    </div>
  );
};
export default Profile;
