import "../styling/components/PreviewStire.css";
import { Link } from "react-router-dom";

const PreviewStire = (props) => {

    return ( 
        <div>
            <div className="PSflexbox">
                <Link to={
                    `/stiri/${props.id}`
                }          
                > 
                 <img className="PSimg" src={props.img} />
                </Link>
                
                <div className="PSscrisI">
                    <div className="PSTitle">
                        {props.title}
                        
                    </div>
                    <div className="PSArti">
                        {props.article.substring(0,300)+"..."}
                    </div>
                </div>
            </div> 
            <div className="PSbara" />

        </div>
        
    );
}
 
export default PreviewStire;