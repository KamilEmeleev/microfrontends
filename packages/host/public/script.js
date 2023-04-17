class Widget {
  constructor(config) {
    const { container } = config;
    this.shadowRoot = container.attachShadow({ mode: 'open' });
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'http://localhost:5000/styles.css';
    this.shadowRoot.appendChild(link);
  }

  init() {
    const button = document.createElement('button');
    button.innerText = 'Widget';

    button.onclick = () => {
      alert('Click!');
    };

    this.shadowRoot.appendChild(button);
  }
}

window.init = (config) => {
  window.widget = new Widget(config);
};
