import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props: any) => {
    const ref = useRef<any>(null);
    // @ts-ignore
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array;

    // Generate random colors
    const colors = new Float32Array(5000 * 3); // 3 values per point (RGB)
    for (let i = 0; i < 5000 * 3; i++) {
        colors[i] = Math.random();
    }

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
                {/* @ts-ignore */}
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attach="attributes-position"
                        count={sphere.length / 3}
                        array={sphere}
                        itemSize={3}
                        args={[sphere, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={colors.length / 3}
                        array={colors}
                        itemSize={3}
                        args={[colors, 3]}
                    />
                </bufferGeometry>
            </Points>
        </group>
    );
};

const HeroScene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default HeroScene;
