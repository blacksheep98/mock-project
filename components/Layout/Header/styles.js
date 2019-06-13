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
    
    .nav2Li{
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

    .a2123{
      display: block;
      color: white;
      text-align: center;
      padding: 6px 16px; 
      text-decoration: none;
      font-size: 35px;
      font-family: monospace; 
    }
    
    .a2.right {
      float: left;
    }
    
    @media screen and (max-width: 600px) {
      .a2.right, .nav2Li{

        float: none;
      }
    }
  }
    
  
`;
