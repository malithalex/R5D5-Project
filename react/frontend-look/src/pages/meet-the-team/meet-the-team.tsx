import styles from './meet-the-team.module.scss';
import classNames from 'classnames';
import { Footer } from '../../components/footer/footer';
import sasiru from './images/sasiru.png';
import header from './images/header.jpg';
import malith from './images/malith.jpg';
import anupa from './images/anupa.png';
import dulara from './images/dulara.jpg';
import mojitha from './images/mojitha.jpg';
import { NavigationBarOne } from '../../components/navigation-bar-one/navigation-bar-one';

export interface MeetTheTeamProps {
    className?: string;
    children?: React.ReactNode;
}

export const MeetTheTeam = ({ className, children = 'MeetTheTeam' }: MeetTheTeamProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="all-content">
                <div className={styles.header}>
                    <img src={header} className={styles.meettheteamimage} />
                    <h1 className={styles['header-text']}>Meet the Team</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className={styles.area}>
                    <div className={classNames('team', styles.team)}>
                        <div className={classNames('member', styles.member)}>
                            <img src={anupa} alt="Member photo Anupa" />
                            <h3>Anupa Perera</h3>
                            <p>Software Developer
                            <br />
                                w1867689
                            </p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src={sasiru} alt="Member photo Sasiru" />
                            <h3>Sasiru Vishmika</h3>
                            <p>
                                Software Developer
                                <br />
                                w1899317
                            </p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src={malith} alt="Member photo Malith" />
                            <h3>Malith alexander</h3>
                            <p>Software Developer
                                <br />
                                1867418
                                </p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src={dulara} alt="Member photo Dulara" />
                            <h3>Dulara Chathuska</h3>
                            <p>
                                Software Developer
                                <br />
                                w1912934
                            </p>
                        </div>
                        <div className={classNames('member', styles.member)}>
                            <img src={mojitha} alt="Member photo Mojitha" />
                            <h3>Mojitha Gunaratne</h3>
                            <p>Software Developer
                            <br />
                                w1867439
                                </p>
                        </div>
                    </div>
                </div>
                <div className={styles['after-statement']}>
                    <p className="afterstatement-text">
                        <br />
                        <br />
                        <br />
                        <br />
                        <i>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
                            varius felis, quis faucibus dolor hendrerit vel. Pellentesque aliquet
                            elit elit, ut gravida justo rhoncus in.
                        </i>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
};
