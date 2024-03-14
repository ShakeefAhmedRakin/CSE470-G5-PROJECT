import { useParams } from "react-router-dom";

const SearchResults = () => {
  const params = useParams();

  console.log(params.depart, params.destination, params.date);
  return <></>;
};

export default SearchResults;
