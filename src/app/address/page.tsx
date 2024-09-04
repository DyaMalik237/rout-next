import React from "react"

const page = () => {
    return (
        <div>address page<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-45 md:w-48 md:rounded-none rounded-full md:auto" src="/road.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              I am from RYK.Address is Manthar Road ghosia colony pull Nehr Kinara Rahim Yar Khan.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
             Diya malik
              </div>
            <div className="text-slate-700 dark:text-slate-500">
                student of Ai course
              </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page