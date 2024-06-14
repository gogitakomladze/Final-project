import styled from "styled-components";

export const TCategoristyled = styled.div`
width: 1280px;
  margin: auto;
  padding: 80px 0;
  
display: grid;
grid-template-columns: auto auto auto auto ;
gap: 30px;
row-gap: 50px;

#pricefilter{
    h5{
        margin-bottom: 15px;
    }
    input{
        width: 50px;
        border: none;
        background-color: black;
        color: white;
        border-radius: 10px;
        padding: 10px;
        font-size: 15px;
        transition: 0.5s;
     
    }
    input:hover{
          width: 80px;
          background-color: white;
          color: black;
          color: black;
          
    }
}

.category-price {
  b{
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
  }
  p{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

img {
    width: 300px ;
    height: 300px;
    display: flex;

}
h1{
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
}
p{
    font-size: 20px;
    text-align: center;
    
}
div{
    cursor: pointer;
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