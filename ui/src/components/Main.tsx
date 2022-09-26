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
    title: "hey",
    like: "323",
    dislike:"404"
  },
  {
    title: "hey",
    like: "323",
    dislike:"404"
  }
]

const Main = () => {
  return (
    <div className="main">
      <SearchBar />
      <Pagination
        data={dummyData}
        dataLimit={5}
      />
      <Question />
    </div>
  )
}
export default Main;