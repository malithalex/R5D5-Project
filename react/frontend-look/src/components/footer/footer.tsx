import styles from './footer.module.scss';
import classNames from 'classnames';

export interface FooterProps {
    className?: string;
    children?: React.ReactNode;
}

export const Footer = ({ className, children = 'Footer' }: FooterProps) => {
    return (
        <footer className={styles['site-footer']}>
            <div className="container">
                <p className={styles.container}>&copy; NBA Player Value Prediction System</p>
            </div>
        </footer>
    );
};
