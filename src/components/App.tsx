import * as React from "react";
import * as styles from "./../assets/scss/App.scss";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className={styles.app}>
                <h1>React + Typescript + CSS Modules + SASS + Bootstrap</h1>
                <p>The button below has hardcoded bootstrap classes and also a custom class from .scss file using CSS Modules</p>
                <button className={`btn btn-primary ${styles.abc}`}>Click me</button>
            </div>
        );
    }
}
