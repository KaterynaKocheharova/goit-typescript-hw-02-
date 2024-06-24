import css from "./Container.module.css";
import clsx from "clsx";
import { ContainerInt } from "./Container.types";

export default function Container({ children, notHeader }: ContainerInt) {
  return (
    <div
      className={clsx(css.container, { [css["main-container"]]: notHeader })}
    >
      {children}
    </div>
  );
}
