import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetails() {
  const { characterId } = useParams();

  const [details, setDetails] = useState({});

  const baseURL = "https://ih-crud-api.herokuapp.com";

  useEffect(() => {
    axios
      .get(`${baseURL}/characters/${characterId}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1>{details.name} </h1>
      Occupation: {details.occupation} <br />
      Weapon: {details.weapon} <br />
      Debt: {details.debt ? "Yes" : "No"} <br />
    </>
  );
}

export default CharacterDetails;
