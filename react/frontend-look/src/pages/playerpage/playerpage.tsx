import React from 'react';
import styles from './playerpage.module.scss';
import camilo from './sample/camilo.jpg';

export interface PlayerpageProps {
    className?: string;
}

export const Playerpage: React.FC<PlayerpageProps> = ({ className = '' }) => (
    <div className={className}>
        Playerpage<h2 className={styles.heading}>Two Players Side by Side</h2>
        <img src={camilo} className={styles.topic} />
        <select className={styles['drop-down']}>
            <option>Lebron James</option>
            <option>Stephen Curry</option>
            <option>Kevin Durant</option>
            <option>James Harden</option>
            <option>Jeremy Lin</option>
            <option>Chris Paul</option>
            <option>Camilo Anthony</option>
        </select>
    </div>
);
