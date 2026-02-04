# IntentDesk

IntentDesk is an intent driven generative UI workspace where users describe what they want in plain English and the interface adapts dynamically to that intent.

Instead of navigating menus or dashboards, the user simply expresses intent and the interface becomes the response.

This project was built for The UI Strikes Back hackathon to demonstrate adaptive interfaces using generative UI concepts with the Tambo SDK.

## Core Idea

Most applications require users to learn the interface before becoming productive.
IntentDesk reverses that interaction model.

Users express intent in natural language and the interface reshapes itself around that request. The aim is to reduce navigation friction and make interaction conversational rather than menu driven.

## Current Implementation

Conversational input interprets user intent
Relevant UI components render dynamically
Expenses can be added through chat intent or manual form
Summary and table views update from shared application state
Landing screen introduces the workspace before interaction

The project currently uses in memory state without persistence.

## Example Intents

Add an expense
Show my expenses
Summarize my spending

Each intent produces a different interface layout instead of a fixed dashboard.

## Registered Components

AddExpenseCard
ExpenseTable
SummaryCards

These components represent different interface states selected dynamically based on user intent.

## Technology

React
Tambo Generative UI SDK
JavaScript

## Scope

This project focuses on frontend generative UI exploration.
There is no backend persistence yet.
Primary goal is demonstrating intent to UI mapping and adaptive interface behavior.

## Structure Overview

public contains index.html

src contains components context state logic UI rendering and application entry files.

Key areas include conversational UI rendering expense state handling and adaptive component selection.

## What This Demonstrates

Intent driven interaction model
Dynamic UI composition
Generative interface experimentation
Conversational control of application state

## Future Direction

Persistent storage integration
Expanded intent coverage
Improved adaptive UI patterns

## Author

Built by Shivansh Bagga
