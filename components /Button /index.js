import styles from './Button.module.css'

export default function Button({
    title="default",
    color //nothing
}) {
    return(
        <>
        <button style={{backgroundColor: color}}>{title}</button>
        </>
    )
}