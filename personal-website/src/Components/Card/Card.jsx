import styles from './Card.module.css'


function Card(props){
    return(
        <div className={styles.card}>
            
            {props.img}
            <p className={styles.name}>{props.name}</p>
            
        </div>
    )
}

export default Card;