import { useRef, type FormEvent } from 'react';
import s from './NewGoal.module.css';

type NewGoalTypes = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function newGoal({ onAddGoal }: NewGoalTypes) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <p>
        <label htmlFor="goal" className={s.label}>
          Your Goal
        </label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <b>
        <button className={s.button}>Add Goal</button>
      </b>
    </form>
  );
}
