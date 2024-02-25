import styled from "styled-components";

export const TProfile = styled.div`
display: flex;
justify-content: center;
align-items: center;
 
 margin-top: 20px;
`

export const TParametr = styled.div`
display: grid;
justify-items: center;
text-align: center;

div{
    margin-top: 20px;

    display: grid;
    grid-template-columns: auto auto;
    align-items: center;

    p{
        padding-left: 20px;

        font-size: 20px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
}

nav{
    margin-top: 20px;
    p{
        margin-top: 10px;
        background-color: rgb(235, 236, 240);
        border-radius: 10px;
        padding: 10px 10px;
    }
}
`