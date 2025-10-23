import { NewLink } from 'react-router-dom'
import classes from './Header.module.scss'

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <NewLink to={'/'} className={classes.link}>Home</NewLink>
                <NewLink to={'/todo'} className={classes.link}>ToDo</NewLink>
            </div>
        </header>
    )
}