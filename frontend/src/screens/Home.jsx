import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Welcome to the Project
      </h1>
      <p className="text-lg mb-6 max-w-2xl text-graay-800 dark:text-gray-300">
        This project is created by NISHARG SONI and it has industry-grade
        multistage Docker files. It also uses NGINX to deploy and provides a
        Docker Compose file. Additionally, the entire Kubernetes implementation
        is present with all the manifest files. The project also contains a
        Jenkins file which uses the shared library concept for writing the
        pipeline.
        <br />
        <br />
        This project aims to provide a robust and scalable solution for modern
        web applications. It leverages the power of containerization and
        orchestration to ensure seamless deployment and management of services.
        The use of Jenkins for CI/CD ensures that the development process is
        streamlined and efficient.
      </p>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-500">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition duration-300 dark:bg-green-700 dark:hover:bg-green-500">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
