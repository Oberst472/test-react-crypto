import React from 'react';
// import styles from './style.module.scss'
import {BlockCurrencyInfoPropsType} from '../../../types'
const BlockCurrencyInfo = ({sum, currency, name, changeVal, children}: BlockCurrencyInfoPropsType) => {
    return (
        <article className={'block-currency-info'}>
            <span
                className={'block-currency-info__title'}
            >
                {children}
            </span>

            <input
                className={'block-currency-info__amount'}
                value={sum || ''}
                onChange={(e) => changeVal(e, name)}
            />

            <span
                className={'block-currency-info__currency'}
            >
                {currency}
            </span>
        </article>
    );
};

export default BlockCurrencyInfo;
