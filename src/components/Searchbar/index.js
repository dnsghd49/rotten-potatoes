import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./style.css";

function Searchbar() {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search movies, TV, actors, more..."
        className="me-2"
        aria-label="Search"
      />
    </Form>
  );
}

export default Searchbar;
