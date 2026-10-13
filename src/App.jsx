import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import FlashCard from './components/FlashCard/FlashCard.jsx'

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  const cards = [
    {
      question: 'What is JavaScript?',
      answer:
        'JavaScript is a programming language used to make websites interactive and dynamic. It can also run on servers using environments like Node.js.',
    },
    {
      question: 'What is the difference between `let`, `const`, and `var`?',
      answer:
        '`let` declares a block-scoped variable that can be reassigned. `const` declares a block-scoped variable that cannot be reassigned. `var` is function-scoped (or globally scoped) and can be redeclared.',
    },
    {
      question: 'What are JavaScript data types?',
      answer:
        'JavaScript has primitive types: string, number, bigint, boolean, undefined, symbol, and null. Objects, including arrays and functions, are non-primitive types.',
    },
    {
      question: 'What is a JavaScript function?',
      answer:
        'A function is a reusable block of code that performs a task. It can accept parameters and return a value. Example: `function add(a, b) { return a + b; }`',
    },
    {
      question: 'What is the difference between `==` and `===`?',
      answer:
        '`==` compares values with type conversion when needed. `===` compares values without type conversion, checking both type and value. In most cases, `===` is recommended.',
    },
  ];

  return (
    <>
      <section id="center">
        <h1>Flash Cards</h1>
        <ProgressBar cardIndex={cardIndex} totalCards={cards.length} />
        <FlashCard cards={cards} cardIndex={cardIndex} setCardIndex={setCardIndex} />
      </section>
    </>
  )
}

export default App
