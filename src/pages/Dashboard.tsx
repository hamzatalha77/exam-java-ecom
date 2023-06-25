import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { articles as articleData } from '../data/database'

const Dashboard = () => {
  const [articles, setArticles] = useState(articleData)

  const deleteHandler = (id: any) => {
    if (window.confirm('Are you sure?')) {
      const newArticles = articles.filter((article) => article._id !== id)
      setArticles(newArticles)
    }
  }
  return (
    <div className="container mx-auto mt-20 px-60">
      <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
        Gestion des articles
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2">
            <div className="relative w-60 flex">
              <Link
                to="/addarticle"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Ajouter Nouvel article
              </Link>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Le Nom d'article
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Prix
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Modifier
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Supprimer
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {articles.map((article) => (
                    <tr key={article._id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {article._id}
                      </td>
                      <td className="rounded-full h-12 w-12  object-cover ">
                        <img src={article.image} alt={article.name} />
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {article.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {article.prix}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <Link
                          to={`/article/${article._id}/edit`}
                          className="text-green-500 hover:text-green-700"
                        >
                          Modifier
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => deleteHandler(article._id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
