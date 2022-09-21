import img1 from '../assets/asset1.png';

const Top = () => {
    return(
        <div className="top">
            <div className="top-content">
                <div className="row left">
                    <h1>Involving the world in Artificail Intelligence</h1>
                    <h2>Our mission is to get worldwide sentiment and foster discussions on artificial intelligence, to build a more inclusive space.</h2>
                </div>
                 <div className="row right">
                    <img src={img1}  alt="building block rendering" style={{width:"100%", height:"100%", objectFit:"contain"}}/>
                </div>
            </div>
        </div>
    )
}
export default Top;