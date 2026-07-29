import React, { useEffect, useState } from 'react'
import data from '../../data/posts.json';
import Card from '../../Card/Card'
import { useSearchParams } from "react-router-dom";

export default function Blog() {


  const list = data.posts;
  const [searchParams] = useSearchParams();

const categoryFromUrl = searchParams.get("category") || "all";
  const [currentPage, setCurrentPages] = useState(1);
  const [view, setView] = useState("grid");
const [categoryTabs, setCategoryTabs] = useState(categoryFromUrl);
  const [search, setSearch] = useState("");
  const postsPerPage = 6;
  const filteredArray = list.filter((item) => {
  const categoryMatch =
    categoryTabs === "all" || item.category === categoryTabs;

  const searchMatch =
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(search.toLowerCase());

  return categoryMatch && searchMatch;
});

  // Pagination
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const currentPosts =
    categoryTabs === "all"
      ? filteredArray.slice(start, end)
      : filteredArray;

  const totalPages = Math.ceil(filteredArray.length / postsPerPage);

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPages(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPages(currentPage - 1);
    }
  }

  function changeCategoryTabs(category) {
    setCategoryTabs(category);
    setCurrentPages(1);
  }
  useEffect(() => {
  setCategoryTabs(categoryFromUrl);
  setCurrentPages(1);
}, [categoryFromUrl]);
  return (
    <>
      <main className="grow pt-20">
        <div className="min-h-screen bg-[#0a0a0a]">
          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="section-label inline-flex items-center gap-2 mb-6 px-4 py-2 border rounded-3xl text-sm ">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                مدونتنا
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                استكشف <span className="gradient-text">مقالاتنا</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
            </div>
          </div>

          <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="relative w-full md:w-80">
                  <input placeholder="ابحث في المقالات..." className="input-dark w-full px-5 py-3 pr-12 rounded-xl text-olive-100" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => changeCategoryTabs("all")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${categoryTabs === "all"
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                      }`}
                  >
                    جميع المقالات
                  </button>
                  <button
                    onClick={() => changeCategoryTabs("إضاءة")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${categoryTabs === "إضاءة"
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                      }`}
                  >
                    إضاءة
                  </button>
                  <button
                    onClick={() => changeCategoryTabs("بورتريه")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${categoryTabs === "بورتريه"
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                      }`}
                  >بورتريه</button>
                  <button
                    onClick={() => changeCategoryTabs("مناظر طبيعية")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${categoryTabs === "مناظر طبيعية"
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                      }`}
                  >مناظر طبيعية</button>
                  <button
                    onClick={() => changeCategoryTabs("تقنيات")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${categoryTabs === "تقنيات"
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                      }`}
                  >تقنيات</button>
                  <button
                    onClick={() => changeCategoryTabs("معدات")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${categoryTabs === "معدات"
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                      }`}
                  >معدات</button>
                </div>

              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">

            <div className="mb-8 flex items-center justify-between">
              <p className="text-neutral-400">عرض <span className="font-bold text-white">{list.length}</span> مقالات</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                  <button
                    onClick={() => setView("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${view === "grid"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                      }`}
                    title="عرض شبكي"
                  >                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${view === "list"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                      }`}
                    title="عرض قائمة"
                  >                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
  <div
    className={
      view === "grid"
        ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        : "flex flex-col gap-6 w-full"
    }
  >
    {filteredArray.length > 0 ? (
      currentPosts.map((products) => (
        <Card
          key={products.id}
          id={products.id}
           slug={products.slug}
          view={view}
          img={products.image}
          category={products.category}
          time={products.readTime}
          date={products.date}
          title={products.title}
          excerpt={products.excerpt}
          avater={products.author.avatar}
          name={products.author.name}
          role={products.author.role}
        />
      ))
    ) : (
      <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh] text-center py-20 mx-auto">
        <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          لا توجد مقالات
        </h3>

        <p className="text-neutral-400 mb-6">
          حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
        </p>

        <button
          onClick={() => {
            setSearch("");
            setCategoryTabs("all");
            setCurrentPages(1);
          }}
          className="btn-primary bg-orange-600 text-white px-5 py-2.5 rounded-full inline-flex items-center gap-2 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>

          إعادة تعيين الفلاتر
        </button>
      </div>
    )}
  </div>
</div>
          <div className="flex justify-center items-center gap-2 mt-12">
            <button onClick={() => prevPage()} disabled={currentPage === 1} className={`p-3 rounded-xl border transition-all duration-300
${currentPage === 1 ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"}`}>
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div className="flex items-center gap-1">
              <button onClick={() => setCurrentPages(1)} className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === 1 ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                }`}>1</button>
              <button onClick={() => setCurrentPages(2)} className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === 2 ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                }`}>2</button>
              <button onClick={() => setCurrentPages(3)} className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === 3 ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                }`}>3</button>
              <button onClick={() => setCurrentPages(4)} className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === 4 ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                }`}>4</button>
              <button onClick={() => setCurrentPages(5)} className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === 5 ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                }`}>5</button>
            </div>
            <button onClick={() => nextPage()} disabled={currentPage === totalPages} className={`p-3 rounded-xl border transition-all duration-300
${currentPage === totalPages ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed" : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"}`}>
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <p className="text-center text-neutral-500 mt-4 text-sm pb-6">صفحة 1 من 5</p>

        </div>
      </main>

    </>
  )
}
