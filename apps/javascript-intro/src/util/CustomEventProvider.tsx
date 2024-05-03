import { createContext, useContext, useState, ReactNode } from 'react';
import { MousePosition } from '../types/MousePosition'

const CustomEventContext = createContext<{
    emitCustomEvent: (eventData: MousePosition) => void;
    customEvent: MousePosition | null;
}>({
    emitCustomEvent: () => { },
    customEvent: null,
});


export const CustomEventProvider = ({ children }: { children: ReactNode }) => {
    const [customEvent, setCustomEvent] = useState<MousePosition | null>({ x: 0, y: 0 });

    const emitCustomEvent = (eventData: MousePosition) => {
        setCustomEvent(eventData);
    };

    return (
        <CustomEventContext.Provider value={{ emitCustomEvent, customEvent }}>
            {children}
        </CustomEventContext.Provider>
    );
};

export const useCustomEvent = () => {
    return useContext(CustomEventContext);
}