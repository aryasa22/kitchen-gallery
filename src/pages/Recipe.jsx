import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const fetchDetail = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetail();
  }, [params.name]);

  return (
    <Container>
      <Image>
        <img src={details.image} alt="" />
        <h4>{details.title}</h4>
      </Image>
      <Details>
        <Ingredient>
          <p>Ingredients:</p>
          <ul>
            {details.extendedIngredients?.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        </Ingredient>
        <Steps>
          <p>How to make:</p>
          <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        </Steps>
      </Details>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background: #caf0f8;
  display: flex;
  max-width: 100%;
  font-size: 16px;
  padding: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  p {
    margin-top: 0;
  }
`;

const Image = styled.div`
  flex: 2;
  margin-right: 20px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Details = styled.div`
  flex: 5;
`;

const Ingredient = styled.div`
  margin-right: 20px;
`;

const Steps = styled.div``;

export default Recipe;
