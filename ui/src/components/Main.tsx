import { useEffect, useState } from "react";
import externalService from "../services/external";
import questionService from "../services/question";
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
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const userInfo = await externalService.getIpAddress();
        setIP(userInfo.IPv4);
        const questions = await questionService.getAllQuestions();
        setData(questions);
      } catch(e) {
        console.log(e);
      }
    })();
  }, []);

  console.log(ip);
  console.log(data)

  return (
    <div className="main">
      <SearchBar />
      <Pagination
        data={data}
        dataLimit={6}
      />
      <Question />
    </div>
  )
}
export default Main;