'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// Create procedural wing texture with vein details
function createWingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }
  
  // Base transparent with gradient
  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, 'rgba(200, 230, 255, 0.4)');
  gradient.addColorStop(0.5, 'rgba(150, 200, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(100, 150, 200, 0.2)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);
  
  // Draw detailed veins with varying thickness
  for (let i = 0; i < 30; i++) {
    const y = Math.random() * 512;
    const x = 256 + (Math.random() - 0.5) * 100;
    const length = 40 + Math.random() * 60;
    const angle = (Math.random() - 0.5) * 1.2;
    const thickness = 1 + Math.random() * 2;
    
    ctx.strokeStyle = `rgba(80, 120, 180, ${0.4 + Math.random() * 0.4})`;
    ctx.lineWidth = thickness;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    ctx.stroke();
    
    // Sub-branches for detail
    const subLength = length * 0.4;
    ctx.lineWidth = thickness * 0.5;
    for (let j = 0; j < 2; j++) {
      const subAngle = angle + (Math.random() - 0.5) * 0.8;
      ctx.beginPath();
      ctx.moveTo(x + Math.cos(angle) * length * 0.6, y + Math.sin(angle) * length * 0.6);
      ctx.lineTo(
        x + Math.cos(angle) * length * 0.6 + Math.cos(subAngle) * subLength,
        y + Math.sin(angle) * length * 0.6 + Math.sin(subAngle) * subLength
      );
      ctx.stroke();
    }
  }
  
  // Add cell-like patterns for more realistic wing look
  ctx.strokeStyle = 'rgba(100, 150, 200, 0.15)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const size = 5 + Math.random() * 10;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size * 0.5, y + size * 0.866);
    ctx.closePath();
    ctx.stroke();
  }
  
  // Add iridescence shimmer
  const shimmer = ctx.createLinearGradient(0, 0, 512, 512);
  shimmer.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
  shimmer.addColorStop(0.3, 'rgba(200, 230, 255, 0.15)');
  shimmer.addColorStop(0.7, 'rgba(150, 200, 255, 0.1)');
  shimmer.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
  ctx.fillStyle = shimmer;
  ctx.fillRect(0, 0, 512, 512);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Create body texture with fuzz effect
function createBodyTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }
  
  // Base golden yellow with gradient
  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, '#FFD700');
  gradient.addColorStop(0.5, '#FFC700');
  gradient.addColorStop(1, '#FFB700');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);
  
  // Add detailed fuzz/hair texture for drawn look
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const length = 1 + Math.random() * 5;
    const angle = Math.random() * Math.PI * 2;
    
    const shade = 0.2 + Math.random() * 0.4;
    ctx.strokeStyle = `rgba(${200 + Math.random() * 55}, ${150 + Math.random() * 50}, 0, ${shade})`;
    ctx.lineWidth = 0.3 + Math.random() * 0.5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    ctx.stroke();
  }
  
  // Add shadow/highlight strokes for drawn effect
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const size = 10 + Math.random() * 30;
    
    // Shadow
    ctx.strokeStyle = 'rgba(180, 120, 0, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x + 3, y + 3, size, 0, Math.PI * 2);
    ctx.stroke();
    
    // Highlight
    ctx.strokeStyle = 'rgba(255, 255, 200, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x - 2, y - 2, size * 0.8, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Add subtle shading gradient
  const shadeGradient = ctx.createLinearGradient(0, 0, 512, 512);
  shadeGradient.addColorStop(0, 'rgba(255, 255, 200, 0.2)');
  shadeGradient.addColorStop(0.5, 'rgba(255, 200, 0, 0.1)');
  shadeGradient.addColorStop(1, 'rgba(200, 150, 0, 0.2)');
  ctx.fillStyle = shadeGradient;
  ctx.fillRect(0, 0, 512, 512);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Create stripe texture with detail
function createStripeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }
  
  // Base black with gradient
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#1a1a1a');
  gradient.addColorStop(0.5, '#252525');
  gradient.addColorStop(1, '#1a1a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);
  
  // Add drawn-style texture lines
  for (let i = 0; i < 3000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const length = 2 + Math.random() * 8;
    const angle = Math.random() * Math.PI * 2;
    
    const shade = 30 + Math.random() * 40;
    ctx.strokeStyle = `rgba(${shade}, ${shade}, ${shade}, ${0.15 + Math.random() * 0.25})`;
    ctx.lineWidth = 0.5 + Math.random() * 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    ctx.stroke();
  }
  
  // Add shadow strokes for depth
  for (let i = 0; i < 150; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const size = 5 + Math.random() * 20;
    
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x + 2, y + 2, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Add subtle highlight
  const highlight = ctx.createLinearGradient(0, 0, 512, 512);
  highlight.addColorStop(0, 'rgba(60, 60, 60, 0.3)');
  highlight.addColorStop(0.5, 'rgba(80, 80, 80, 0.2)');
  highlight.addColorStop(1, 'rgba(60, 60, 60, 0.3)');
  ctx.fillStyle = highlight;
  ctx.fillRect(0, 0, 512, 512);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function BeeModel({ scrollProgress }: { scrollProgress: number }) {
  const beeRef = useRef<THREE.Group>(null);
  const [isMobile, setIsMobile] = useState(false);
  const obj = useLoader(OBJLoader, '/BEE.OBJ');
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Apply colorful materials with details
  useEffect(() => {
    if (obj) {
      let meshIndex = 0;
      obj.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Apply different colors to different parts
          meshIndex++;
          if (meshIndex % 3 === 0) {
            // Wings: detailed transparent with iridescence
            const wingTexture = createWingTexture();
            child.material = new THREE.MeshPhysicalMaterial({
              color: 0xADD8E6,
              metalness: 0.2,
              roughness: 0.1,
              transparent: true,
              opacity: 0.4,
              side: THREE.DoubleSide,
              map: wingTexture,
              transmission: 0.6,
              thickness: 0.8,
              clearcoat: 1.0,
              clearcoatRoughness: 0.05,
              ior: 1.5,
              reflectivity: 0.9,
            });
          } else if (meshIndex % 3 === 1) {
            // Body: detailed yellow/gold with fuzz texture
            const bodyTexture = createBodyTexture();
            child.material = new THREE.MeshStandardMaterial({
              color: 0xFFD700,
              metalness: 0.7,
              roughness: 0.3,
              side: THREE.DoubleSide,
              map: bodyTexture,
              bumpMap: bodyTexture,
              bumpScale: 0.04,
            });
          } else {
            // Body stripes: detailed black with texture
            const stripeTexture = createStripeTexture();
            child.material = new THREE.MeshStandardMaterial({
              color: 0x1a1a1a,
              metalness: 0.5,
              roughness: 0.4,
              side: THREE.DoubleSide,
              map: stripeTexture,
              bumpMap: stripeTexture,
              bumpScale: 0.05,
            });
          }
        }
      });
      
      // Auto-scale the model to fit in view
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = isMobile ? 1.5 / maxDim : 2.2 / maxDim;
      obj.scale.setScalar(scale);
      
      // Center the model
      const center = box.getCenter(new THREE.Vector3());
      obj.position.sub(center);
      
      // Set initial position to right side
      obj.position.x = 0.5;
    }
  }, [obj]);
  
  useFrame((state) => {
    if (beeRef.current) {
      const time = state.clock.elapsedTime;
      
      // Check if at top of page (no scroll)
      if (scrollProgress < 0.05) {
        // Simple smooth orbit around hero
        const orbitRadius = isMobile ? 1.2 : 2;
        const orbitSpeed = isMobile ? 0.3 : 0.5;
        const orbitAngle = time * orbitSpeed;
        
        beeRef.current.position.x = Math.cos(orbitAngle) * orbitRadius;
        beeRef.current.position.z = Math.sin(orbitAngle) * orbitRadius;
        beeRef.current.position.y = Math.sin(time * 1) * 0.2 + (isMobile ? 0.3 : 0.5);
        
        // Rotate bee to face direction of movement
        beeRef.current.rotation.y = -orbitAngle + Math.PI / 2;
        
        // Scale for depth effect (larger when closer to camera)
        const depthScale = isMobile ? 1.0 + Math.sin(orbitAngle) * 0.1 : 1.1 + Math.sin(orbitAngle) * 0.2;
        beeRef.current.scale.setScalar(depthScale);
        
        // Wing flapping
        beeRef.current.rotation.z = Math.sin(time * 10) * 0.15;
        beeRef.current.rotation.x = Math.sin(time * 8) * 0.08;
      } else {
        // Simple scroll-based side-to-side movement
        const scrollX = Math.sin(time * 1.5) * (isMobile ? 1.2 : 2);
        const targetScale = isMobile ? 0.7 + Math.sin(time * 1) * 0.2 : 0.9 + Math.sin(time * 1) * 0.3;
        const targetZ = Math.cos(time * 1) * (isMobile ? 0.3 : 0.5);
        
        // Apply positions
        beeRef.current.position.x = scrollX;
        beeRef.current.position.y = Math.sin(time * 2) * 0.15;
        beeRef.current.position.z = targetZ;
        
        // Smooth scale transition
        beeRef.current.scale.setScalar(
          THREE.MathUtils.lerp(beeRef.current.scale.x, targetScale, 0.08)
        );
        
        // Rotate to face movement direction
        beeRef.current.rotation.y = THREE.MathUtils.lerp(
          beeRef.current.rotation.y,
          Math.sin(time * 1.5) * 0.5,
          0.08
        );
        
        // Wing flapping
        beeRef.current.rotation.z = Math.sin(time * 10) * 0.12;
        beeRef.current.rotation.x = Math.sin(time * 8) * 0.08;
      }
      
      // Mouse following effect (reduced on mobile)
      const mouseFactor = isMobile ? 0.05 : 0.15;
      const mouseX = state.mouse.x * mouseFactor;
      const mouseY = state.mouse.y * mouseFactor;
      beeRef.current.rotation.x = THREE.MathUtils.lerp(
        beeRef.current.rotation.x,
        mouseY,
        0.04
      );
    }
  });

  return (
    <group ref={beeRef}>
      <primitive object={obj} />
    </group>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 800;
  const positions = new Float32Array(particlesCount * 3);
  const velocities = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 15;
    positions[i + 1] = (Math.random() - 0.5) * 15;
    positions[i + 2] = (Math.random() - 0.5) * 15;
    
    velocities[i] = (Math.random() - 0.5) * 0.02;
    velocities[i + 1] = (Math.random() - 0.5) * 0.02;
    velocities[i + 2] = (Math.random() - 0.5) * 0.02;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        // Boundary check - wrap around
        if (Math.abs(positions[i]) > 8) positions[i] *= -0.9;
        if (Math.abs(positions[i + 1]) > 8) positions[i + 1] *= -0.9;
        if (Math.abs(positions[i + 2]) > 8) positions[i + 2] *= -0.9;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#FFD700"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.7} color="#FFD700" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#FFA500" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.6}
        penumbra={0.8}
        intensity={0.7}
        color="#FFB347"
        castShadow
      />
      <hemisphereLight
        position={[0, 10, 0]}
        intensity={0.3}
        color="#FFE4B5"
        groundColor="#1a1a1a"
      />
    </>
  );
}

export default function Bee3D({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Lighting />
        <Environment preset="studio" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={5}
        />
        <Float speed={3} rotationIntensity={0.8} floatIntensity={0.8}>
          <BeeModel scrollProgress={scrollProgress} />
        </Float>
        <ParticleField />
        <Sparkles
          count={200}
          scale={15}
          size={4}
          speed={0.6}
          color="#FFD700"
          opacity={0.7}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
