import React, { memo } from "react";
import { AllAlbumsWarpper } from "./style";
import AlbumCover from "./c-cpns/album-cover";

export default memo(function AllAlbum({ data }) {
  return (
    <AllAlbumsWarpper>
      {data.hotAlbums &&
        data.hotAlbums.map((item) => {
          return (
            <AlbumCover
              key={item.id}
              info={item}
              size={120}
              width={145}
              bgp="-170px -850px"
            />
          );
        })}
    </AllAlbumsWarpper>
  );
});
