import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding:0;
        box-sizing: border-ox
    }
    
    body {
        background-color: rgb(205, 213, 219);
    }

    //Categories
    .container {
        display: flex;
        flex-direction: row;
        align-items: top;
        
    }
    .menu-container {
        width: 20vw;
        padding: 1rem;
        list-style: none;
    }
    
    .content {
        width: 60vw;
    }
    
    .categories {
        padding: 0.5rem;
    }

    //products
    .prod {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;    
    }
    
    .prod-content {
        padding:3rem;
        
    }
    
    .image {
        background-color: aqua;
        padding: 50px;
    }
    
    //nav
    .heading {
        padding: 2rem;
        background-color: rgb(228, 97, 97);
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem; 
        input {
            width: 30%;
            margin-left: 30%;
        }
        a {
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            margin-right: 20px;
            cursor: pointer;
        }
    }
`;