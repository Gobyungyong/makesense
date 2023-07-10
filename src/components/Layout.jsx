import classes from './Layout.module.css';
import Card from './Card';

function Layout(props) {
    return (
        <div className={classes.wrapper}>
            <Card/>
        </div>
    );
}

export default Layout;