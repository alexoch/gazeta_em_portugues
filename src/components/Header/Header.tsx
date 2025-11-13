import Title from './Title'
import TextDate from './TextDate';
import Edition from './Edition';

function Header(){
    return (
        <>
            <div>
                <Edition/>
                <Title/>
                <TextDate/>
            </div>
        </>
    )
}

export default Header;