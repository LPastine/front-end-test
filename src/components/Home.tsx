import { useLoginContext } from '../hooks/useLoginContext';

export const Home = () => {
  const { loggedIn } = useLoginContext();

  return (
    <div className="pageLayout">
      <div>
        <h3>Home Page</h3>
      </div>
      {loggedIn && (
        <div>
          <h3>User is Logged in</h3>
        </div>
      )}
      <div></div>
    </div>
  );
};
