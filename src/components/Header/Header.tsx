import {type ReactNode} from "react";
import s from './Header.module.css'

type HeaderProps = {
    image: {
        src: string,
        alt: string
    },
    children: ReactNode
}
// type HeaderProps = PropsWithChildren<{ image: { src: string, alt: string } }>

export default function Header({image, children}: HeaderProps) {
    return (
        <header>
            <img {...image} className={s.img}/>
            {children}
        </header>
    )
}