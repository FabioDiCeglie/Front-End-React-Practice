import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  background: black;
  color: white;
  margin-top: 3%;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3%;
`;

export const WrapperCards = styled.div`
  background: rgb(54, 54, 54);
  border-radius: 20px;
  display: flex;
  width: 500px;
  margin: 5px;
`;

export const WrapperCardsDescription = styled.div`
  color: white;
  padding: 2%;
  h4 {
    font-size: 20px;

    &:hover {
      color: orange;
    }
  }
  p {
    font-size: 12px;
    color: grey;
  }
`;

export const WrapperCardCharacter = styled.div`
  border-radius: 20px;
  display: flex;
  width: 800px;
  padding: 2%;
`;

export const ImageCharacter = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 10%;
`;

export const WrapperCardDescriptionCharacter = styled.div`
  color: white;
  padding: 2%;
  p {
    font-size: 16px;
    color: grey;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
  span {
    color: white;
    margin-right: 3%;
  }
`;

export const Button = styled.button`
  color: white;
  background: rgb(54, 54, 54);
  margin-right: 5%;
  border-radius: 15px;
  width: 50px;
  border: 0;
`;

export const Form = styled.form`
  padding: 3%;
  label {
    color: white;
    margin-left: 6%;
  }
  select {
    background: rgb(54, 54, 54);
    color: white;
    border: 0;
    margin-left: 2%;
    font-size: 15px;
    &:hover {
      color: orange;
    }
  }
`;
