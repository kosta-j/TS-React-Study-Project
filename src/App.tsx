import './App.css';
import goalsImg from './assets/goalsImg.png';

import CourseGoalsList from './components/CourseGoalsList/CourseGoalsList.tsx';
import Header from './components/Header/Header.tsx';
import NewGoal from './components/NewGoal/NewGoal.tsx';

import { useState } from 'react';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Goals:</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
