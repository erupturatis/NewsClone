import React from "react";
import { useParams } from "react-router";
import "../styling/components/stire.css"

const Stire = ({stiri}) => {
    const {id} = useParams();
    return ( 
        <div>
            <div>
               { stiri.filter(stire => stire.id === id ).map((stire,index)=>(
                   <div className="stireFlexboxMare">
                       <div>
                            <div className="stireFlexTot">
                                <div className="stireTitle">
                                    {stire.title}
                                </div>
                            </div>
                            
                            
                            <div className="stireFlexTot">
                                <div className="stireFlexBasic">
                                    <div className="stiredate">{stire.date}</div>
                                    <img className="stireImage2" src="https://cdn.discordapp.com/attachments/864542134391275543/864855334190448710/unknown.png"/>
                                </div>
                            </div>

                            <div className="stireFlexTot">
                                <div className="stireImage">
                                    <img src={stire.img}/>
                                </div>
                            </div>
                            <div className="stireFlexTot">
                                <div className="stireImgdesc">
                                    {stire.descriptionPhoto}
                                </div>
                            </div>
                            <div className="stireFlexTot">
                                <div className="stireHigh">
                                    {stire.highlight}
                                </div>
                            </div>

                            <div className="stireFlexTot">
                                <div className="stireArticol">
                                    {stire.article}
                                </div>
                            </div>
                            
                       </div>

                   </div>
               ))}
       
            </div>
        </div>
     );
}
 
export default Stire;