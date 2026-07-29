import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({slug,img, view, category, time, date, title, excerpt, avater, name, role }) {
  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <>

      <article
        className={`group card transition-transform duration-300 hover:-translate-y-2 border rounded-3xl overflow-hidden
`}
      >
     <Link to={`/blog/${slug}`} className={`h-full
${view === "list"
              ? "flex flex-col md:flex-row h-full"
              : "block"}
`}
        >
          <div
            className={`relative overflow-hidden
  ${view === "list"
                ? "relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden"
                : "h-52"
              }`}
          >
            <img alt="إتقان تصوير الساعة الذهبية: دليل شامل" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={img} />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {view === "grid" && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                  {category}
                </span>
              </div>
            )}
          </div>
          <div
            className={`p-6
${view === "list"
                ? "flex-1 flex flex-col justify-between"
                : ""}
`}
          >
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">

              {view === "list" && (
                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                  {category}
                </span>
              )}              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {time}
              </span>
              <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
              <span> {formattedDate} </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">{title}</h3>
            <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed"> {excerpt}           </p>
            <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
              <div className="flex items-center gap-3">
                <img alt="name of author" className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src={avater} />
                <div>
                  <p className="text-sm font-medium text-white">{name} </p>
                  <p className="text-xs text-neutral-500"> {role}</p>
                </div>
              </div>
              {view === "grid" ? (
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <svg
                    className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ) : (
                <span className="hidden md:block text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">
                  اقرأ المقال ←
                </span>
              )}
            </div>
          </div>
        </Link>
      </article>

    </>
  )
}
