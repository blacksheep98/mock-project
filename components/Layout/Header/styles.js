import css from 'styled-jsx/css';

export default css`

  .aa{
    .nav2 {
      list-style-type: none;
      margin: 0;
      padding: 10px;
      overflow: hidden;
      background-color: #8239BF;
      position: sticky;
      top: 0;
    }

    .nav2LiLeft{
      float: left;
    }
    
    .a2{
      display: block;
      color: white;
      text-align: center;
      padding: 20px 16px;
      text-decoration: none;
      font-size: 20px;
      font-family: monospace;
    }

    .aFury{
      display: block;
      color: white;
      text-align: center;
      padding: 6px 16px; 
      text-decoration: none;
      font-size: 35px;
      font-family: monospace; 
    }
    
    @media screen and (max-width: 600px) {
      .aFury, .a2, .nav2LiLeft{

        float: none;
      }
    }

    .navbar-burger burger{
      color: white;
    }
  }
    
  
`;
