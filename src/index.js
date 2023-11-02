import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="ALEX.jpeg" alt="Alex Gomes" />;
}

function Intro() {
  return (
    <div>
      <h1>Alex Gomes</h1>
      <p>
        Frontend web developer. When not coding, i like to play board games, to
        cook (and eat), or to just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👶" color="#123456" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="WordPress" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
