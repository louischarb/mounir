import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components";
import {
  AboutImg,
  Breadcrumb,
  Container,
  SubContainer,
  Description,
  Row,
  Subtitle,
  Title,
  Text,
} from "./styles";
import {
  setBackgroundIsActiveFalse,
  setBackgroundIsActiveTrue,
  headerStateProps,
} from "../../redux";

export default () => {
  useEffect((): void => {
    dispatch(setBackgroundIsActiveFalse());
  }, []);

  const dispatch = useDispatch();

  const handleScroll = (e: any): void => {
    const scrollTop = e?.target?.scrollTop;
    if (scrollTop > 150)
      dispatch(setBackgroundIsActiveTrue());
    else if (scrollTop === 0)
      dispatch(setBackgroundIsActiveFalse());
  };

  return (
    <Container onScroll={handleScroll}>
      <AboutImg />
      <Breadcrumb>Portfolio - About</Breadcrumb>
      <SubContainer>
        <Description>{description}</Description>
        <Row>
          <Subtitle>MY RESUME</Subtitle>
        </Row>
        <Row>
          <Subtitle>GET IN TOUCH</Subtitle>
        </Row>
        <Row>
          <Title>
            Drop a message or two, I am open for inquiries and collaborations
          </Title>
        </Row>
        <Row>
          <Subtitle>CONTACT INFORMATIONS</Subtitle>
        </Row>
        <Row>
          <Text>13 A Allée du sable</Text>
          <Text>33440 Ambarès et Lagrave</Text>
          <Text>France</Text>
          <br />
          <Text>+33 6 43 87 31 33</Text>
          <Text>m.sakrane@gmail.com</Text>
        </Row>
      </SubContainer>
      <Footer />
    </Container>
  );
};

const description = `Hello! My name is Mounir Sakrane. I'm a Designer based in Bordeaux, France with 2+ years of experience. I specialise in branding and
digital design, with a bit of video from time to time. Being a designer is a childhood dream of mine and thus, I love what I do and strive for excellence in my designs to create
highly satsfying end product.`;
