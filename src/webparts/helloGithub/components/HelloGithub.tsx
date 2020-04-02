import * as React from "react";
import styles from "./HelloGithub.module.scss";
import { IHelloGithubProps } from "./IHelloGithubProps";
import { escape } from "@microsoft/sp-lodash-subset";
import "@pnp/polyfill-ie11";
import { sp } from "@pnp/sp/presets/all";
export default class HelloGithub extends React.Component<
  IHelloGithubProps,
  {}
> {
  public componentDidMount() {
    sp.web.lists
      .getByTitle("TestList")
      .get()
      .then(_ => console.log("=>", _));
  }
  public render(): React.ReactElement<IHelloGithubProps> {
    return (
      <div className={styles.helloGithub}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
