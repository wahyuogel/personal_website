import Container from "../components/Container";
import PageBlock from "../components/PageBlock";
import Experience from "../components/ExperienceContent";
import { createClient } from "next-sanity";

export default function HomePage({ experiences }) {
  return (
    <>
    <Container>
      <PageBlock>
        <Experience experiences={experiences} />
      </PageBlock>
    </Container>
    </>
  );
}

const client = createClient({
  projectId: "g7d6db2q",
  dataset: "production",
  apiVersion: "2022-10-31",
  useCdn: false,
});

export async function getStaticProps() {
  const experiences = await client.fetch(`*[_type == "experience"] | order(_createdAt desc)`);

  return {
    props: {
      experiences,
    },
  };
}
