import { BaseComponent } from "./base-component";
import "./btn_styles.scss";

export class ButtonElement extends BaseComponent {
  constructor(
    parentNode: HTMLElement,
    styles: string[] = [],
    context = "",
    id = "",
  ) {
    super(null, "button");

    parentNode.append(this.element);
    this.element.classList.add(...styles);
    this.element.innerText = `${context}`;
    this.element.id = `${context}_${id}`;
   
  }

  destroy() {
    this.element.remove();
  }
}
