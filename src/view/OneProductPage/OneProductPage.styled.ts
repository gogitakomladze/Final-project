import styled from "styled-components";

export const TOneProduct = styled.section `
 width: 1280px;
  margin: auto;
  padding: 80px 0;

  div {
    #LikeButton{
        border: 1px solid black;
        border-radius: 30px;
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.3s;
        background-color: white;
        margin-right: 20px;
    }
    #LikeButton:hover{
        color: red;
        background-color: black;
        border: 1px solid red;
    }
    img{
        width: 400px;
        height: 400px;
    }
    h1{
        font-size: 15px;
        width: 500px;
    }
    p{
        font-size: 15px;
        width: 300px;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 15px;
        margin-left: 20px;
        border-bottom: 1px solid black;
        transition: 0.1s;
    }
    a:hover{
        border-bottom: 5px solid #b4d984;
    }
   
  }
  

`
export const TshopCard = styled.div`
width: 350px;

border-radius: 10px;
box-shadow: rgba(203, 203, 203, 0.25) 0px 0px 16px;
background: rgb(255, 255, 255);
p{
    margin-top: 20px;
    margin-left: 20px;
    
    b{
        font-size: 30px;
    }
}

#addCap{
    background-color: #b4d984;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    width: 90%;
    height: 55px;
    margin-left: 20px;
    margin-top: 20%;
    b{
        margin-left: 20px;
    }
    cursor: pointer;
    transition: 0.4s;
}
#addCap:hover{
    box-shadow: black 5px 5px 16px;

}
#buy{
    background-color: black;
    color: white;
    width: 90%;
    height: 55px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    margin-left: 20px;

    cursor: pointer;

    transition: 0.4s;


    margin-top: 5%;
}
#buy:hover{
box-shadow: #b4d984 0px 30px 30px;
}
`