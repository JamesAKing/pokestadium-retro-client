import './Card.scss';

function Card({ className, children }) {
    return (
        <div className={`card${className ? ` ${className}` : ""}`} >
            {children}
        </div>
    );
}

export default Card;