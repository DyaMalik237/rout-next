import react from "react"

const page = () => {
    return (
        <div>contac us page<figure className="md: bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-45 md:w-48 rounded-full rounded-full mx-auto" src="/phone.jpg" alt="" width="384" height="300"/>
        <div className="pt-6 md:p-8 text-center space-y-20">
          <blockquote>
            <p className="text-lg font-medium">
               Contact number is 03106518644.My gmail is dyamalik237@gmail.com.”
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