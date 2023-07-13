import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    );
}

export default Layout;