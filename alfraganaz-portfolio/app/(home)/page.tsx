import {
      Contact, 
      Header, 
      OurProcess, 
      Section, 
      Projects, 
      Services, 
      Team 
} from "@/components";

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
      <Section title="BIZNING JAMOA" subTitle="Sizning buyurtmangizni sifatli, ishonchli va xavfsiz qilib beradigan shu jamoa bo'ladi.">
	<Team />
      </Section>
      <Section title="JARAYONIMIZ" disc="ISHLASH">
	<OurProcess />
      </Section>
      <Contact />
    </div>
  );
};

export default Home;
