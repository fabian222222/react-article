import React, {useContext, useEffect, useState} from 'react'
import { MapContainer, TileLayer, Popup } from 'react-leaflet'
import styled from 'styled-components'
import { StoreContext } from '../Providers/StoreProvider';
import ReactLeafletDriftMarker from "react-leaflet-drift-marker"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"

const Map = () => {
    const {positions} = useContext(StoreContext)
    const [userInfo, setUserInfo] = useState("")
    const [mapOpen, setMapOpen] = useState(false)
    const [mapArrow, setMapArrow] = useState(faCaretLeft)

    useEffect(() => {
        setUserInfo(Object.entries(positions))
    }, [positions])

    const mapCloseAction = () => {
        setMapOpen(false)
        setMapArrow(faCaretLeft)
    }
    const mapOpenAction = () => {
        setMapOpen(true)
        setMapArrow(faCaretRight)
    }

    if (userInfo.length > 0){
        return (
            <MapDiv  mapOpen={mapOpen}>
                <MapOpener>
                    <FontAwesomeIcon icon={mapArrow} onClick={() => {mapOpen ? mapCloseAction() : mapOpenAction() }} />
                </MapOpener>
                <MapContainer style={{height:"100%", width:"100%"}} center={[48.856616, 2.349187]} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    {Object.entries(userInfo[0][1]).map((user, index) => {
                        return(
                            <ReactLeafletDriftMarker key={index} position={[user[1].location.latitude, user[1].location.longitude]} duration={1000} >
                                    <Popup>
                                        {user[0]}
                                    </Popup>
                            </ReactLeafletDriftMarker>
                        )
                    })}
                </MapContainer>
            </MapDiv>
        )
    } else {
        return (
            <MapDiv>
                <MapContainer style={{height:"400px"}} center={[48.856616, 2.349187]} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                </MapContainer>
            </MapDiv>
        )
    }
}

const MapDiv = styled.div`
    position: fixed;
    right: ${props => props.mapOpen ? '0px' : '-400px'} ;
    bottom: 0;
    width: 400px;
    height: 400px;
    transition:.5s;
`

const MapOpener = styled.div`
    position:absolute;
    top:50%;
    left:-15px;
    transform:translateY(-50%);
    cursor:pointer;
`
export default Map
