import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import RatingMapModal from "./RatingMapModal";
import LinearProgress from "@material-ui/core/LinearProgress";

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
  const [loading, setLoading] = useState(true);
  const handleModal = (data) => {
    setModalData(data);
  };

  const placemarkElement = data.map((school) => {
    if (school.rate20 === "топ 20") {
      return (
        <Placemark
          key={school.id}
          geometry={school.adress.coord}
          properties={{ iconCaption: school.school }}
          options={{
            preset: "islands#orangeStarCircleIcon",
          }}
          onClick={() =>
            handleModal({
              title: school.school,
              rate: school.rate20,
              adress: school.adress.adress,
              url: school.url,
            })
          }
        />
      );
    } else if (school.branches) {
      return school.branches.map((branch) => {
        return (
          <Placemark
            key={branch.id}
            geometry={branch.adress.coord}
            properties={{ iconCaption: branch.school }}
            options={{
              preset: "islands#greenBookCircleIcon",
            }}
            onClick={() =>
              handleModal({
                title: branch.school,
                rate: school.rate20,
                adress: branch.adress.adress,
                url: school.url,
              })
            }
          />
        );
      });
    } else {
      return (
        <Placemark
          key={school.id}
          geometry={school.adress.coord}
          properties={{ iconCaption: school.school }}
          options={{
            preset: "islands#blueEducationCircleIcon",
          }}
          onClick={() =>
            handleModal({
              title: school.school,
              rate: school.rate20,
              adress: school.adress.adress,
              url: school.url,
            })
          }
        />
      );
    }
  });

  return (
    <>
      {loading && <LinearProgress />}
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
              zoom: 10,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            style={style}
            modules={["geocode", "layout.ImageWithContent"]}
            onLoad={() => setLoading(false)}
          >
            {placemarkElement}

            <RatingMapModal handleModal={handleModal} data={modalData} />
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default RatingMap;
