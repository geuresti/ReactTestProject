export default function Footer(props) {

    const { data, handleToggleModal, handleToggleCalendar } = props

   /* 
   https://api.nasa.gov/planetary/apod?api_key=PgDkHBcezeAe5tGrwa1EUi7tIamFPeb6jNAVXOTr&date=2025-01-09
*/

    return (
        <footer>
            <div className="backgroundGradient"></div>
            <div>
                <h1> APOD Nasa API Demo </h1>
                <h2> {data?.title} </h2>
            </div>

            <div className="footerButtonsContainer">
                <button onClick={handleToggleCalendar}>
                    <i className="fa-regular fa-calendar"></i>
                </button>

                <button onClick={handleToggleModal} >
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            </div>

        </footer>
    )
}