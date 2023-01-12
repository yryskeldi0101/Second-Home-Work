import React from 'react'
import "./ExpenseItem.css"
const ExpenseItem = ({name, year}) => {
    const old = "years old";
  return (
    <div className='elements'>
            <div className='item'>
            <p className='name'>{name}</p>
            <p className='year'> {`( ${year}  ${old} )`}</p>
            </div>
        </div>
  )
}

export default ExpenseItem