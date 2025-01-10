export default function Footer(props) {

    const { handleToggleModal } = props

    return (
        <footer>
            <div className="backgroundGradient"></div>
            <div>
                <h2> Venus planet </h2>
                <h1> APOD Project </h1>
            </div>
            <button onClick={handleToggleModal} >
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}