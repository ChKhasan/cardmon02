import React from 'react';
import Card from '../comps/Card';
import { products } from '../data/Products';
import styles from './HomePage.module.css';
import { Button } from '../comps/Card';
const HomePage = () => {
    return (
        <div className='container'>
            <Button>dsjhdj</Button>
         <div className={styles.innerContainer}>
         {products.map((product) => (
         <div className={styles.cardOut}>
                 
                 <Card {...product}/>
             </div>)) }
             
         </div> 
        </div>
    );
};


export default HomePage;