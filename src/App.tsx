import { useState } from 'react';
import './App.css'

const personData = [
  {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
  },
  {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'
  },
  {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
  },
  {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
  },
  {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
  },
];

function App() {
  const [person, setPerson] = useState(personData);
  return (
    <main>
      <section className="container">
        <h3>{person.length} Birthdays Today</h3>
        {person.map((p) => {
          return (
            <div className="personContainer" key={p.id}>
              <img src={p.image} alt={p.name} />
              <div className="personInfo">
                <h4>{p.name}</h4>
                <p>{p.age} Years</p>
              </div>
            </div>
          );
          })}
          
          <button onClick={() => setPerson([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
