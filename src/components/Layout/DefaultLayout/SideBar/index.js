import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles)

function SideBar() {
    return (
        <aside classNames={cx('wrapper')}>
            <h1>SideBar</h1>
        </aside>
    )
}

export default SideBar;