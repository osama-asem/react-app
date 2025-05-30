import { Link } from "react-router-dom";

export default function NextPage() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className=" text-2xl"> this is the next page </h1>
        <Link to={"/react-app"}> home page</Link>
      </div>
    </>
  );
}
