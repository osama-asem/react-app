import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className=" text-2xl"> the page is not found</h1>

        <Link to={"/react-app"}>
          <button> home </button>
        </Link>
      </div>
    </>
  );
}
