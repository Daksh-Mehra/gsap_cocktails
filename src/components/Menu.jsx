import React from 'react'
import { sliderLists } from '../../constants'
import { useState } from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menu = () => {
    const contentref = useRef();

    const [currentindex, setcurrentindex] = useState(0);


    useGSAP(()=>{
        gsap.fromTo("#title",{opacity:0},{opacity:1,duration:1})
        gsap.fromTo(".cocktail img",{opacity:0,xPercent:-100},{opacity:1,xPercent:0,duration:1,ease:"power1.inOut"})
    },[currentindex])
        gsap.fromTo(".details h2",{opacity:0,yPercent:100},{opacity:1,yPercent:0,duration:1,ease:"power1.inOut"})
        gsap.fromTo(".details p",{opacity:0,yPercent:100},{opacity:1,yPercent:0,duration:1,ease:"power1.inOut",delay:0.2})

    const gotoslide=(index)=>{

        const newindex=(index+sliderLists.length)%sliderLists.length;
        // const newindex=index;
        setcurrentindex(newindex);
    }

    const getcocktailat=(indexoffset)=>{
        return sliderLists[(currentindex+indexoffset+sliderLists.length)%sliderLists.length];
    }

    const currentcocktial=getcocktailat(0);
    const prevcocktial=getcocktailat(-1);
    const nextcocktial=getcocktailat(1);

  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

        <h2 id='menu-heading' className='sr-only'>
            Cocktail Menu
        </h2>

        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {sliderLists.map((cocktail,index)=>{
                const isActive=index===currentindex;


                return(
                    <button key={cocktail.id} className={isActive?`text-white border-white`:`text-white/50 border-white/50`} onClick={()=>{gotoslide(index)}}>
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>

        <div className='content'>
            <div className='arrows'>
                <button className='text-left' onClick={()=>{gotoslide(currentindex-1)}}>
                    <span>{prevcocktial.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden='true' />
                </button>
                <button className='text-left' onClick={()=>{gotoslide(currentindex+1)}}>
                    <span>{nextcocktial.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden='true' />
                </button>
            </div>

            <div className='cocktail'>
                <img src={currentcocktial.image} className='object-contain' alt={currentcocktial.name} aria-hidden='true' />
            </div>

            <div className='recipe'>
                <div ref={contentref} className='info'>
                    <p>Recipe for:</p>
                    <p id='title'>
                        {currentcocktial.name}
                    </p>
                </div>

                <div className='details'>
                    <h2>{currentcocktial.title}</h2>
                    <p>{currentcocktial.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu