import { Link } from "react-router-dom";
import Photo404 from '../../assets/404A.gif'
import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <div className="container min-h-screen flex flex-col items-center justify-center px-5 mx-auto">
      <Helmet>
        <title>404 Error</title>
      </Helmet>
      {/* <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl mb-8 font-semibold md:text-3xl">
            Sorry, we couldn&apos;t find this page.
          </p> */}

      <div className="">
        <img src={Photo404} alt="" className="w-96" />
      </div>

      <Link
        to="/"
        className="px-8 py-3 font-semibold rounded bg-violet-600 text-white"
      >
        Back to homepage
      </Link>
    </div>
  );
}
