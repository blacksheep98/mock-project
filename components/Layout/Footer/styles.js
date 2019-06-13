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

    .LineFooter{
      padding-top: 0px;
      padding-left: 69rem;
    }

    .footerLine{
      width: 4%;
      border: 1px solid black
    }

    .footerLine2{
      width: 4%;
      border: 1px solid black
    }
  }

  .test{
    box-sizing: border-box;
    font-family: monospace;
  }

  .column {
    float: left;
    width: 33.33%;
    padding: 10px;

    @media only screen and (min-width: 768px) {

      .mq{
        font-size: 14px;
        width: 50%;
        float: left;
      }
      
    }

    @media only screen and (min-width: 1089px) {

      .mq{
        font-size: 16px;
        width: 33.3%;
        float: left;
      }
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

  .copyRight{
    background-color: white;
    padding: 20px 10px;
  }

  .copyRightP{
    text-align: center;
  }
`;
