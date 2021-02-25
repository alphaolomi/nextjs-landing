import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import i18n from "./_translation";
import Footer from "../components/Footer";
import Header from "../components/Header";


import GlobalStyles from "./_globalStyles";
import HomePage from "./_home";

const Home = () => {

  return (
    <>
    <I18nextProvider i18n={i18n}>

      <GlobalStyles />
      <Header />
      
      <HomePage/>

      <Footer />
    </I18nextProvider>
    </>
  );
};

export default Home;
