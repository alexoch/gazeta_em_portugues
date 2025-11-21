import Title from './Title'
import TextDate from './TextDate';
import Edition from './Edition';

import styles from "../../styles/components/header/header.module.scss"
function Header(){
    // todo wrong markup
    return (
        <>
            <div className={styles.header_container}>
                <Edition/>
                <Title/>
                <TextDate/>
            </div>
        </>
    )
}

export default Header;