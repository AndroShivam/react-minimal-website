import React from 'react'
import './InfoSection.css'

const InfoSection = ({ title, description, imgStart, start, img, btnText }) => {
    return (
        <>
            <div className="info-sec">
                <div className="info-container">
                    <div style={(imgStart) ? { flexDirection: "row-reverse" } : { flexDirection: "row" }} className="info-row">
                        <div className="info-col">
                            <div className="text-wrapper">
                                <h1 className="heading-txt">{title}</h1>
                                <p className="desc-txt">{description}</p>

                                <button className="info-btn" >{btnText}</button>
                            </div>
                        </div>

                        <div className="info-col">
                            <div style={(start) ? { justifyContent: "flex-start" } : { justifyContent: "flex-end" }} className="img-wrapper">
                                <img src={img} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection
