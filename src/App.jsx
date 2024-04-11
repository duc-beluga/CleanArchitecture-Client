import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://blog-clean-cqrs-redis.azurewebsites.net/api/blog")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <Table blogs={blogs} />
    </div>
  );
}

export default App;
