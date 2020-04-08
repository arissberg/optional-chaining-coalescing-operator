import "normalize.css";
import "./styles.css";

import people from "./people";

const container = document.querySelectorAll(".container")[0];

people.forEach(person => {
  const name = `${person?.firstName ?? "John"} ${person?.lastName ?? "Doe"}`;
  const weight = person?.stats?.weight ? person.stats.weight + 'lbs' : undefined;

  container.innerHTML += `
  <div class="card ${person?.gender}">
    <div class="avatar">
      <img src="https://api.adorable.io/avatars/90/${name}@adorable.io.png" alt="${name}" />
    </div>
    <h3>${name}</h3>
    
    <p>🎂 ${person?.stats?.age ?? 'Unknown'}</p>
    <p>⚖ ${weight ?? 'Unknown'}</p>
  </div>
  `;
});
