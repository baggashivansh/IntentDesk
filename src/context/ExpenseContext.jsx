import React, { createContext, useContext, useState } from "react"

const ExpenseContext = createContext()

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])

  const addExpense = expense => {
    setExpenses(prev => [...prev, expense])
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export const useExpense = () => useContext(ExpenseContext)
