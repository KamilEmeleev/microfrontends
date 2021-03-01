import * as React from 'react';
import * as ReactDOM from 'react-dom';

const CopyrightComponent = () => {
    const styles = `
        p {
            color: red !important;
        }
    `;
    const currentYear = new Date().getFullYear();
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <p>© {currentYear} Ак Барс Цифровые Технологии</p>
        </>
    );
};

export class Copyright extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', () => alert('Привет!'));
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        // const name = this?.getAttribute('name') || '';

        ReactDOM.render(<CopyrightComponent />, shadowRoot);
    }
}

export default Copyright;
