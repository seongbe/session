import styled from 'styled-components';

const NavWrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const NavImage = styled.img`
  cursor: pointer;
  width: 185px;
  height: 18px;
`;

const NavList = styled.ul`
  display: flex;
  color: #fff;
`;

const NavItem = styled.li`
  cursor: pointer;
  font-weight: 600;
  margin-left: 50px;
`;

const Section01Wrap = styled.div`
  background-color: #111;
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section01 = styled.div`
  > div {
    width: 1085px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 105px;
    color: #fff;
  }

  > div > div {
    height: 80px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Img01Img = styled.div`
  width: 440px;
  background-image: url('../../img/section_1.png');
`;

const Img02Img = styled.div`
  width: 600px;
  background-image: url('../../img/section_2.png');
`;

const Img03Img = styled.div`
  width: 275px;
  background-image: url('../../img/section_3.png');
`;

const Img04Img = styled.div`
  width: 620px;
  background-image: url('../../img/section_4.png');
`;

const Section02Wrap = styled.div`
  height: 530px;
  background-color: #FF7710;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  > p {
    margin-bottom: 60px;
  }

  h2 {
    font-weight: 600;
    text-align: center;
    font-size: 36px;
    line-height: 1.6;
  }
`;

const Section03Wrap = styled.div`
  padding: 200px 300px;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 80px;

    img {
      width: 50%;
    }

    div {
      margin-left: 80px;

      p {
        color: #737373;
      }

      .tage {
        margin-bottom: 20px;
        font-weight: 600;
      }

      h2 {
        font-size: 36px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 20px;
      }
    }

    .right {
      margin-right: 80px;
    }
  }
`;

const Section04Wrap = styled.div`
  height: 600px;
  background-color: #FF7710;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > h3 {
    text-align: center;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 20px;

    em {
      color: #fff;
    }
  }

  > div {
    display: flex;

    > div {
      margin: 0 20px;
      width: 330px;
      height: 330px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h3 {
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 20px;
      }

      p {
        font-size: 20px;
        margin-bottom: 5px;
      }

      .orange {
        color: #FF7710;
      }
    }
  }
`;

const Section05Wrap = styled.div`
  padding: 200px 280px;
  border-bottom: 2px solid #E3E3E3;

  .header {
    text-align: center;
    margin-bottom: 100px;

    h3 {
      font-size: 20px;
      color: #FF7710;
      margin-bottom: 20px;
    }

    h1 {
      font-weight: 48;
      font-weight: 600;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    width: 1250px;

    > div {
      cursor: pointer;
      background-color: #f5f5f5;
      width: 290px;

      > div {
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px 25px;

        h3 {
          font-size: 18px;
          font-weight: 600;
        }

        .text {
          padding-bottom: 20px;
          border-bottom: 2px solid #E3E3E3;
          color: #737373;
        }

        .info {
          color: #A6A6A6;
        }
      }
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 280px;

  .left {
    width: 50%;

    > img {
      width: 140px;
      margin-bottom: 20px;
    }

    p {
      line-height: 1.5;
      margin-bottom: 20px;
    }

    > div {
      display: flex;

      > div {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        background-color: #111111;
        border-radius: 50%;
        margin-right: 15px;

        .instar {
          width: 18px;
          height: 18px;
        }

        .youtube {
          width: 21px;
          height: 14px;
        }

        .branch {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: space-between;

    > div {
      h3 {
        font-weight: 600;
        margin-bottom: 30px;
      }

      > p {
        margin-bottom: 15px;
      }

      > div {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        p {
          margin-right: 10px;
        }

        img {
          cursor: pointer;
          width: 13px;
          height: 13px;
        }
      }
    }
  }
`;