import { SignInButton } from '../SignInButton'
import Styles from './styles.module.scss'

export function Header() {
    return (
        <header className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={Styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}