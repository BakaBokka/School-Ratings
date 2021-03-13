import React, {useState} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import RatingMapModal from "./RatingMapModal";

const style = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  border: "2px solid lightgray",
};
function RatingMap({ data }) {
  const [modalData, setModalData] = useState({});

  const handleModal = (data) => {
   
    setModalData(data)

  };

  const placemarkElement = data.map((school) => {
    return (
      <Placemark
        key={school.id}
        geometry={school.adress.coord}
        onClick={() => handleModal({
          title: school.school,
          rate: school.rate20,
          adress: school.adress.adress,
          url: school.url
        })}
      />
    );
  });

  return (
    <YMaps
      query={{
        ns: "use-load-option",
        load:
          "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
      }}
    >
      <div>
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 11,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          style={style}
          modules={["geocode"]}
        >
          {placemarkElement}
          <RatingMapModal  handleModal={handleModal} data={modalData} />
        </Map>
      </div>

    </YMaps>
  );
}

export default RatingMap;
