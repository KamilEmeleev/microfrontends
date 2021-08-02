/// <reference types="react" />
declare namespace JSX {
    interface IntrinsicElements {
        'wc-copyright': any;
    }
}

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}
