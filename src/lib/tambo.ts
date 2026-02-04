import type { TamboComponent } from "@tambo-ai/react"
import { z } from "zod"
import AddExpenseCard from "../components/AddExpenseCard"
import ExpenseTable from "../components/ExpenseTable"
import SummaryCards from "../components/SummaryCards"
import HelpCard from "../components/HelpCard"

export const components: TamboComponent[] = [
  {
    name: "AddExpenseCard",
    description: "Add a new expense or log spending",
    component: AddExpenseCard,
    propsSchema: z.object({
      amount: z.number().optional(),
      category: z.string().optional(),
      date: z.string().optional(),
      note: z.string().optional()
    })
  },
  {
    name: "ExpenseTable",
    description: "Display list of expenses",
    component: ExpenseTable,
    propsSchema: z.object({})
  },
  {
    name: "SummaryCards",
    description: "Show spending summary or insights",
    component: SummaryCards,
    propsSchema: z.object({})
  },
  {
    name: "HelpCard",
    description: "Provide onboarding help",
    component: HelpCard,
    propsSchema: z.object({})
  }
]
