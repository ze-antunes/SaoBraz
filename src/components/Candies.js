import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import modelUrl from '../assets/models/candies-transformed.glb'

export function Candies(props) {
  const { nodes, materials } = useGLTF(modelUrl)

  const candies = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
    console.log(scroll.offset)
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" }
    });

    tl.current
      .to(candies.current.rotation, { y: -1 }, 2)
      .to(candies.current.position, { x: 1 }, 2)

      .to(candies.current.rotation, { y: 1 }, 6)
      .to(candies.current.position, { x: -1 }, 6)

      .to(candies.current.rotation, { y: 0 }, 11)
      .to(candies.current.rotation, { x: 1 }, 11)
      .to(candies.current.position, { x: 0 }, 11)

      .to(candies.current.rotation, { y: 0 }, 13)
      .to(candies.current.rotation, { x: -1 }, 13)
      .to(candies.current.position, { x: 0 }, 13)

      .to(candies.current.rotation, { y: 0 }, 16)
      .to(candies.current.rotation, { x: 0 }, 16)
      .to(candies.current.position, { x: 0 }, 16)

      .to(candies.current.rotation, { y: 0 }, 20)
      .to(candies.current.rotation, { x: 0 }, 20)
      .to(candies.current.position, { x: 0 }, 20);
  }, []);
  return (
    <group {...props} dispose={null} ref={candies}>
      <mesh geometry={nodes.toffee__golden001.geometry} material={materials['toffee _golden.003']} position={[0.01, 0.03, -0.04]} rotation={[-0.69, -0.27, 0.67]} scale={-1} />
      <mesh geometry={nodes.toffee__golden002.geometry} material={materials['toffee _golden.003']} position={[0, 0, 0.03]} rotation={[0.13, -0.08, 1.7]} scale={-1} />
      <mesh geometry={nodes.toffee__golden003.geometry} material={materials['toffee _golden.003']} position={[0.05, 0.02, 0]} rotation={[-0.66, 0.53, 1.59]} scale={-1} />
      <mesh geometry={nodes.toffee__golden.geometry} material={materials['toffee _golden.003']} position={[-0.06, 0.01, -0.02]} rotation={[-0.26, 0, 1.17]} scale={-1} />
    </group>
  )
}

useGLTF.preload(modelUrl)
