import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";

import Pages from "./pages/Pages";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <SLink to={"/"}>
            <h1>Kitchen Gallery</h1>
          </SLink>
        </Nav>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 40px;
    font-family: "Lobster", cursive;
    color: #03045e;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

export default App;
