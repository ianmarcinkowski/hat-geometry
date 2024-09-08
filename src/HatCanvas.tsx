import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, MeshProps } from '@react-three/fiber'

interface BoxProps {
    size: number,
    position: MeshProps["position"]
}
const Box: React.FC<BoxProps> = ({ size, position }) => {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <mesh
            position={position}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

interface HatCanvasProps {
  radius: string;
}

const HatCanvas: React.FC<HatCanvasProps> = ({ radius }) => {
    let radInt: number | null = null;
    try {
        radInt = parseInt(radius);
    } catch (e) {
        radInt = null;
    }

    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box size={radInt} position={[0, 0, 0]} />
        </Canvas>
    )
}

export default HatCanvas;