import { useEffect, useState } from "react";
import externalService from "../services/external";
import Pagination from "./Pagination";
import Question from "./Question";
import SearchBar from "./SearchBar";

const dummyData : any = [
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hff",
    like: "323",
    dislike:"404"
  },
  {
    title: "htey",
    like: "323",
    dislike:"404"
  }
]

const Main = () => {
  const [ip, setIP] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const response = await externalService.getIpAddress();
      setIP(response.data.IPv4)
    };
  
    getData();
  }, []);

  return (
    <div className="main">
      <SearchBar />
      <Pagination
        data={dummyData}
        dataLimit={6}
      />
      <Question />
    </div>
  )
}
export default Main;