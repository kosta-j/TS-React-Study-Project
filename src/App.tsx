import './App.css'
import goalsImg from "./assets/goalsImg.png"

import CourseGoal from "./components/CourseGoal/CourseGoal.tsx";
import Header from "./components/Header/Header.tsx";
import CourseGoalsList from "./components/CourseGoalsList/CourseGoalsList.tsx";

import {useState} from "react";

export type CourseGoal = {
    title: string,
    description: string,
    id: number
}

function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal() {
        setGoals((prevGoals) => {
            const newGoal: CourseGoal = {
                id: Math.random(),
                title: 'Learn React + TC',
                description: 'Learn it in depth'
            }
            return [...prevGoals, newGoal]
        })
    }

    function handleDeleteGoal(id: number) {
        setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Goals:</h1>
            </Header>
            <button onClick={handleAddGoal}>Add Goal</button>
            <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoal}/>
        </main>
    )
}

export default App
