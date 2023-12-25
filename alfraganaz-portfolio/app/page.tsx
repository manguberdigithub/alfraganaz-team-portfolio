/*----------Import Components from Index.tsx-------------*/
import { Header } from "@/components";
import { Navbar } from "@/components";
import { Portfolios } from "@/components";
import { Footer } from "@/components";
/*----------/Import Components from Index.tsx-------------*/
const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      {/* Header include  Navbar and Hero components*/}
      <Header />
      {/* 
      <Portfolios />
      <Footer /> */}
    </main>
  );
};
export default Home;
