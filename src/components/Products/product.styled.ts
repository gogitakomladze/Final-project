import styled from "styled-components";

export const TProduct = styled.section`
 width: 1280px;
  margin: auto;
  padding: 80px 0;
  
display: grid;
grid-template-columns: auto auto auto auto;
gap: 30px;
row-gap: 50px;

img {
    width: 300px ;
    height: 300px;
}
h1{
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
}

div{
    cursor: pointer;
}

#price{
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}

@media only screen and (max-width: 1200px) {
    width: 900px;
  margin: auto;
  padding: 80px 0;
  
  img {
    width: 200px;
    height: 200px;
  }
  h1{
    font-size: 10px;
  }
  p{
    font-size: 15px;
}
  }

`