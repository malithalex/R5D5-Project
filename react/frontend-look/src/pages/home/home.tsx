import styles from './home.module.scss';
import classNames from 'classnames';
import Club1 from './images/club1.png';
import Club2 from './images/club2.png';
import Club3 from './images/club3.png';
import Club4 from './images/club4.png';

import Player1 from './players/lebron.jpg';
import Player2 from './players/curry.jpg';
import Player3 from './players/kevin.jpg';
import Player4 from './players/james.jpg';
import Player5 from './players/lin.jpg';
import Player6 from './players/carter.jpg';
import Player7 from './players/camilo.jpg';
import Player8 from './players/chris.jpg';

export interface HomeProps {
    className?: string;
    children?: React.ReactNode;
}

export const Home = ({ className, children = 'Home' }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {'This is ' + children}
            <h2 className="topic">
                NBA Clubs
                <b />
            </h2>
            <div className={classNames('carousel', styles.carousel, styles.clubp)}>
                <img src={Club1} alt="Image 1" className={styles.carousel} />
                <img src={Club2} alt="Image 2" className={styles.carousel} />
                <img src={Club3} alt="Image 3" className={styles.carousel} />
                <img src={Club4} alt="Image 4" className={styles.carousel} />
                <img src={Club1} alt="Image 5" className={styles.carousel} />
            </div>

            <br />

            <h2 className="pop-players">
                Most Populer Players
                <br />
            </h2>
            <div className={styles.area}>
        
                <div className={classNames('players', styles.team)}>
                    <div className={classNames('member', styles.member)}>
                        <img src={Player1} alt="players image" />
                        {/* <h3>Lebron James</h3> */}
                    </div>

                    <div className={classNames('member', styles.member)}>
                        <img src={Player2} alt="players image" />
                        {/* <h3>Stephen Curry</h3> */}
                    </div>

                    <div className={classNames('member', styles.member)}>
                        <img src={Player3} alt="players image" />
                        {/* <h3>Kevin Durant</h3> */}
                    </div>
                    <br />

                    <div className={classNames('member', styles.member)}>
                        <img src={Player4} alt="players image" />
                        {/* <h3>James Harden</h3> */}
                    </div>

                    <div className={classNames('member', styles.member)}>
                        <img src={Player5} alt="players image" />
                        {/* <h3>Jeremy Lin</h3> */}
                    </div>

                    <div className={classNames('member', styles.member)}>
                        <img src={Player6} alt="players image" />
                        {/* <h3>Chris Paul</h3> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
