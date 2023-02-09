import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Stats, OrbitControls } from '@react-three/drei'
import ThreeScene from './three/components/square'



function App() {

  return (
    <>
      <div className='App h-screen'>
        <ThreeScene key={1} w={1} h={1} positionY={1} positionX={1} /> 
      </div>
    </>
  )
}

export default App
