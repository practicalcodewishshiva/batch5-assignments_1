Part 1: The 3 Important Files {#part-1}

React Project has 3 Main Files


React Project
├── index.html          ← File 1: Starting point
└── src/
    ├── main.jsx       ← File 2: Connector
    └── App.jsx        ← File 3: Your code (Main file)


Simple Understanding


FILE 1: index.html
- Browser first opens this file
- Has empty <div id="root"></div>
- Loads main.jsx

FILE 2: main.jsx
- Connects React to HTML
- Finds root div
- Puts App component inside

FILE 3: App.jsx
- YOUR MAIN CODE HERE
- Write what you want to show
- This is where you work!




 Part 2: How They Connect 

File 1: index.html

html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First React App</title>
  </head>
  <body>
    <!-- Empty div - React will fill this -->
    <div id="root"></div>
    
    <!-- Load React -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


What This Does:
- Creates empty div with `id="root"`
- Loads `main.jsx` file



File 2: main.jsx


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Find root div from index.html
const root = document.getElementById('root');

// Put App component inside root div
ReactDOM.createRoot(root).render(<App />);


What This Does:
- Line 1-3: Import React tools
- Line 6: Find `<div id="root"></div>`
- Line 9: Put `<App />` inside root div



File 3: App.jsx (Your Main File!)


import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;


What This Does:
- Creates a function called `App`
- Returns HTML to show on screen
- Exports so main.jsx can use it



Complete Flow


STEP 1: Browser opens index.html
    ↓
STEP 2: index.html has empty <div id="root"></div>
    ↓
STEP 3: index.html loads main.jsx
    ↓
STEP 4: main.jsx finds root div
    ↓
STEP 5: main.jsx loads App.jsx
    ↓
STEP 6: App.jsx returns <h1>Hello React!</h1>
    ↓
STEP 7: main.jsx puts it inside root div
    ↓
STEP 8: User sees "Hello React!" on screen ✅


Visual:


BEFORE:
<div id="root"></div>  ← Empty

AFTER:
<div id="root">
  <div>
    <h1>Hello React!</h1>  ← App.jsx added this!
  </div>
</div>




 Part 3: App.jsx - Your First Component 

Basic Structure


// PART 1: Import React
import React from 'react';

// PART 2: Create Component (function)
function App() {
  
  // PART 3: Return what to show
  return (
    <div>
      <h1>Your content here</h1>
    </div>
  );
}

// PART 4: Export
export default App;




Example 1: Simple Text


import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>This is my first React app!</p>
    </div>
  );
}

export default App;


Output:

Welcome to React
This is my first React app!




Example 2: With Variable


import React from 'react';

function App() {
  const name = "Ravi";
  
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}

export default App;


Output:

Hello Ravi!
Welcome to React


Note: Use `{variableName}` to show variable value



Example 3: With Multiple Variables


import React from 'react';

function App() {
  const name = "Ravi";
  const age = 25;
  const city = "Hyderabad";
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default App;


Output:

User Profile
Name: Ravi
Age: 25
City: Hyderabad




Example 4: Display Array

jsx
import React from 'react';

function App() {
  const movies = ["Pushpa 2", "Jawan", "Animal"];
  
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <p key={movie}>{movie}</p>
      ))}
    </div>
  );
}

export default App;


Output:

Movie List
Pushpa 2
Jawan
Animal




Example 5: Display Objects

jsx
import React from 'react';

function App() {
  const movies = [
    { id: 1, name: "Pushpa 2", rating: 9 },
    { id: 2, name: "Jawan", rating: 8 },
    { id: 3, name: "Animal", rating: 7 }
  ];
  
  return (
    <div>
      <h1>Now Showing</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.name}</h3>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default App;


Output:

Now Showing

Pushpa 2
Rating: 9

Jawan
Rating: 8

Animal
Rating: 7




 Part 4: Simple Assignment {#part-4}

Assignment: Create Your Movie App

Task: Create `App.jsx` that displays your favorite movies



Starter Code

File: src/App.jsx

jsx
import React from 'react';

function App() {
  
  // TASK 1: Create movies array (10 points)
  // Add 5 movies with: id, name, rating, genre
  const movies = [
    // Your code here
  ];
  
  
  // TASK 2: Return JSX (40 points)
  return (
    <div>
      {/* Add heading "My Favorite Movies" */}
      
      
      {/* Loop through movies and display them */}
      
      
    </div>
  );
}

export default App;




Requirements

1. Movie Data (10 points)

Create array with 5 movies. Each movie should have:
- `id` - Number (1, 2, 3...)
- `name` - String (Movie name)
- `rating` - Number (1-10)
- `genre` - String (Action, Drama, etc.)

Example:
jsx
const movies = [
  { id: 1, name: "Pushpa 2", rating: 9, genre: "Action" },
  // Add 4 more...
];




2. Display Movies (40 points)

Use `.map()` to display all movies. Show:
- Movie name
- Rating
- Genre

Example:
jsx
{movies.map((movie) => (
  <div key={movie.id}>
    <h3>{movie.name}</h3>
    <p>Rating: {movie.rating}</p>
    <p>Genre: {movie.genre}</p>
  </div>
))}




3. Add CSS (30 points)

Create `App.css` and style your app:

css
/* Style container */
.app {
  padding: 20px;
}

/* Style movie cards */
.movie-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
}

/* Add more styles */




4. Add Emojis (20 points)

Add emojis to make it look nice:
- 🎬 for heading
- ⭐ for rating
- 🎭 for genre

Example:
jsx
<h1>🎬 My Favorite Movies</h1>
<p>⭐ Rating: {movie.rating}</p>
<p>🎭 Genre: {movie.genre}</p>




Expected Output


🎬 My Favorite Movies

Pushpa 2
⭐ Rating: 9
🎭 Genre: Action

Jawan
⭐ Rating: 8
🎭 Genre: Action

Animal
⭐ Rating: 7
🎭 Genre: Drama

12th Fail
⭐ Rating: 9
🎭 Genre: Drama

Dunki
⭐ Rating: 8
🎭 Genre: Comedy




Complete Solution

File: src/App.jsx

jsx
import React from 'react';
import './App.css';

function App() {
  const movies = [
    { id: 1, name: "Pushpa 2", rating: 9, genre: "Action" },
    { id: 2, name: "Jawan", rating: 8, genre: "Action" },
    { id: 3, name: "Animal", rating: 7, genre: "Drama" },
    { id: 4, name: "12th Fail", rating: 9, genre: "Drama" },
    { id: 5, name: "Dunki", rating: 8, genre: "Comedy" }
  ];
  
  return (
    <div className="app">
      <h1>🎬 My Favorite Movies</h1>
      
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.name}</h3>
            <p>⭐ Rating: {movie.rating}/10</p>
            <p>🎭 Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;




File: src/App.css

css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 32px;
}

.movie-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.movie-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.movie-card h3 {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 20px;
}

.movie-card p {
  color: #555;
  margin: 5px 0;
  font-size: 16px;
}




How to Run

Step 1: Create React App

bash
npm create vite@latest my-movie-app -- --template react
cd my-movie-app
npm install


Step 2: Replace Files

- Open `src/App.jsx`
- Delete everything
- Copy your code
- Save file

- Create `src/App.css`
- Add your CSS
- Save file

Step 3: Run

bash
npm run dev


Step 4: Open Browser


http://localhost:5173


3 Files

1. index.html
   - Has <div id="root"></div>
   - Loads main.jsx

2. main.jsx
   - Finds root div
   - Renders <App />

3. App.jsx
   - YOUR CODE HERE
   - Returns what to show


App.jsx Structure

jsx
import React from 'react';

function App() {
  // 1. Your data here
  const data = [];
  
  // 2. Return JSX
  return (
    <div>
      {/* Your HTML here */}
    </div>
  );
}

export default App;


Important Rules


✅ Always import React
✅ Function name starts with Capital (App)
✅ Return only ONE parent div
✅ Use {variable} to show data
✅ Use .map() for arrays
✅ Always add key in .map()
✅ Export at end




Common Mistakes


Mistake 1: Multiple parent divs

jsx
// ❌ WRONG
return (
  <h1>Title</h1>
  <p>Text</p>
);

// ✅ CORRECT
return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);


Mistake 2: Forgot curly braces

jsx
// ❌ WRONG
<p>Rating: movie.rating</p>

// ✅ CORRECT
<p>Rating: {movie.rating}</p>


Focus on App.jsx - Your main file!