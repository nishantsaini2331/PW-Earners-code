import React from 'react'
import { Product } from './Product'

let books = [
    {
        title : "book1",
        price : 13244123
    }
]

function Body() {
  return (
    <div>
        {/* {
            books.map(({title , price}) => {
                return <Product title={title} price={price}/>
            })
        } */}
    </div>
  )
}

export default Body