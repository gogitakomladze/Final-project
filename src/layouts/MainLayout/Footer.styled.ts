import styled from "styled-components";
 export const TFooter = styled.div`
 background-color: rgb(239, 245, 239);;
 color: black;

 display: flex;
 justify-content: center;
 align-items: center;
 
 padding: 60px 0;

 div{
   margin-left: 60px;

 } 
 nav{
   display: flex;
   p{
      margin-top: 15px;
   }
 }

 h1{
   font-size: 18px;
 }

ul{
   margin-top: 15px;
}
 li{
  margin-top: 10px;

   font-size: 13px;
   text-align: start;
   list-style: none;
 }

 `
 export const TtowFooter = styled.div`
    background-color: black;
    color: white;
 
   padding: 60px 0px;


    h1{
      font-size: 18px;
    }
    ul{
   margin-top: 15px;
}
 li{
  margin-top: 10px;

   font-size: 13px;
   text-align: start;
   list-style: none;
 }

  
    div{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      overflow-x: hidden;
             
     
      
      
    }
 `

