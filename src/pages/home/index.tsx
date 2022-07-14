import React from 'react';
import styles from './style.module.scss'
import SectionCalculator from '../../components/sections/calculator';
const PageHome = () => {
    return (
        <div className={'page-home'}>
            <SectionCalculator/>
        </div>
    );
};

export default PageHome;
