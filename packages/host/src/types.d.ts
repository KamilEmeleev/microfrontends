declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
