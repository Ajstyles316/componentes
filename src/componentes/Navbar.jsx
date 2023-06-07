import "./navbar.css";

export function Navbar() {
    return (
        <div style={{ 'display': 'block' }}>
            <div className='NavBarSuperior'>
                <h1>Salchipapa</h1>
                <NavbarButoom text="Atras" />
            </div>
            <div className='Uwu'>
                <u >Platos</u>
            </div>
        </div>
    )
}
function NavbarButoom() {
    return (
        <button className='Butoom'>{this.props.text} </button>
    )
}