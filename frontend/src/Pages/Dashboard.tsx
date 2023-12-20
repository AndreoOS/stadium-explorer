import { loadModules } from "esri-loader";
import { useEffect, useRef } from "react";
import esriConfig from "@arcgis/core/config";
esriConfig.assetsPath = "./assets";
esriConfig.apiKey = "AAPKbaadebf4186e4e4c8450fc2875cc01d6reTYv6EbV8IEhx4wmUo-uzA9abhRE0Qukg__lfLnJrovkGLmpdbp9X5FAT_Hwv0l";

const Dashboard = () => {
    const MapElement = useRef(null);
    let view;
    useEffect(() => {
        loadModules(
            [
                'esri/views/MapView',
                'esri/Map',
                "esri/layers/FeatureLayer",
            ],
            {
                css: true,
            }
        ).then(
            ([
                MapView,
                Map,
                FeatureLayer
            ]) => {
                const map = new Map({
                    basemap: "streets-vector", 
                });
          
                view = new MapView({
                    map: map,
                    center: [10.861647, 48.306584], 
                    zoom: 2,
                    container: MapElement.current,
                });

                const stadiumLayer = new FeatureLayer({
                    url: "https://services5.arcgis.com/WPkXI1mQdYLzFttB/arcgis/rest/services/Navigation_Barriers/FeatureServer/0",
                });
            }
        )
    }, []);
    
    return (
        <div style={{width: "100vw", height: "100vh"}} ref={MapElement}>

        </div>
    )
};

export default Dashboard;