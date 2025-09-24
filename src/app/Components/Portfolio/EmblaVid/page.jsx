// 'use client'
// import React, { useCallback, useEffect, useState } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'



// const OPTIONS = { dragFree: true, loop: true }

// const useDotButton = (emblaApi, onButtonClick) => {
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [scrollSnaps, setScrollSnaps] = useState([])

//   const onDotButtonClick = useCallback(
//     (index) => {
//       if (!emblaApi) return
//       emblaApi.scrollTo(index)
//       if (onButtonClick) onButtonClick(emblaApi)
//     },
//     [emblaApi, onButtonClick]
//   )

//   const onInit = useCallback((emblaApi) => {
//     setScrollSnaps(emblaApi.scrollSnapList())
//   }, [])

//   const onSelect = useCallback((emblaApi) => {
//     setSelectedIndex(emblaApi.selectedScrollSnap())
//   }, [])

//   useEffect(() => {
//     if (!emblaApi) return

//     onInit(emblaApi)
//     onSelect(emblaApi)
//     emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
//   }, [emblaApi, onInit, onSelect])

//   return {
//     selectedIndex,
//     scrollSnaps,
//     onDotButtonClick
//   }
// }

// const DotButton = ({ children, ...rest }) => (
//   <button type="button" {...rest}>
//     {children}
//   </button>
// )

// export default function Home({slide}) {
//   const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()])
//    console.log("slide",slide);
//    const SLIDES=slide;
//   const onNavButtonClick = useCallback((emblaApi) => {
//     const autoplay = emblaApi?.plugins()?.autoplay
//     if (!autoplay) return

//     const resetOrStop =
//       autoplay.options.stopOnInteraction === false
//         ? autoplay.reset
//         : autoplay.stop

//     resetOrStop()
//   }, [])

//   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
//     emblaApi,
//     onNavButtonClick
//   )

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {SLIDES.map((src, index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__image-wrapper">
               
//                 <video className="embla__slide__img" src={src} controls
//             alt={`Book Cover ${index + 1}`}
// />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__dots">
//           {scrollSnaps.map((_, index) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={
//                 'embla__dot' +
//                 (index === selectedIndex ? ' embla__dot--selected' : '')
//               }
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




// app/Components/Portfolio/EmblaVid/page.jsx
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const OPTIONS = { dragFree: true, loop: true }

const useDotButton = (emblaApi, onButtonClick) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

const DotButton = ({ children, ...rest }) => (
  <button type="button" {...rest}>
    {children}
  </button>
)

export default function EmblaVidPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()])

  // ✅ Hardcoded slides (can also fetch from an API or database)
  const SLIDES = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4'
  ]

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__image-wrapper">
                <video
                  className="embla__slide__img"
                  src={src}
                  controls
                  alt={`Video ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                'embla__dot' +
                (index === selectedIndex ? ' embla__dot--selected' : '')
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
