import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components /Header'
import Footer from '@/components /Footer'
import Button from '@/components /Button '
import Counter from '@/components /Counter'
import { useState } from 'react'

export default function Home() {
  const [itemOne, setItemOne] = useState (0);
  const [itemTwo, setItemTwo] = useState ([]);
  const [position, setPosition] = useState ({
    x: 0,
    y: 0
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
      <Button/>
      <Button title='Welcome' color="red"/>

      <button onClick={() => {
        setItemOne (itemOne + 1);
        console.log(itemOne);
      }}>Button 1 Number</button>

      <button onClick={() => {
        setItemTwo ([...itemTwo, "testing"]);
        console.log(itemTwo);
      }}>Button 2 Array</button>

      <Counter/>
      <div
          onPointerMove={e => { 
            setPosition({
              x: e.clientX,
              y: e.clientY
              //way of measuring where the mouse at a given point o ftime on the screen
            })
            }}
          style={{
            position: 'relative',
            width: '100vh',
            heigth: '50vh'
          }}>
          <div 
          style={{
            position: 'absolute',
            backgroundColor: "red",
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y})`,
            left: 0,
            top: -400,
            width:20,
            height: 20
          }}
        />
      </div>

      </main>
      <Footer/>
    </>
  )
}
