import CourseGoal from "../CourseGoal/CourseGoal.tsx";
import {CourseGoal as Cgoal} from '../../App.tsx'
import s from './CourseGoalsList.module.css'

type CourseGoalsListProps = {
    goals: Cgoal[],
    onDeleteGoal: (id: number) => void;
}
export default function CourseGoalsList({goals, onDeleteGoal}: CourseGoalsListProps) {
    return (
        <ul className={s.list}>
            {goals.map((goal) => (
                <li key={goal.id} className={s.item}>
                    <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}