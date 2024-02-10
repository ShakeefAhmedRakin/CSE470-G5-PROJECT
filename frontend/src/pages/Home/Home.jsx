import Banner from "./Banner";
import Search from "./Search";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <Banner></Banner>
      </div>
      <div className="my-10">
        <Search></Search>
      </div>
    </div>
  );
};

export default Home;
