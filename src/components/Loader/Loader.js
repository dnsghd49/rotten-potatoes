import React from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { setUseProxies } from "immer";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

export default function LoaderSpinner(){
  const [isLoading, setIsLoading] = useState(false);
  const handleFetch = () => {
    setIsLoading(true);
    fetch("https://regres.in/api/users?page=0")
    .then((respose) => respose.json())
    .then((respose) => {
      setUseProxies(respose.data)
    })
  }
  return(
  <div className="sweet-loading">
      <PacmanLoader loading css={override} size={50} />
  </div>
  )
}