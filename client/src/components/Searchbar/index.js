import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useDispatch } from "react-redux";
import { fetchSearchMovieData } from "../../features/movieSlice";
import { fetchSearchShowData } from "../../features/chartSlice";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  //need to set the resultlist to render on submit
  const [searchTerm, setSearch] = useState("");
  const dispatch = useDispatch();

  //handle the submit if nothing is searched
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") return alert("Please enter a movie or show.");
    dispatch(fetchSearchMovieData(searchTerm));
    dispatch(fetchSearchShowData(searchTerm));
    setSearch("");
  };

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/search`;
    navigate(path);
  };

  return (
    <div>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search movies, TV, actors, more..."
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="search-btn" variant="primary" type="submit" onClick={routeChange}>
          Search
        </Button>
      </Form>
    </div>
  );
}

export default Searchbar;
