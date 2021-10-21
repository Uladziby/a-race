export class BaseComponent {
  readonly element: HTMLElement;

  innerText: void;

  constructor(
    parentNode: HTMLElement | null = null,
    tag: keyof HTMLElementTagNameMap = "div",
    styles: string[] = [],
    content = "",
    id = "",
  ) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    this.element.innerText = `${content}`;
    this.element.id = id;

    if (parentNode) {
      parentNode.appendChild(this.element);
    }
  }

  destroy() {
    this.element.remove();
  }
}
