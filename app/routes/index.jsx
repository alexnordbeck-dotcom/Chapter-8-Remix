import { useState } from 'react';
import { Link } from 'react-router-dom';

const concepts = [
  { id: 'globalization', title: 'Globalization', color: '#FF5733' },
  { id: 'porters-diamond', title: "Porter's Diamond", color: '#33FF57' },
  { id: 'global-strategies', title: 'Global Strategies', color: '#3357FF' },
  { id: 'entry-modes', title: 'Entry Modes', color: '#F3FF33' },
  { id: 'strategic-alliances', title: 'Strategic Alliances', color: '#FF33B1' },
];

export default function Index() {
  const [selectedConcept, setSelectedConcept] = useState(null);

  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
  };

  return (
    <div>
      <h1>Chapter 8: Strategy in the Global Environment</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {concepts.map((concept) => (
          <div key={concept.id} onClick={() => handleConceptClick(concept)} style={{
            backgroundColor: concept.color,
            padding: '20px',
            margin: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
            flex: '1 0 30%'
          }}>
            <h2>{concept.title}</h2>
          </div>
        ))}
      </div>
      {selectedConcept && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #000' }}>
          <h2>{selectedConcept.title} Details</h2>
          <p>Content for {selectedConcept.title} will go here.</p>
        </div>
      )}
    </div>
  );
}