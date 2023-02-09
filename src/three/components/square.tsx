import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Stats, OrbitControls } from '@react-three/drei'


type Props = {
    w: number;
    h: number;
    positionY: number;
    positionX: number;
    color?: string;
}


function ThreeScene({w, h, positionY, positionX}: Props) 
{
    
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[5, 5, 5]} />
            <Box w={w-0.5} h={h+2} positionY={positionY+2} positionX={positionX-2.5} color={'red'} />
            <Box w={w-0.5} h={h+1} positionY={positionY+1.5} positionX={positionX-1} color={'red'} />
            <Box w={w+6} h={h} positionY={positionY} positionX={positionX} color={'blue'} />
            <OrbitControls
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 6}
            />
        </Canvas>
    )
}
export default ThreeScene;

function Box({w, h, positionY, positionX, color}: Props) {
    const boxRef = useRef<Mesh>(null!);

    useFrame(() => {
        boxRef.current.position.y = positionY;
        boxRef.current.position.x = positionX;
    })

    return (
        <mesh ref={boxRef}>
            <boxGeometry args={[w, h , 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}






