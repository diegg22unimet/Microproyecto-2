import styles from "./HomePage.module.css"

function HomePage(){
    return (
        <div>
            <div className={styles.navbar}>
                <nav>
                    <div className={styles.pages}>
                        <a href="./login">Sign In</a>
                        <a href="./signup">Sign Up</a>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}

export default HomePage