import css from 'styled-jsx/css';

export default css`
  .footer {
    background-color: #ECF3FD;
    padding-top: 3rem;
    padding-bottom: 4rem;

    .ulStyle{
      text-align: center;
    }
  
    .ulMidBody{
      color: black;
      font-size: 15px;
      font-family: monospace;
      padding-top: 4rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0rem;
      
    }
  
    .liStyle{
      background: transparent;
      width: 100%;
      align: center;
      display: inline-block;
    }
  
    .liMidBody{
      background: transparent;
      display: inline;
      padding: 5px 20px;
      padding-right: 40rem;
      color: #1382FF;
      font-size: 22px;
      font-family: monospace;
    }

    .liMidBody2{
      background: transparent;
      display: inline;
      padding: 5px 20px;
      padding-right: 8rem;
      color: black;
    }

    .liMidBody3{
      background: transparent;
      display: inline;
      padding: 5px 20px;
      color: black;
    }
  }

  .test{
    box-sizing: border-box;
    font-family: monospace;
  }

  .column{
    float: left;
    width: 33.33%;
    padding: 10px;
    padding-left: 80px;
  }

  @media screen and (max-width: 1086px) {
    .column{
      font-size: 18px;
      width: 50%;
      margin-top: 0;
      padding: 30px;
      padding-left: 80px;
    }
  }

  @media screen and (max-width: 768px) {

    .columnStyle1{
      color: red;
    }
    .column{
      font-size: 20px;
      width: 100%;
      margin-top: 0;
      padding: 30px;
      padding-left: 80px;
    }
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
    
  }

  .columnStyle1{
    font-size: 25px;
    color: #1382FF;
  }
  
  .form-style{
    padding: 10px;
    width: 250px;
    border-radius: 8px;
    background: white;
  }

  .input-style{
    border: none;
    padding-left: 5px;
    font-family: monospace;
  }

  .form-button-style{
    padding: 5px;
    padding-left: 40px;
    background: transparent;
    border: none;
  }

  .columnStyle2{
    font-size: 22px;
  }

  .hrStyling{
    background-color: #1382FF;
    width: 60px;
    height: 5px;
    border-radius: 5px;
    margin-right: auto;
  }

`;
