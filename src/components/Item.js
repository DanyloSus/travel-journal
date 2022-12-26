import React from "react";

export default function Item (props) {
    return (
        <div className="item">
            <img 
                src={props.imageUrl}
                className="item--img"
                alt="photo"
            />
            <div className="item--text">
                <p className="item--text--p1">
                    <img 
                        src="../img/map.png"
                        alt="map"
                    />
                    <h5>{props.location}</h5>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1>{props.title}</h1>
                <h5 className="item--text--date">{props.startDate} - {props.endDate}</h5>
                <p className="item--text--p2">{props.description}</p>
            </div>
        </div>
    );
}