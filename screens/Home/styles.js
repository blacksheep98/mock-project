import css from 'styled-jsx/css';

export default css`

  .underHeader{
    background: #8239BF;
    height: 360px;
  }

  .underHeaderP{
    padding: 5px 20px;
    text-align: center;
    font-size: 45px;
    font-family: monospace;
    color: white;
  }

  .underHeaderP2{
    padding: 5px 20px;
    text-align: center;
    font-size: 25px;
    font-family: monospace;
    color: white;

  }

  .hrS{
    width: 4%;
    height: 1%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  .hr2{
    width: 100%;
    border: 0.3px solid #E3E3E3;
  }

  .hr3{
    width: 3.5%;
    height: 1.5%;
    border: 1px solid grey;
    margin: auto;
  }

  .ulStyle{
    text-align: center;
  }

  .ulMidBody{
    color: black;
    font-size: 15px;
    font-family: monospace;
    padding: 4rem 1rem;
    
  }

  .liStyle{
    background: white;
    width: 450px;
    align: center;
    
    display: inline-block;
    
  }

  .liMidBody{
    background: white;
    display: inline;
    padding: 10px 20px;
    color: white;
    border-radius: 8px;
    border:0.1px solid black;

    &.liMidBody:hover{
      background: #007DFF;
      border-radius: 8px;
    }

    .aStyle{
      color: black;
    }
  }

  .column{
    padding: 10px;
    text-align: center;
    font-size: 20px;
    width: 100%;

    .inner {
      padding: 20px;
      color:black;
    }
       
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      width: 50%;
      float: left;
    }

    @media only screen and (min-width: 1089px) {
      font-size: 12px;
      width: 33.3%;
      float: left;
    }   
  }

  .wantToWorkWithUs{
    text-align: center;
    padding: 4rem 1rem;
  }

  .pWantToWorkWithUs{
    text-align: center;
    font-size: 22px;
    font-family: monospace;
  }

  .pWantToWorkWithUsDesc{
    text-align: center;
    font-size: 22px;
    font-family: monospace;
    padding-bottom: 1.5rem; 
  }

  .bStyle{
    color: white;
    cursor: pointer;
    background: #0F81FD;
    border-radius: 20px;
    padding: 0.8rem 1rem;

    font-size: 18px;
    font-family: monospace;
    color: white;

    box-shadow: 1px 10px 15px rgba(0, 0, 0, 0.1);
  }

  .paddingButton{
    padding-bottom: 2rem;
  }


`;
