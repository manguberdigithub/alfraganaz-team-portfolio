import { Contact, Header, OurProcess, Section, Projects } from "@/components";

/*----------/Import Components from Index.tsx-------------*/
const Home: React.FC = () => {
  return (
    <div>
      {/* Header include  Navbar and Hero components*/}
      <Header />
      <Section title="LOYHALARIMIZ" disc="BIZNING">
	<Projects />
      </Section>
      <OurProcess />
      <Contact />
    </div>
  );
};

export default Home;
