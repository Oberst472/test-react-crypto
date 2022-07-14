import React, { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss'
import { InfoType } from '../../../types';

import BlockCurrencyInfo from '../../blocks/currencyInfo';
import UiLoading from '../../ui/loading';

import { apiGetInfo } from '../../../api';

type Info = {
    source_amount?: string
    target_amount?: string
}
const SectionCalculator = () => {
    const [info, setInfo] = useState(null as InfoType | null)
    const [isLoading, setIsLoading] = useState(false)
    const [throttle, setThrottle] = useState(null as any)

    useEffect(() => {
        getInfo({source_amount: '100.00'})
    }, [])

    const getInfo = async function (info: Info) {
        const obj = {
            source_currency: 'USD',
            target_crypto_asset_id: 'b2384bf2-b14d-4916-aa97-85633ef05742',
        }
        const data = {...obj, ...info}
        try {
            const res = await apiGetInfo(data)
            setInfo(res)
            console.log(res);
        } catch (e) {
            console.log(e);
        } finally {
            'success'
        }
    }
    const changeVal = async function (e: ChangeEvent<HTMLInputElement>, name: string) {
        const val = e.target.value

        setInfo({...info, [name]: val} as InfoType)
        clearTimeout(throttle)

        setThrottle(setTimeout(async () => {
            setIsLoading(true)
            await getInfo({[name]: val})
            setIsLoading(false)
        }, 500))

    }
    return (
        <section className={clsx(styles['section-calculator'])}>
            <h1>Select your Amount</h1>

            <BlockCurrencyInfo
                sum={info?.source_amount}
                currency={'usd'}
                name={'source_amount'}
                changeVal={changeVal}
            >
                You pay
            </BlockCurrencyInfo>

            <BlockCurrencyInfo
                sum={info?.target_amount}
                currency={'USDC EVMOS'}
                name={'target_amount'}
                changeVal={changeVal}
            >
                You receive
            </BlockCurrencyInfo>

            {isLoading && <UiLoading/>}
        </section>
    );
};

export default SectionCalculator;
