import React from 'react';
import styles from './Card.module.scss'
import styled, { StyledFunction } from 'styled-components';

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 32px;
background: #ff7010;
border-radius: 6px;
border: none;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
color: #ffffff;
cursor: pointer;`
const Card = (props) => {
    return (
        <div className='card'>
            <div >
                <img src="/images/Rectangle 4.png" alt="Pizza" className={styles.cardImg} />
            </div>
            <div className={styles.cardBody}>
                <h3  className={styles.cardTitle}>{props.title}</h3>
                <p className={styles.cardDesc}>{props.text}</p>
            </div>
            <div className={styles.cardFooter}>
                <Button>select</Button>
                <p className={styles.cardPrice}>{props.price}</p>
            </div>
        </div>
    );
};


export default Card;