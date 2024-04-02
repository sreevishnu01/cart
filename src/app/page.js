import Image from "next/image";
import Card from "./component/Card";
import Dropdown from "./component/Dropdown";
import { category } from "./utilss/data";

export default function Home() {
  return (
    <main>
      {/* <Card /> */}
      <Dropdown />
    </main>
  );
}
