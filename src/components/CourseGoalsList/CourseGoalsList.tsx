import { type ReactNode } from 'react';
import { type CourseGoal as Cgoal } from '../../App.tsx';
import CourseGoal from '../CourseGoal/CourseGoal.tsx';
import InfoBox from '../InfoBox/InfoBox.tsx';
import s from './CourseGoalsList.module.css';

type CourseGoalsListProps = {
  goals: Cgoal[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalsList({
  goals,
  onDeleteGoal,
}: CourseGoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul className={s.list}>
        {goals.map((goal) => (
          <li key={goal.id} className={s.item}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
