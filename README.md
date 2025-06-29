<h1>🌍 Interactive World Map - Angular Project</h1>

<p>This project is a responsive Angular application that presents an interactive SVG world map. Users can click on a country to fetch real-time data from the World Bank API, including capital, region, income level, and more.</p>

<hr/>

<h2>🧪 Technologies Used</h2>

<ul>
  <li><img src="https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white" alt="Angular"> Angular</li>
  <li><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript"> TypeScript</li>
  <li><img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5"> HTML5</li>
  <li><img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3"> CSS3</li>
  <li><img src="https://img.shields.io/badge/API-World_Bank-blue" alt="World Bank API"> World Bank API</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
src/
├── index.html
├── main.ts
├── styles.css
└── app/
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.css
    ├── app.routes.ts
    ├── map/
    │   ├── map.component.ts
    │   ├── map.component.html
    │   └── map.component.css
    └── services/
        ├── world-bank.service.ts
        └── world-bank.service.spec.ts
</pre>

<hr/>

<h2>✅ Features</h2>

<ul>
  <li>🗺️ Clickable SVG world map (<code>map-image.svg</code>)</li>
  <li>📡 Retrieves live country data from the World Bank API:
    <ul>
      <li>Country name</li>
      <li>Capital city</li>
      <li>Region</li>
      <li>Income level</li>
      <li>2 additional fields</li>
    </ul>
  </li>
  <li>🧭 Angular routing with default redirect (<code>/map</code>)</li>
  <li>🧩 Component-based and event-driven design</li>
  <li>💻 Responsive 2-column layout: map + info panel</li>
</ul>

<hr/>




<h2>🎬 Demo</h2>

<p> Screenshot from the video demonstration of the application:</p>


<hr/>
