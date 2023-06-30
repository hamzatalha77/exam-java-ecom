import { useState } from 'react'
import { articles } from '../data/database'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const ArticleScreen = () => {
  const { id: articleId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  const parsedArticleId = articleId ? parseInt(articleId) : undefined

  const article = parsedArticleId
    ? articles.find((a) => a._id === parsedArticleId)
    : undefined

  if (!article) {
    return <div>Loading...</div>
  }
  const stockOptions = []
  for (let i = 1; i <= article.countInStock; i++) {
    stockOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }
  const addToCartHandler = () => {
    dispatch(addToCart({ ...article, qty }))
    navigate('/cart')
  }
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4 pt-40 ml-12">
        <img
          src={article.image}
          alt="something"
          className="h-auto max-w-lg aspect-square object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">
            {article.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
          </span>
          <h1 className="text-3xl font-bold">{article.name}</h1>
        </div>
        <p className="text-gray-700">{article.description}</p>
        <h6 className="text-2xl font-semibold">$ {article.prix}</h6>
        <div className="flex flex-row items-center gap-12">
          {article.countInStock > 0 && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an quantity
              </label>
              <select
                id="quantity"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {stockOptions}
              </select>
            </div>
          )}
          <button
            className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
            disabled={article.countInStock === 0}
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleScreen
