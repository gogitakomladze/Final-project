import styled from "styled-components";


export const TNavigateCategori = styled.div`
     display: grid;
     grid-template-columns: auto auto auto auto auto auto auto auto;

    width: 1400px;
    margin: auto;
    padding: 80px 0;

    #Allbutton{
      background-color: black;
      h3{
        color: white;
      }
    }
    button {
      background-color: rgb(234, 234, 234);
      border: none;
      width: 150px;
      height: 100px;
      text-align: center;
      display: flex;
      justify-content: center;
      padding-top: 20px;
      border-radius: 10px;
      cursor: pointer;
    }
    button h3{
      color: #000000;
      font-size: 12px;
    }
    @media only screen and (max-width: 1350px) {
      display: grid;
     grid-template-columns: auto auto auto auto ;
     gap: 20px;

    width: 900px;
  margin: auto;
  padding: 80px 0;
  button {
      background-color: rgb(234, 234, 234);
      border: none;
      width: 150px;
      height: 50px;
      text-align: center;
      display: flex;
      justify-content: center;
      padding-top: 20px;
      border-radius: 10px;
      cursor: pointer;
    }
    button h3{
      color: #000000;
      font-size: 12px;
    }
  
  }
`

