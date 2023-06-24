import React, { useState } from 'react'
import Article from '../components/Article'
import { articles } from '../data/database'
const Home = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <label htmlFor="">search</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
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
