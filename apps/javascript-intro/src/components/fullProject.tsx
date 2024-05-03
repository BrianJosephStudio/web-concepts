import { useState, useRef, MouseEvent, useEffect } from 'react';
// import { CustomEventProvider, useCustomEvent } from "../util/CustomEventProvider"
import { MousePosition } from '../types/MousePosition'

const sphereEventName = 'sphereEvent'

const Sphere = () => {
    const sphereRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const sphereRect = sphereRef.current!.getBoundingClientRect()
        document.addEventListener(sphereEventName, (event: any) => {
            const position= event.detail
            sphereRef.current!.style.left = `${position.x - (sphereRect.width / 2)}px`
            sphereRef.current!.style.top = `${position.y - (sphereRect.height /2)}px`
        })
    },[sphereRef])
    return (
        <div ref={sphereRef} className="sphere"></div>
    );
}

function SphereSpawner() {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })
    const [spheres, setSpheres] = useState<{}[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
        const containerRect = event.currentTarget.getBoundingClientRect()
        setPosition({
            x: event.screenX - containerRect.left,
            y: event.screenY - containerRect.top
        })

        const customEvent = new CustomEvent(sphereEventName, { detail: position })
        document.dispatchEvent(customEvent)
    }

    const handleSpawnSphere = () => {
        const newSphere = {};
        setSpheres([...spheres, newSphere]);
    };

    return (
        <>
            <button onClick={handleSpawnSphere}>Spawn</button>
            <div ref={containerRef} className="container" onMouseMove={(event) => handleMouseMove(event)}>
                {spheres.map((_sphere, index) => (
                    <Sphere key={index} />
                ))}
            </div>
        </>
    );
}

export default SphereSpawner