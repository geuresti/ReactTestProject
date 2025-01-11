export default function Sidebar(props) {

    const { data, handleToggleModal } = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="backgroundOverlay"></div>
            <div className="sidebarContents">
                <h2> {data?.title} </h2>
                <div className="descContainer">
                    <p className="date"> {data?.date} </p>
                    <p> {data?.explanation} </p>
                </div>    
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>     
            </div>
        </div>
    )
}