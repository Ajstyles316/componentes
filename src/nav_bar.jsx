/* eslint-disable no-unused-vars */
import "./nav_bar.css";

export function NavBar() {
    return (
        <div style={{ 'display': 'block' }}>
            <div className='NavBarSuperior'>
                <h1>Salchipapa</h1>
                <NavBarButoom text="Atras" />
            </div>
            <div className='Foto'>
                <u >Platos</u>
            </div>
        </div>
    )
}
function NavBarButoom(props) {
    return (
        <button className='Butoom'>{this.props.text} </button>
    )
}