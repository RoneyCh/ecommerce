import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    
    body {
        background: linear-gradient(to right, #FFF0F5, #FFE4E1);
        overflow-x: hidden;
        font-size: 1.5rem;
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
        text-shadow: 1px 1px black;
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
       justify-content: center;
       padding: 1rem;
    }
    .menu-container {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 70vw;
        
    }
    .categories {
        padding: 4rem 4rem 1rem;
        cursor: pointer;
        a {
            text-decoration: none;
            color: black;
            div {
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 1.1rem;
            }
        }
        img {
            width: 10rem;
            display: flex;
            margin: 0 auto;
            }
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
        padding: 0.6rem;
        color: white;
        background: linear-gradient(to bottom, #B22222, #A52A2A);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem; 
        z-index: 999;
        top: 0;
        width: 100vw;
        img {
            width: 50px;
        }
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            h3 {
                margin-left: 1rem;
            }
        }
        input {
            width: 40%;
            height: 4vh;
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

    .nav-links {
        display: flex;
        justify-content: center;
        align-items: center;

        .cart-link {
            div {
                position: relative;
            }
            p {
                position: absolute;
                top: 6.5%
            }
        }
    }


    // productList
    .prodlist-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        
        
    } 
    .prod-img {
        width: 7rem;
        margin-right: 1rem;
    }
    .prodlist {
        padding: 2rem;
        display: flex;
        width: 100%;
        align-items: flex-start;
        border-bottom: solid 1px;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: black;
        }
        div {
            display: flex;
            div {
                display: flex;
                flex-direction: column;
            }

        }
        &:hover {
            background-color: lightpink;
        }
    }

    .preco {
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }

    //productDetail

    .product-detail {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        button {
            border-radius: 0.3rem;
            padding: 0.5rem;
            cursor: pointer;
            &:hover{
                background-color: #FFE4E1;
            }
        }
    }

    .prod-detail-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
            width: 26rem;
            margin: 1rem 0rem;
        }
    }

    .description {
        margin-top: 1rem;
        h2 {
            margin-top: 1rem;
        }
    }
    .cart {
        display: flex;
        margin-top: 3rem;
        h3 {
            margin: 1rem;
        }
        button {
            padding: 1rem;
        }
    }
    //shopping cart
    .items-cart {
        background-color: #FFE4E1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.5rem;
        img {
            width: 5rem;
        }
        &:hover {
            background-color: #E46161;
        }
    }
    .cart-columns {
        margin-bottom: 0.5rem;
        border-bottom: solid 1px;

    }
    .clear {
        margin-top: 2rem;
        
        button {
        font-weight: bold;
        border-radius: 0.5rem;
        cursor: pointer;
        color: red;
        display: flex;
        margin: 0 auto;
        padding: 20px;
        background-color: #FFE4E1;
        
        }

    }

`;