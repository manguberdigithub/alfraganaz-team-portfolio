import { Contact, Footer, Header, OurProcess } from "@/components";

/*----------/Import Components from Index.tsx-------------*/
const Home: React.FC = () => {
  return (
    <div>
      {/* Header include  Navbar and Hero components*/}
      <Header />
      <OurProcess />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
