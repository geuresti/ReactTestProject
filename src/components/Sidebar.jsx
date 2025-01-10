export default function Sidebar(props) {

    const { handleToggleModal } = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="backgroundOverlay"></div>
            <div className="sidebarContents">
                <h2> Venus planet </h2>
                <div>
                    <p> Description </p>
                    <p> oidaij plkfowekf pmwfpo kwekopmzx fklnmjkn rreuih qijdo ijw </p>
                </div>    
                <button onClick={handleToggleModal}>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>     
            </div>
        </div>
    )
}