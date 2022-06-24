import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function Category() {
  return (
    <Navi>
      <Tags>
        <SLink to={"/cuisine/American"}>American</SLink>
        <SLink to={"/cuisine/Korean"}>Korean</SLink>
        <SLink to={"/cuisine/Thai"}>Thai</SLink>
        <SLink to={"/cuisine/Italian"}>Italian</SLink>
      </Tags>
      <Search />
    </Navi>
  );
}

const Navi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tags = styled.div`
  display: flex;

  button {
    color: white;
    padding: 5px 10px;
    background: black;
  }
`;

const SLink = styled(NavLink)`
  margin-right: 20px;
  color: white;
  background: #00b4d8;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

  &.active {
    background: #03045e;
  }
`;

export default Category;
