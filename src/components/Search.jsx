import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          placeholder="Search a recipe"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  background: #90e0ef;
  height: 30px;
  width: 30%;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 3px 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

  input {
    background: none;
    width: 70%;
    border: none;
    outline: none;
    font-size: 20px;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
  }
`;

export default Search;
