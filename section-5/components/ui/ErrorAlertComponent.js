import classes from './error-alert.module.css';

function ErrorAlertComponent(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlertComponent;
