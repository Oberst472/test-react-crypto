import React from 'react';
// import styles from './style.module.scss'
type BlockCurrencyInfoProps = {
    amount: string | number
    currency: string
    children: string
}
const BlockCurrencyInfo = ({amount, currency, children}: BlockCurrencyInfoProps) => {
    const changeVal = function (e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }
    return (
        <article className={'block-currency-info'}>
            <span className={'block-currency-info__title'}>{children}</span>
            <input className={'block-currency-info__amount'} value={amount} onChange={(e) => changeVal(e)}/>
            <span className={'block-currency-info__currency'}>{currency}</span>
        </article>
    );
};

export default BlockCurrencyInfo;
