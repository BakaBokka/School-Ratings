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

  console.log(data);

  const placemarkElement = data.map((school) => {
    if (school.original.rate20 === "топ 20") {
      return (
        <Placemark
        
          key={school.original.id}
          geometry={school.original.adress.coord}
          properties={{ iconCaption: school.original.school }}
          options={{
            preset: "islands#orangeStarCircleIcon",
          }}
          onClick={() =>
            handleModal({
              title: school.original.school,
              rate: school.original.rate20,
              adress: school.original.adress.adress,
              url: school.original.url,
            })
          }
        />
      );
    } else {
      return (
        <Placemark
          key={school.original.id}
          geometry={school.original.adress.coord}
          properties={{ iconCaption: school.original.school }}
          options={{
            preset: "islands#blueEducationCircleIcon",
          }}
          onClick={() =>
            handleModal({
              title: school.original.school,
              rate: school.original.rate20,
              adress: school.original.adress.adress,
              url: school.original.url,
            })
          }
        />
      );
    }
  });

  const placemarkBranchElement = data.map((school) => {
    return (
      school.original.branches &&
      school.original.branches.map((branch) => {
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
                rate: school.original.rate20,
                adress: branch.adress.adress,
                url: school.original.url,
              })
            }
          />
        );
      })
    );
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
              zoom: 11,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            style={style}
            modules={["geocode", "layout.ImageWithContent"]}
            onLoad={() => setLoading(false)}
          >
            {placemarkElement}
            {placemarkBranchElement}

            <RatingMapModal handleModal={handleModal} data={modalData} />
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default RatingMap;
