import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div className={classes.main_container}>
            <div className={classes.wrapper}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;