import { useEffect, useRef, RefObject } from 'react';

export const useEventListener = <T extends HTMLElement = HTMLDivElement>(
    eventName: string,
    handler: (event: Event | CustomEvent<unknown>) => void,
    element?: RefObject<T>
): void => {
    const savedHandler = useRef<(event: Event) => void>();

    useEffect(() => {
        const targetElement: T | Document = element?.current || document;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        if (savedHandler.current !== handler) {
            savedHandler.current = handler;
        }
        const eventListener = (event: Event) => {
            // eslint-disable-next-line no-extra-boolean-cast
            if (!!savedHandler?.current) {
                savedHandler.current(event);
            }
        };
        targetElement.addEventListener(eventName, eventListener);
        // eslint-disable-next-line consistent-return
        return () => {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element, handler]);
};

export default useEventListener;
