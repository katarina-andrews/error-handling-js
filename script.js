// Part 1: Understanding try, catch, and finally

function divideNumbers(a, b) {
  try {
    const divide = a / b;
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    console.log(divide);
  } catch (error) {
    console.error("Division by zero is not allowed.", error.message);
  } finally {
    console.log("Execution complete.");
  }
}

divideNumbers(4, 2);
divideNumbers(4, 0);

// Part 2: Error Handling in Asynchronous Code

async function fetchData() {
 try {
    const response = await fetch(
      "https://httpstat.us/500"
    );
    if (!response.ok) {
      throw new Error(`Network error. Status: , ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("ERROR Fetching.", error.message);
  } finally {
    console.log("Fetch attempt finished.");
  }
}

fetchData()

// Part 3: Debugging JavaScript Errors

function greet(name) {
  if (name === undefined) {
    console.log("Hello, Guest!");
  } else {
    console.log("Hello, " + name + "!");
  }
}

greet();
greet("jon");


