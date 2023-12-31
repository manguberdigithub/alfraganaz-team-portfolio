import { Contact, Header, OurProcess, Section, Projects, Services } from "@/components";

/*----------/Import Components from Index.tsx-------------*/
const Home: React.FC = () => {
  return (
    <div>
      {/* Header include  Navbar and Hero components*/}
      <Header />
      <Section title="LOYHALARIMIZ" disc="BIZNING">
	<Projects />
      </Section>
      <Section title="QILA OLAMIZ" disc="NIMALAR">
	<Services />
      </Section>
      <OurProcess />
      <Contact />
    </div>
  );
};

export default Home;
