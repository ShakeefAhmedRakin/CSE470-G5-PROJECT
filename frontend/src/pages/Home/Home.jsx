import Banner from "./Banner";
import Search from "./Search";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-28">
        <Banner></Banner>
      </div>
      <div className="my-28">
        <Search></Search>
      </div>
    </div>
  );
};

export default Home;
