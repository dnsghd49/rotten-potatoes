import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData } from "../../features/movieSlice";

function Searchbar() {
  let { search } = useSelector((state) => state.movie);
  //set state for the search
  const [searchTerm, setSearch] = useState("");
  const dispatch = useDispatch();

  //handle the submit if nothing is searched
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") return alert("Please enter a movie or show.");
    search = dispatch(fetchSearchData(searchTerm));
    console.log(search);
    setSearch("");
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search movies, TV, actors, more..."
        className="me-2"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default Searchbar;
