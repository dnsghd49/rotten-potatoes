import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { showData, movieData, fetchData } from "../../features/movieSlice";

function Searchbar() {
  // const data = useSelector((state) => state.movie);
  //set state for the search
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  //handle the submit so page doesn't refresh and if nothing is searched
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return alert("Please enter a movie or show.");
    dispatch(fetchData(search));
    // dispatch(showData(search));
    setSearch("");
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search movies, TV, actors, more..."
        className="me-2"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default Searchbar;
