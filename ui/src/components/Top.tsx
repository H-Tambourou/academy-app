import img1 from '../assets/asset1.png';

const Top = () => {
    return(
        <div className="top">
            <div className="top-content">
                <div className="row left">
                    <h1>Involving the world in Artificial Intelligence</h1>
                    <p>Our mission is to get worldwide sentiment and foster discussions on artificial intelligence, to build a more inclusive space.</p>
                </div>
                 <div className="row right">
                    <img src={img1}  alt="building block rendering" style={{width:"100%", height:"100%", objectFit:"contain"}}/>
                </div>
            </div>
        </div>
    )
}
export default Top;