import React from 'react';
import { YMaps, Map, GeolocationControl, Clusterer, Placemark } from '@pbe/react-yandex-maps';
import './Maps.scss';

const mapSetting = {
    center: [55.752025, 37.666730], 
    zoom: 15,
};

const placeMark = {
    geometry: [55.752025, 37.666730], 
    properties: {
        hintContent: 'Костомаровский переулок, 3с4',
        balloonContent: 'Костомаровский переулок, 3с4'
    },
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
};

export const Maps = () => {
    return (
        <YMaps>
            <div className='map-wrapper'>
                <div className='map-wrapper__settings'>
                    <Map defaultState={mapSetting}>
                        <GeolocationControl />
                        <Clusterer>
                            <Placemark {...placeMark}/>
                        </Clusterer>
                    </Map>
                </div>
            </div>
        </YMaps>
    )
}
