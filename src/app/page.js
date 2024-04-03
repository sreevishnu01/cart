import Image from 'next/image';
import Card from './component/Card';
import Dropdown from './component/Dropdown';
import { category } from './utilss/data';
import OrderItem from './component/OrderItem';
import Orderlist from './component/Orderlist';

export default function Home() {
  return (
    <main>
      <HomeLayout />
    </main>
  );
}
