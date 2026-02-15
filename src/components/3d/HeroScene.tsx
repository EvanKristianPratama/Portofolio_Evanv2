import { useMemo, useRef, type ComponentProps } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import type { Points as ThreePoints } from 'three';

type StarsProps = Omit<ComponentProps<typeof Points>, 'positions' | 'colors' | 'stride'>;

const createPseudoRandom = (seed: number) => {
    return ((seed * 16807) % 2147483647) / 2147483647;
};

const Stars = (props: StarsProps) => {
    const ref = useRef<ThreePoints | null>(null);
    const sphere = useMemo(
        () => random.inSphere(new Float32Array(15000), { radius: 1.5 }) as Float32Array,
        []
    );

    const colors = useMemo(() => {
        const generatedColors = new Float32Array(15000 * 3);
        for (let i = 0; i < 15000; i++) {
            // Mix of white, soft blue, and soft purple
            const r = createPseudoRandom(i + 1);
            if (r > 0.8) {
                // Bluish
                generatedColors[i * 3] = 0.7;
                generatedColors[i * 3 + 1] = 0.8;
                generatedColors[i * 3 + 2] = 1.0;
            } else if (r > 0.6) {
                // Purplish
                generatedColors[i * 3] = 0.9;
                generatedColors[i * 3 + 1] = 0.7;
                generatedColors[i * 3 + 2] = 1.0;
            } else {
                // White
                generatedColors[i * 3] = 1.0;
                generatedColors[i * 3 + 1] = 1.0;
                generatedColors[i * 3 + 2] = 1.0;
            }
        }
        return generatedColors;
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 12;
            ref.current.rotation.y -= delta / 18;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} colors={colors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
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
