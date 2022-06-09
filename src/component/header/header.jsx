import './header-style.css'; 
import img1 from "./image1.jpg";

const Header = () => {
    return (
    <div className="header">
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Be strong. Be beautiful.</h1>
                <h1>Be you.</h1>
                <p>Masterful design never goes out of fashion. Because bling is our thing.</p>
                <a href="" className="btn">Explore Now &#8594;</a>
            </div>
            <div className="col">
                <img src={img1}/>
            </div>
        </div>
    </div>
</div>
)};
export default Header;