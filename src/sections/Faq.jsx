const FAQS = [
  {
    q: 'What sizes does Lentopan® come in?',
    a: 'A standard 60 × 120 cm sheet, produced in thicknesses from 3 cm to 20 cm depending on the insulation and fire performance the wall needs.',
  },
  {
    q: 'Can it get wet on site before the building is watertight?',
    a: "Yes. Lentopan® is vapour-permeable, isn't damaged by water, and doesn't encourage mould growth — so it can be installed ahead of the building envelope being closed up.",
  },
  {
    q: 'What finishes can go directly onto the board?',
    a: 'Render (with a mesh coat, painted or bare), plasterboard, fibre-cement, and ceramic tiling have all been applied directly to the board face.',
  },
  {
    q: 'How is it fixed together on site?',
    a: 'Boards sit in a light steel frame, bonded to each other with a light bead of PU foam at the joints and fixed to the frame with trapezoidal screws, spaced no more than 600 mm apart.',
  },
  {
    q: 'How much labour time does it actually save?',
    a: 'Time-and-motion case studies referenced in the technical catalogue show install labour reduced by more than 65% compared with a conventional block-and-render or stud-and-board build-up.',
  },
  {
    q: 'What happens to it at end of life?',
    a: "It's a single-material, all-in-one board, so waste on site is minimal and offcuts are recyclable. At the end of its service life the board itself can be recycled back into new production with zero waste.",
  },
  {
    q: 'Can services be routed through it?',
    a: 'Yes — mechanical, electrical and plumbing routes can be pre-formed off-site to a project\'s design, or cut into the board on site.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="page light-bg">
      <div className="sec-head fade">
        <span className="ribbon">08 · FAQ</span>
        <h2>Before you specify.</h2>
      </div>
      <div className="fade" style={{ maxWidth: '76ch' }}>
        {FAQS.map((item, i) => (
          <details className="faq-item" key={item.q} open={i === 0}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
