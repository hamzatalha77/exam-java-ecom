import React, { useState } from 'react'
import Article from '../components/Article'
import { articles } from '../data/database'
const Home = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <div className="flex justify-center flex-initial">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            id="default-search"
            className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Rechercher Votre Article"
          />
        </div>
        {/* <label htmlFor="">search</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {articles
          .filter((article) => {
            return search.toLowerCase() === ''
              ? article
              : article.name.toLowerCase().includes(search)
          })
          .map((article) => (
            <div key={article._id}>
              <Article item={article} />
            </div>
          ))}
      </section>
    </>
  )
}

export default Home
