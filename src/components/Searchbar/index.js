import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie, setData } from "../../features/movieSlice";

function Searchbar() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search movies, TV, actors, more..."
        className="me-2"
        aria-label="Search"
        value={movie.setData}
        onSubmit={(e) => {
          dispatch(searchMovie(e.target.value));
        }}
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default Searchbar;
