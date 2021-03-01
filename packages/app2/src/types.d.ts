// / <reference types="react" />
declare namespace JSX {
    interface IntrinsicElements {
        'my-element': any;
    }
}

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}
