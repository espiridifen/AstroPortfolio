import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useState } from 'react';

export default function ThreeScene() {

    const [ready, setReady] = useState(false);
    

  return (
    <Canvas style={{ 
        height: '100%', 
        opacity: ready ? 1 : 0,
        transition: 'opacity 700ms ease'
    }}
    onCreated={
        () => requestAnimationFrame(() => setReady(true))
    }
    >
      <Environment preset="sunset" />
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="coral" roughness={0.2} metalness={0.8} />
      </mesh>
      <OrbitControls autoRotate />
    </Canvas>
  )
}