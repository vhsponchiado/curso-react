import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 50%;
    background-color: #222024;
    padding: 20px;
    border-radius: 10px;
    margin:30px;
    display: flex;
    flex-direction : column;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    a.remover {
        color: #5a2f80;
        margin-top:10px;
        text-decoration: none;
    }

   
        
`