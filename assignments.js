const url = 'https://raw.githubusercontent.com/madihill07/wdd230/main/assignments.json';

const cards = document.querySelector('#cards');

async function geAssignmentDatat(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayAssignments(data.assignments); 
  }
  
  getAssignmentData(url);

  const displayAssignments = (assignments) => {
    assignments.forEach((assignment) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let week = document.createElement('h2'); // fill in the blank
      let assignment1 = document.createElement('p');
      let assignment2 = document.createElement('p');
      let assignment3 = document.createElement('p');
      let assignment4 = document.createElement('p');
      let assignment5 = document.createElement('p');

  
      // Append the section(card) with the created elements
      card.appendChild(week); //fill in the blank
      card.appendChild(assignment1);
      card.appendChild(assignment2);
      card.appendChild(assignment3);
      card.appendChild(assignment4);
      card.appendChild(assignment5);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }