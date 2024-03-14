import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Outlet } from "react-router-dom";

export function AboutMe() {
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
