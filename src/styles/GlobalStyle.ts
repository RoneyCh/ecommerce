import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    
    body {
        background: linear-gradient(to right, #FFF0F5, #FFE4E1);
    }

    //Home
    .home-container {      
        margin:0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('https://s3-us-east-2.amazonaws.com/socialtec-freihumberto-site/2021/07/14361397_1786652594938153_3489769506830947993_o.jpg');
        
    }
    .homeH1 {
        font-size: 4rem;
        margin-top: 6rem;
        margin-left: 3rem;
        text-shadow: 1px 1px white;
        color: white;
        
    }
    span {
        font-size: 4rem;
        color: #E46161;
        display: inline; 
        &:hover {
            transition: all 1s ease;
            color: red;
        }
    }
    .home-left {
        height: 100vh;
    }
    .grid {
        background: rgba(0,0,0, 50%);
        display: grid;
        grid-template-columns: 1.5fr 1fr

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
        padding: 1rem;
        background: linear-gradient(to bottom, red, #E46161);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem; 
        z-index: 999;
        top: 0;
        width: 100vw;
        img {
            width: 50px;
        }
        input {
            width: 30%;
            margin-left: 30%;
        }
        a {
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            margin-right: 20px;
            cursor: pointer;
            text-decoration: none;
            color: white;
            transition: all 0.3s ease;
            &:hover {          
                color: lightgray;        
                transition: all 0.5s ease;      
                border-bottom: 0.2rem solid orange;

            }
        }
    }
`;