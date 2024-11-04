import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface IAppProps {
    name: string;
    feedback: string;
    rating: number;
}

export default function FeedbackMail({name, feedback, rating}: IAppProps) {
  return (
    <Html>
      <Head />
      <Preview>Your Feedback is submitted!</Preview>
      <Tailwind>
        <Body className="bg-white font-sans border">
          <Container style={containerStyles}>
            <Heading className="text-center text-[#F97316]">
              Chroma UI - Developing ideas
            </Heading>
            <Text className="text-2xl font-semibold text-[#F97316]">
              Hello, Friend
            </Text>
            <Text className="text-lg text-gray-600">
              Thank you for Submitting your ChromaUI
            </Text>
            <Hr className="my-[16px] border-t-2 border-gray-300" />
            <Section>
              <Text>Name: {name}</Text>
              <Text>Feedback: </Text>
                <Text>{feedback}</Text>
              <Text>Rating: {rating}</Text>
            </Section>
            <Hr className="my-[16px] border-t-2 border-gray-300" />
            <Text className="text-lg font-medium text-[#F97316]">
              Best, <br />
              ChromaUI and Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const containerStyles = {
  margin: "0 auto",
  padding: "20px 0 48px",
};
