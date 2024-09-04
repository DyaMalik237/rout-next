import React from "react"

const page = () => {
    return (
        <div>about us page<figure className="md:flex bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-600">
        <img className="w-24 h-24 md:rounded-full rounded-full md:h-auto" src="/girl.webp" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center space-y-40">
          <blockquote>
            <p className="text-lg font-medium">
              "My name is diya malikI am from Rahim Yar Khan.I am a student of Artificial intelligence.I am also a student of
              ICS.I am interested in this course.Iwill try to achieve this goul inshalah.My Father is a business man.I also have a great iterest in business.
        
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page