import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import Message from '../components/Message'
import '../App.css'
import { RootState } from '../store'

const CartScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state: RootState) => state.cart)
  const { cartItems } = cart

  return (
    <div>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        {cartItems.length === 0 ? (
          <Message />
        ) : (
          <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item: any) => (
                <div
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  key={item._id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-lg sm:w-40"
                  />

                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        <Link to={`/article/${item._id}`}>{item.name}</Link>
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">{item.prix}</p>
                    </div>
                    <div className="trash">
                      <button>
                        <FaTrash />
                      </button>
                    </div>

                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <select
                        id="quantity"
                        value={item.qty}
                        onChange={(e) => {}}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {Array.from(Array(item.countInStock).keys()).map(
                          (x) => (
                            <option value={x + 1} key={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">
                  (
                  {cartItems.reduce(
                    (acc: number, item: any) => acc + item.qty,
                    0
                  )}
                  )Items
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$0 USD</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    $
                    {cartItems
                      .reduce(
                        (acc: number, item: any) => acc + item.qty * item.prix,
                        0
                      )
                      .toFixed(2)}
                    USD
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartScreen
