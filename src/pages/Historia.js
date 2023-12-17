/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { RoundedBox, ScrollControls, Scroll, Environment, Sparkles, Backdrop, Float, Ring } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Candies } from '../components/Candies';
import { Header } from "../components/Header";

const Historia = () => {
    return (
        <div>
            <Header />
            <div className='historypage'>

                <Canvas shadows>
                    <color attach="background" args={['#f6f6f4']} />
                    <ambientLight intensity={0.5} />
                    <pointLight intensity={10} position={[5, 5, 5]} angle={1.3} penumbra={1} castShadow shadow-bias={-0.0001} />

                    <Environment
                        preset='warehouse'
                    />


                    <ScrollControls pages={6} damping={0.1}>
                        <Candies scale={30} position={[0, -.5, 0]} />
                        <Scroll>
                        </Scroll>

                        <Scroll html style={{ width: '100%' }}>
                            <h1 className='title' style={{ color: '#cdcbca', position: 'absolute', top: `65vh`, left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>PHANTOM</h1>

                            <div className='row' style={{ position: 'absolute', top: `132vh` }}>
                                <div className='col' style={{ width: "540px" }}>
                                    <h2>Be a Man of the Future.</h2>
                                    <p style={{ maxWidth: '400px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
                                    <button>Read more</button>
                                </div>
                            </div>

                            <div className='row' style={{ position: 'absolute', top: `230vh` }}>
                                <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
                                    <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
                                    <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
                                    <button>Read more</button>
                                </div>
                            </div>

                            <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of Grooming</h2>

                            <button style={{ position: 'absolute', top: `590vh`, left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </div>
        </div>
    );
}

export default Historia;