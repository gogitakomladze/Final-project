import styled from "styled-components";

export const Cartpage = styled.section`
 width: 1280px;
  margin: auto;
  padding: 80px 0;

display: flex;
justify-content: space-between;
`

export const Tcartproduct = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto;
gap: 50px;

img{
    width: 200px;
    height: 200px;
}
p{
    font-size: 14px;
    display: flex;
    align-items: center;
    width: 300px;
    margin-left: 20px;
}
h2{
    font-size: 18px;
    display: flex;
    align-items: center;
}

button{
    height: 20px;
    border: none;
    background-color: white;
    cursor: pointer;
    transition: 0.5s;
}
button:hover{
    color: red;

}
`

export const Tbuy = styled.div`
border-radius: 10px;
box-shadow: rgba(203, 203, 203, 0.25) 0px 0px 16px;
background: rgb(255, 255, 255);
width: 300px;
height: 300px;
text-align: center;
padding-left: 20px;
padding-right: 20px;


h1{
    font-size: 20px;

}
#Product{
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;

}
#totalprice{
    display: flex;
    justify-content: space-between;
    
}
div{
    margin-top: 12%;
    button{
    background-color: #b4d984;
    color: black;
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
button:hover{
box-shadow: #b4d984 0px 5px 50px;
}
}
`
