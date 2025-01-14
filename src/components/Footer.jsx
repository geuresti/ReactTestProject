export default function Footer(props) {

    const { data, handleToggleModal, handleToggleCalendar, showCalendar } = props

    return (
        <footer>
            <div className="backgroundGradient"></div>
            <div>
                <h1> APOD Nasa API Demo </h1>
                <h2> {data?.title} </h2>
            </div>

            <div className="footerButtonsContainer">
                <button onClick={handleToggleCalendar} className={(showCalendar ? 'calendarActive' : 'calendarInactive')}>
                    <i className="fa-regular fa-calendar"></i>
                </button>

                <button id="info" onClick={handleToggleModal} >
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            </div>

        </footer>
    )
}