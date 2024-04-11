import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://blog-clean-cqrs-redis.azurewebsites.net/api/blog")
      .then((res) => setBlogs(res.data))
      .catch((err) => setError(err.message));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  } else if (error.length !== 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h3>{error}</h3>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <Table blogs={blogs} />
      </div>
    );
  }
}

export default App;
