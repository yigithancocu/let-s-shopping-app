import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error.message);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <Link to="/">&larr; Go back</Link>
    </div>
  );
}

export default Error;
