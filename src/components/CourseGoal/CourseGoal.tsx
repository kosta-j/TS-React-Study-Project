// APPROACH #1 (ReactNode):
// import {type ReactNode} from "react";
// type CourseGoalProps = {
//     title: string,
//     children: ReactNode
// }

// APPROACH #2 (PropsWithChildren):
import {type PropsWithChildren} from "react";

type CourseGoalProps = PropsWithChildren<{
    title: string,
    id: number,
    onDelete: (id: number) => void
}>


export default function CourseGoal({title, id, onDelete, children}: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
};

// With arrow function component:
// const CourseGoal = ({title, children}: CourseGoalProps) => { // option #1
// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => { // option #2
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }
// export  default CourseGoal;