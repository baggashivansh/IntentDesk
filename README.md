# IntentDesk

IntentDesk is an intent driven generative UI workspace where users describe what they want to do in plain English and the interface adapts dynamically based on that intent.

Instead of navigating menus or dashboards users express intent and the UI becomes the response.

This project is built for The UI Strikes Back hackathon and demonstrates intent based interfaces using Generative UI concepts with the Tambo SDK.

## Problem

Most applications require users to learn the interface before they can be productive.

Menus tabs and predefined workflows assume prior knowledge and introduce unnecessary friction. Users must adapt to the UI rather than the UI adapting to the user.

## Idea

IntentDesk flips the interaction model.

Users express intent in natural language.  
The interface adapts dynamically based on that intent.

There is no fixed dashboard and no static navigation.  
The UI itself is generated as a response to user intent.

## How It Works

The user enters a natural language request  
The intent is interpreted  
The intent is mapped to a UI state  
The most relevant UI component is selected  
The component is rendered dynamically  

Different intents can produce completely different interfaces from the same input field.

## Example Intents

Add an expense  
Renders an expense input form

Show my expenses  
Renders a tabular view of expenses

Summarize my spending  
Renders summary cards and insights

I am new help me  
Renders a guidance and onboarding interface

## Registered UI Components

AddExpenseCard  
ExpenseTable  
SummaryCards  
HelpCard  

Each component represents a distinct interface shape rather than a simple view toggle.

## Tech Stack

React  
Tambo Generative UI SDK  
JavaScript  

## Scope and Limitations

This is a frontend focused project using mock data.

There is no backend and no persistent storage.  
The goal is to demonstrate intent to UI mapping and adaptive interfaces not feature completeness.

## Application Structure

intentdesk
|
|-- public
|   |-- index.html
|
|-- src
|   |
|   |-- components
|   |   |-- AddExpenseCard.jsx
|   |   |-- ExpenseTable.jsx
|   |   |-- SummaryCards.jsx
|   |   |-- HelpCard.jsx
|   |
|   |-- intent
|   |   |-- intentParser.js
|   |   |-- intentMapper.js
|   |   |-- intentConfig.js
|   |
|   |-- ui
|   |   |-- GenerativeRenderer.jsx
|   |   |-- ComponentRegistry.js
|   |
|   |-- data
|   |   |-- mockExpenses.js
|   |
|   |-- App.jsx
|   |-- main.jsx
|
|-- package.json
|-- README.md

## Key Concepts Demonstrated

Intent driven interaction  
Dynamic UI composition  
Generative UI using registered components  
Single input multiple interface outcomes  

## Hackathon Context

Built for The UI Strikes Back hackathon.

The project prioritizes clarity simplicity and Generative UI principles over feature depth.

## Status

Project setup in progress.  
Core intent mapping and dynamic rendering to be implemented.

## Author

Built by Shivansh Bagga