//Importing external library/package
import styled from "styled-components";
import { Link } from "react-router-dom";

//Importing component
import { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // const check = localStorage.getItem("popular");
    // if (check) {
    //   setPopular(JSON.parse(check));
    // } else {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    //   localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes);
    // }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Recipes</h3>
        <Container>
          {popular.map((recipe) => {
            return (
              <CardLink to={"/recipe/" + recipe.id} key={recipe.id}>
                <Card>
                  <Image>
                    <img src={recipe.image} alt="" />
                  </Image>
                  <CardTitle>
                    <p>{recipe.title}</p>
                  </CardTitle>
                </Card>
              </CardLink>
            );
          })}
        </Container>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3 {
    font-weight: bolder;
  }
`;

const Container = styled.div`
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

export default Popular;
