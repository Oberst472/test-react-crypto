import React, { useEffect } from 'react';
// import styles from './style.module.scss'
import BlockCurrencyInfo from '../../blocks/currencyInfo';

const SectionCalculator = () => {
    useEffect(() => {
        console.log('effect');
    }, [])
    return (
        <section className={'section-calculator'}>
            <h1>Select your Amount</h1>
            <BlockCurrencyInfo amount={300} currency={'usd'}>You pay</BlockCurrencyInfo>
            <BlockCurrencyInfo amount={0.2323} currency={'USDC EVMOS'}>You receive</BlockCurrencyInfo>
        </section>
    );
};

export default SectionCalculator;
