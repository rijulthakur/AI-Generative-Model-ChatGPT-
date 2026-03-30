# AI Generative Model — ChatGPT Implementation

## Overview
A full-stack conversational AI application that integrates a GPT-based 
language model API to simulate human-like text generation. Built with 
a React.js client and Node.js/Express server, the system processes 
natural language input and returns contextually coherent responses in 
real time.

## Architecture
- **Client:** React.js — handles user interface and conversation state
- **Server:** Node.js with Express — manages API routing and request 
  handling
- **AI Layer:** GPT-based generative model API for natural language 
  processing and response generation

## Key Concepts Implemented

### Generative AI
Generative AI refers to models that learn statistical patterns from 
large text corpora and generate new text by predicting the most 
probable next token given a context. This project interfaces with a 
GPT-based model which uses transformer architecture — a neural network 
design based on self-attention mechanisms that weigh the relevance of 
each word in a sequence relative to all others.

### Natural Language Processing (NLP)
NLP is the field of AI concerned with enabling machines to understand 
and generate human language. This project applies NLP through prompt 
construction, context management across conversation turns, and 
response parsing.

### Client-Server Architecture
The application follows a REST API design where the React frontend 
sends HTTP POST requests containing user prompts to the Express backend, 
which forwards them to the GPT API and streams responses back to the 
client — decoupling the UI from the AI inference layer.

### Prompt Engineering
The system structures user inputs as formatted prompts to guide the 
model toward coherent, human-like responses — an applied technique 
in working with large language models (LLMs).

## Tech Stack
- JavaScript (ES6+)
- React.js
- Node.js / Express
- GPT-based REST API
- CSS

## Author
**Rijul Thakur** — Lead Developer & Maintainer  
B.E. Computer Science and Engineering, Chitkara University (2019–2023)
