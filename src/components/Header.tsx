import BlurOnIcon from '@mui/icons-material/BlurOn'

export default function Header() {
    return (
        <>
        <header>
            <div className="logoContainer" style={{display: 'flex', alignItems: 'center'}}>
                <div className="logo">surWay</div>
                <BlurOnIcon sx={{ color: 'var(--primary)', fontSize: '40px', ml: '1px'}} />
            </div>
            <div className="headerContainer">
                <h2>Application</h2>
                <a href="#">Fill in later</a>
            </div>
        </header>
        </>
    )
}