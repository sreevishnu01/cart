import React from 'react';
import OrderItem from './OrderItem';
import styles from '../style/orderedlist.module.css';
const Orderlist = ({ cart, ismobile }) => {
  // const cartLengthv = cart.length();

  return (
    <div className={styles.maincontainer}>
      <div className={styles.headingcontainer}>
        <h2>Order List</h2>
        {ismobile ? null : <p>View all</p>}
      </div>
      <div className={styles.itemcontainer}>
        {cart?.map((item, index) => (
          <OrderItem />
        ))}
      </div>
      <div>
        <hr
          style={{
            width: '100%',
            height: '1px',
            background: '#C1C1C1',
            border: 'none',
            marginBlock: '24px',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: '500',
            fontSize: '20px',
          }}
        >
          <h3>Total</h3>
          <h3
            style={{
              color: '#383838',
            }}
          >
            {cart?.length ? cart.length * 20.27 : null}
          </h3>
        </div>

        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
};

export default Orderlist;
