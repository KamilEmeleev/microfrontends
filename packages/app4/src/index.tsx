import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { themes } from '@abdt/ornament';
import { create } from 'jss';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';

import App from './App';

type Config = {
    container: HTMLElement;
    global: Document
};

declare global {
    interface Window {
        init: ({container, global}: Config) => void;
        widget: Widget;
    }
}

class Widget {
    private shadowRoot: ShadowRoot;
    private mountPoint: HTMLDivElement;
    private styles: HTMLDivElement;
    private config: { container: HTMLElement; global: Document};

    constructor(config: Config) {
        const { container } = config;
        this.config = config;
        this.shadowRoot = container.attachShadow({ mode: 'open' });
        this.mountPoint = document.createElement('div');
        this.styles = document.createElement('div');
        this.shadowRoot?.appendChild(this.styles);
    }

    init() {
        const { global } = this.config;
        const jss = create({
            ...jssPreset(),
            insertionPoint: this.styles,
        });

        this.shadowRoot?.appendChild(this.mountPoint);

        ReactDOM.render(
            <StylesProvider jss={jss}>
                <ThemeProvider theme={themes.base}>
                    <App global={global}/>
                </ThemeProvider>
            </StylesProvider>,
            this.mountPoint,
        );
    }
}

window.init = (config: Config) => {
    window.widget = new Widget(config);
};
