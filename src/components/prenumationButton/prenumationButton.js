import Link from 'next/link';
import styled from "styled-components";

const Button = styled.button `
text-align: center;
background-color: #000000;
color: white;
width: 270px;
height: 55px;
font-size: 18px;
border-radius: 10px;
margin-top: 48px;
img{
    margin-right: 20px;
}

`

const PrenumationButton = ({ href, text }) => {
  return (
    <Link href={href}>
        <Button className="prenumation-button"><img src="/plus.svg" alt="Plus" /> {text}</Button>
    </Link>
  );
};

export default PrenumationButton