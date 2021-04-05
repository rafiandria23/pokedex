import MetaTags from "./metaTags";
import MenuBar from "../components/menuBar";
import Header from "../components/header";

export default function MainLayout(props) {
  return (
    <div>
      <MetaTags currentURL="" />
      {!props?.noHeader && <Header />}
      <MenuBar />
      {props.children}
    </div>
  );
}
