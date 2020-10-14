import React, { lazy } from 'react';
import { Redirect } from "react-router-dom";


//路由懒加载
const Discover = lazy(() => import("../pages/discover"))
const Recommend = lazy(() => import("../pages/discover/c-pages/recommend"))
const Ranking = lazy(() => import("../pages/discover/c-pages/ranking"))
const Songs = lazy(() => import("../pages/discover/c-pages/songs"))
const Djradio = lazy(() => import("../pages/discover/c-pages/djradio"))
const Artist = lazy(() => import("../pages/discover/c-pages/artist"))
const Album_discover = lazy(() => import("../pages/discover/c-pages/album"))
const Player = lazy(() => import("../pages/player"))
const Friend = lazy(() => import("../pages/friend"))
const Mine = lazy(() => import("../pages/mine"))
const Search = lazy(() => import("../pages/search"))
const Song = lazy(() => import("../pages/song"))
const PlayList = lazy(() => import("../pages/playlist"))
const Album = lazy(() => import("../pages/album"))


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover/recommend" />
    )
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"} />
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album_discover
      },
      {
        path: "/discover/player",
        component: Player
      }
    ]
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/friend",
    component: Friend
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/song",
    component: Song
  },
  {
    path: "/playlist",
    component: PlayList
  },
  {
    path: "/album",
    component: Album
  },

];


export default routes;