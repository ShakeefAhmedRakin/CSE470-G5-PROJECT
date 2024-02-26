import Support from "../Support/Support";
import Banner from "./Banner";
import Search from "./Search";

const Home = () => {
  return (
    <div className="container mx-auto">

      <div className="my-28">
        <Search></Search>
      </div>
      <div className="mb-28">
        <Banner></Banner>
      </div>

      {/* FAQ */}
      <div className="my-28">
        <Support />
      </div>
    </div>
  );
};

export default Home;
