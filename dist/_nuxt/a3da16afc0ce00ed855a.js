(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(t,s,i){var e=i(185);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(13).default)("202bb8f9",e,!0,{})},184:function(t,s,i){"use strict";var e=i(181);i.n(e).a},185:function(t,s,i){(t.exports=i(12)(!1)).push([t.i,"main[data-v-485ec93c]{background-color:#ffc965}h1[data-v-485ec93c]{font-size:7.5em;text-align:center;margin-top:4rem}.my-music-1-section[data-v-485ec93c]{display:flex;justify-content:center;align-items:center}.my-music-1-section__image[data-v-485ec93c]{max-width:300px}.my-music-1-section__list[data-v-485ec93c]{margin-left:2rem;font-size:1.2em}.my-music-1-section__list>p[data-v-485ec93c]{margin-bottom:1rem}.my-music-1-section__list ul[data-v-485ec93c]{padding:0;list-style-type:none}.my-music-1-section__artists-songs[data-v-485ec93c]{display:flex;justify-content:space-between}.my-music-1-section__list--artists[data-v-485ec93c]{margin-right:2rem}.my-music-1-section__list--artists p[data-v-485ec93c],.my-music-1-section__list--songs p[data-v-485ec93c]{font-weight:600;margin-bottom:1rem}",""])},192:function(t,s,i){"use strict";i.r(s);var e={middleware:"store-data-spotify",head:function(){return{title:"Listas de éxitos",meta:[{hid:"description",name:"description",content:"La lista de los artistas y las canciones que más has escuchado en Spotify."}]}},computed:{artists:function(){return this.$store.state.artists},topArtistImage:function(){return this.$store.state.topArtistImage},tracks:function(){return this.$store.state.tracks}}},a=(i(184),i(5)),c=Object(a.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("main",{staticClass:"my-music-1"},[i("h1",[t._v("Listas de éxitos")]),t._v(" "),i("section",{staticClass:"my-music-1-section"},[i("img",{staticClass:"my-music-1-section__image",attrs:{src:t.topArtistImage}}),t._v(" "),i("div",{staticClass:"my-music-1-section__list"},[i("p",[t._v("Como tu playlist, ninguna.")]),t._v(" "),i("p",[t._v("Tus artistas favoritos y las canciones más escuchadas el último mes.")]),t._v(" "),i("div",{staticClass:"my-music-1-section__artists-songs"},[i("div",{staticClass:"my-music-1-section__list--artists"},[i("p",[t._v("Artistas favoritos")]),t._v(" "),i("ul",t._l(t.artists.items,function(s){return i("li",{key:s.name},[t._v("\n              "+t._s(s.name)+"\n            ")])}),0)]),t._v(" "),i("div",{staticClass:"my-music-1-section__list--songs"},[i("p",[t._v("Canciones favoritas")]),t._v(" "),i("ul",t._l(t.tracks.items,function(s){return i("li",{key:s.name},[t._v("\n              "+t._s(s.name)+"\n            ")])}),0)])])])])])},[],!1,null,"485ec93c",null);c.options.__file="my-music-1.vue";s.default=c.exports}}]);