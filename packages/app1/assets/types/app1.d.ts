// / <reference types="react" />
declare module 'app1/Button' {
    import * as React from 'react';

    export interface ButtonProps {
        onClick?: () => void;
    }
    export const Button: React.FC<ButtonProps>;
}
declare module 'app1/App' {
    const App: () => JSX.Element;
    export default App;
}
declare module 'app1/Copyright' {
    export class MyElement extends HTMLElement {
        connectedCallback(): void;
    }
}
