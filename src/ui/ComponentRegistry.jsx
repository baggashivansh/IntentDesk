import AddExpenseCard from "../components/AddExpenseCard"
import ExpenseTable from "../components/ExpenseTable"
import SummaryCards from "../components/SummaryCards"
import HelpCard from "../components/HelpCard"

export const components = [
  {
    name: "AddExpenseCard",
    description: "Use when the user wants to add or log an expense",
    component: AddExpenseCard,
    props: {}
  },
  {
    name: "ExpenseTable",
    description: "Use when the user wants to view expenses",
    component: ExpenseTable,
    props: {}
  },
  {
    name: "SummaryCards",
    description: "Use when the user wants spending summaries",
    component: SummaryCards,
    props: {}
  },
  {
    name: "HelpCard",
    description: "Use when the user needs help or onboarding",
    component: HelpCard,
    props: {}
  }
]
