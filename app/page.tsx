import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentArea from "../components/ContentArea";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/content-area.css";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <ContentArea />
      <Footer />
    </div>
  );
}
