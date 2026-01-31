# IntentDesk

IntentDesk is a generative UI workspace where users describe what they want to do in plain English, and the interface adapts dynamically based on user intent.

This project is built for **The UI Strikes Back** hackathon and focuses on demonstrating intent driven interfaces using Generative UI concepts.

## Problem

Most applications require users to learn the interface before they can be productive.
Menus, tabs, and predefined workflows assume prior knowledge and create unnecessary friction.

## Idea

IntentDesk flips the interaction model.

Users express intent in natural language.
The system decides which interface to present.

There is no fixed dashboard or static navigation.
The UI itself is the response to user intent.

## How It Works

1. The user enters a natural language request  
2. The intent is interpreted and mapped to a UI state  
3. The most relevant UI component is selected  
4. The component is rendered dynamically  

Different intents can produce completely different interfaces from the same input field.

## Example Intents

- “Add an expense” → Expense input form  
- “Show my expenses” → Tabular view  
- “Summarize my spending” → Summary cards  
- “I am new, help me” → Guidance interface  

## Registered UI Components (Planned)

- AddExpenseCard  
- ExpenseTable  
- SummaryCards  
- HelpCard  

## Tech Stack

- React  
- Tambo Generative UI SDK  
- JavaScript  

## Scope

This is a frontend focused project using mock data.
There is no backend or persistent storage.
The goal is to demonstrate intent to UI mapping and adaptive interfaces, not feature completeness.

## Hackathon Context

Built for **The UI Strikes Back** hackathon.
The project intentionally prioritizes clarity, simplicity, and Generative UI concepts over feature depth.

## Status

Project setup in progress.
Core intent mapping and dynamic rendering to be implemented.

Built by Shivansh Bagga