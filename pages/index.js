import Container from "../components/Container";
import HeroHome from "../components/HeroHome";
// import { createClient } from "next-sanity";

export default function IndexPage({ portfolios, experiences }) {
  return (
    <>
    <Container>
      <HeroHome />
    </Container>
      {/* <main>
        <h2>portfolio</h2>
        {portfolios.length > 0 && (
          <ul>
            {portfolios.map((portfolio) => (
              <li key={portfolio._id}>{portfolio?.project_name}</li>
            ))}
          </ul>
        )}
        {!portfolios.length > 0 && <p>No pets to show</p>}
        {portfolios.length > 0 && (
          <div>
            <pre>{JSON.stringify(portfolios, null, 2)}</pre>
          </div>
        )}
        {!portfolios.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}

        <h2>experience</h2>
        {experiences.length > 0 && (
          <ul>
            {experiences.map((exp) => (
              <li key={exp._id}>{exp?.project_name}</li>
            ))}
          </ul>
        )}
        {!experiences.length > 0 && <p>No pets to show</p>}
        {experiences.length > 0 && (
          <div>
            <pre>{JSON.stringify(experiences, null, 2)}</pre>
          </div>
        )}
        {!experiences.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main> */}
    </>
  );
}

// const client = createClient({
//   projectId: "g7d6db2q",
//   dataset: "production",
//   apiVersion: "2022-10-31",
//   useCdn: false,
// });

// export async function getStaticProps() {
//   const portfolios = await client.fetch(`*[_type == "portfolio"]`);
//   const experiences = await client.fetch(`*[_type == "experience"]`);

//   return {
//     props: {
//       portfolios,
//       experiences,
//     },
//   };
// }
