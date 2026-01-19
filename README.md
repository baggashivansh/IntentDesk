# IntentDesk

**IntentDesk** is a generative UI workspace where users describe what they want to do in plain English, and the interface dynamically adapts to their intent.

Instead of navigating menus or learning workflows, users simply express intent — the UI decides what to show.

Built for **The UI Strikes Back** hackathon using **Tambo’s Generative UI SDK for React**.

---

## The Problem

Most applications force users to learn the interface first.

Menus, tabs, and workflows assume users already know:
- where things are
- what actions are possible
- how to move step by step

This creates unnecessary friction.

---

## The Idea

IntentDesk flips the model.

The user does not learn the app.  
The app learns the user’s intent.

Users type what they want to do, and the UI reshapes itself into the most relevant interface.

No fixed dashboard.  
No static navigation.  
The UI is the response.

---

## How It Works

1. The user enters a natural language request  
2. The AI interprets the intent  
3. Tambo selects the most appropriate UI component  
4. That component is rendered instantly  

The same input field can produce completely different interfaces.

---

## Example Intents

- “I want to add an expense” → Expense form appears  
- “Show my expenses” → Table view appears  
- “Summarize my spending” → Summary cards and chart appear  
- “I’m new, help me” → Guidance UI appears  

---

## Registered UI Components

- **AddExpenseCard** – simple expense input form  
- **ExpenseTable** – tabular view of expenses  
- **SummaryCards** – high-level spending summary  
- **HelpCard** – onboarding and guidance  

All components are registered with Tambo and rendered dynamically based on user intent.

---

## Why Generative UI

Traditional UIs are static and force users to adapt.

Generative UI allows interfaces to:
- respond to intent
- reduce cognitive load
- adapt in real time

Tambo enables this by letting AI decide *which UI* to render, not just *what text* to reply with.

---

## Tech Stack

- React  
- Tambo Generative UI SDK  
- JavaScript  
- Mock data (no backend)

---

## Hackathon Focus

This project is intentionally minimal to emphasize:
- clear intent → UI mapping  
- best use of Generative UI  
- simplicity and UX clarity  

The goal is not feature depth, but demonstrating adaptive interfaces.

---

## Team

Made with ♥️ by **Shivansh Bagga**
