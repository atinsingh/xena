import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function HomeHero(){
    const data = useStaticQuery(
        graphql `query  {
            contentfulHomepage {
              heading1
              heading2
              heroImage {
                gatsbyImageData(layout: FIXED, width: 600)
              }
              heroText
              termText {
                raw
              }
            }
          }`
    )
    const img = getImage(data.contentfulHomepage.heroImage)
    return (
        <>
        <div className="mx-auto bg-gray-100">
        <main className="lg:relative">
            <div className="mx-auto max-w-7xl 2xl:container w-full pt-16 pb-20 text-center lg:py-40 lg:text-left">
            <div className="lg:w-1/2 sm:px-16 xl:pr-16">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block underline decoration-wavy decoration-blue-800 underline-offset-8">{data.contentfulHomepage.heading1}</span>{' '}
                <span className="block py-8 uppercase text-4xl text-blue-800">{data.contentfulHomepage.heading2}</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-md leading-3 text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
                {data.contentfulHomepage.heroText}
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-10 sm:mt-8">
                        <form action="#"  className="sm:max-w-xl sm:mx-auto lg:mx-0">
                            <div className="sm:flex">
                            <div className="flex-1 min-w-0">
                                <label htmlFor="email" className="sr-only">
                                Email address
                                </label>
                                <input
                                id="email"
                                dot={true}
                                type="text"
                                name="email"
                            
                                placeholder="Enter your email"
                                className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                                />
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button
                                
                                type="submit"
                                className="block w-full px-4 py-3 font-medium text-white bg-blue-800 rounded-md shadow hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                                >
                                Start free trial
                                </button>
                            </div>
                            </div>
                            <p className="mt-3 text-sm text-gray-700 sm:mt-4">
                            Start your free 7-days trial classes, no commitment required. By providing your email, you agree to
                            our{' '}
                            <a href="/company/terms" className="font-bold text-gray-500">
                                terms or service
                            </a>
                            .
                            </p>
                        </form>
                        </div>
                </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 right-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        
                <GatsbyImage
                    image= {img}
                    alt="Home Hero"
                    imgClassName="absolute right-0 inset-0 w-full h-full object-contain"
                    width={600}
                    height={750}

                />
             </div>
            
            </div>
         
      </main>
        </div>
        </>
    )
}