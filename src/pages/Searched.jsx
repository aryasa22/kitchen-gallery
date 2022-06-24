import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();

  const getSerached = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSerached(params.search);
  }, [params.search]);

  return (
    <Container>
      {searchedRecipes.map((item) => {
        return (
          <CardLink to={"/recipe/" + item.id} key={item.id}>
            <Card key={item.id}>
              <Image>
                <img src={item.image} alt="" />
              </Image>
              <CardTitle>
                <p>{item.title}</p>
              </CardTitle>
            </Card>
          </CardLink>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Card = styled.div`
  width: 301px;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #caf0f8;
  margin-bottom: 50px;
  border-radius: 14px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

const Image = styled.div`
  padding: 15px;
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
`;

const CardTitle = styled.div`
  font-weight: bold;
  padding: 0 15px;
`;

export default Searched;
