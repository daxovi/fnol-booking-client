import React, { useEffect, useState } from 'react';
import './Map.css';

const Map = ({ click, vybrane, obsazene, floor, isLoading }) => {

   useEffect(() => {
      changeFloor(0);
   }, [])

   useEffect(() => {
      vybrane.forEach(ticket => {
         const place = document.getElementById(ticket);
         if (place != null) {
            place.style.fill = "#ffbc2b";
         }
      });
   }, [vybrane])

   useEffect(() => {
      obsazene.forEach(ticket => {
         const place = document.getElementById(ticket);
         if (place != null) {
            place.style.fill = "#fa5f41";
         }
      });
   }, [obsazene])

   useEffect(() => {
      const plocha = document.getElementById("Vrstva_plocha");
      const galerie = document.getElementById("Vrstva_galerie");
      const loading = document.getElementById("Vrstva_loading");
      if (isLoading) {
         loading.style.display = "block";
         plocha.style.display = "none";
         galerie.style.display = "none";
      } else {
         loading.style.display = "none";
         if (floor == 0) {
            plocha.style.display = "block";
            galerie.style.display = "none";
         } else {
            plocha.style.display = "none";
            galerie.style.display = "block";
         }
      }
   }, [isLoading])


   useEffect(() => {
      changeFloor(floor)
   }, [floor])


   const changeFloor = (patro) => {
      if (!isLoading) {
         const plocha = document.getElementById("Vrstva_plocha");
      const galerie = document.getElementById("Vrstva_galerie");
      if (patro == 0) {
         plocha.style.display = "block";
         galerie.style.display = "none";
      } else {
         plocha.style.display = "none";
         galerie.style.display = "block";
      }
      }
   }

   return (
      // TODO přidat grafiku se skrytým plánkem a tlačítkem na znovunačtení
      <div>
         <span className='misto misto-volne'>volné místo &nbsp; </span>
         <span className='misto misto-obsazene'>obsazené místo &nbsp; </span>
         <span className='misto misto-vybrane'>vybrané místo</span>
         <svg
            version="1.1"
            id="Vrstva_plocha"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            viewBox="0 0 1440 1080"
         >
            <g id='tables' onClick={(e) => click(e)}>




               <rect
                  class="mista"
                  x="280.23"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6280" />
               <rect
                  class="mista"
                  x="280.23"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6282" />
               <rect
                  class="mista"
                  x="258.1"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6284" />
               <rect
                  class="mista"
                  x="258.1"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6286" />
               <rect
                  class="mista"
                  x="302.35"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6288" />
               <rect
                  class="mista"
                  x="302.35"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6290" />
               <rect
                  class="mista"
                  x="302.21"
                  y="427.21"
                  width="16"
                  height="16"
                  id="rect6292" />
               <rect
                  class="mista"
                  x="302.21"
                  y="484.91"
                  width="16"
                  height="16"
                  id="rect6294" />
               <rect
                  class="mista"
                  x="280.08"
                  y="465.57"
                  width="16"
                  height="16"
                  id="rect6296" />
               <rect
                  class="mista"
                  x="280.08"
                  y="446.54"
                  width="16"
                  height="16"
                  id="rect6298" />
               <rect
                  class="mista"
                  x="324.34"
                  y="465.57"
                  width="16"
                  height="16"
                  id="rect6300" />
               <rect
                  class="mista"
                  x="324.34"
                  y="446.54"
                  width="16"
                  height="16"
                  id="rect6302" />
               <rect
                  class="mista"
                  x="390.01"
                  y="427.21"
                  width="16"
                  height="16"
                  id="rect6304" />
               <rect
                  class="mista"
                  x="390.01"
                  y="484.91"
                  width="16"
                  height="16"
                  id="rect6306" />
               <rect
                  class="mista"
                  x="367.89"
                  y="465.57"
                  width="16"
                  height="16"
                  id="rect6308" />
               <rect
                  class="mista"
                  x="367.89"
                  y="446.54"
                  width="16"
                  height="16"
                  id="rect6310" />
               <rect
                  class="mista"
                  x="412.14"
                  y="465.57"
                  width="16"
                  height="16"
                  id="rect6312" />
               <rect
                  class="mista"
                  x="412.14"
                  y="446.54"
                  width="16"
                  height="16"
                  id="rect6314" />
               <rect
                  class="mista"
                  x="508.61"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6316" />
               <rect
                  class="mista"
                  x="508.61"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6318" />
               <rect
                  class="mista"
                  x="486.48"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6320" />
               <rect
                  class="mista"
                  x="486.48"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6322" />
               <rect
                  class="mista"
                  x="530.73"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6324" />
               <rect
                  class="mista"
                  x="530.73"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6326" />
               <rect
                  class="mista"
                  x="583.73"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6328" />
               <rect
                  class="mista"
                  x="583.73"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6330" />
               <rect
                  class="mista"
                  x="561.6"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6332" />
               <rect
                  class="mista"
                  x="561.6"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6334" />
               <rect
                  class="mista"
                  x="605.86"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6336" />
               <rect
                  class="mista"
                  x="605.86"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6338" />
               <rect
                  class="mista"
                  x="662.11"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6340" />
               <rect
                  class="mista"
                  x="662.11"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6342" />
               <rect
                  class="mista"
                  x="639.98"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6344" />
               <rect
                  class="mista"
                  x="639.98"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6346" />
               <rect
                  class="mista"
                  x="684.24"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6348" />
               <rect
                  class="mista"
                  x="684.24"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6350" />
               <rect
                  class="mista"
                  x="737.88"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6352" />
               <rect
                  class="mista"
                  x="737.88"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6354" />
               <rect
                  class="mista"
                  x="715.75"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6356" />
               <rect
                  class="mista"
                  x="715.75"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6358" />
               <rect
                  class="mista"
                  x="760.01"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6360" />
               <rect
                  class="mista"
                  x="760.01"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6362" />
               <rect
                  class="mista"
                  x="829"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6364" />
               <rect
                  class="mista"
                  x="829"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6366" />
               <rect
                  class="mista"
                  x="806.87"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6368" />
               <rect
                  class="mista"
                  x="806.87"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6370" />
               <rect
                  class="mista"
                  x="851.13"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6372" />
               <rect
                  class="mista"
                  x="851.13"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6374" />
               <rect
                  class="mista"
                  x="905.38"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6376" />
               <rect
                  class="mista"
                  x="905.38"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6378" />
               <rect
                  class="mista"
                  x="883.25"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6380" />
               <rect
                  class="mista"
                  x="883.25"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6382" />
               <rect
                  class="mista"
                  x="927.51"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6384" />
               <rect
                  class="mista"
                  x="927.51"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6386" />
               <rect
                  class="mista"
                  x="981.76"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6388" />
               <rect
                  class="mista"
                  x="981.76"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6390" />
               <rect
                  class="mista"
                  x="959.63"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6392" />
               <rect
                  class="mista"
                  x="959.63"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6394" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6396" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6398" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6400" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6402" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6404" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6406" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6408" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6410" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6412" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6414" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6416" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6418" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6420" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6422" />
               <rect
                  class="mista"
                  x="302.21"
                  y="505.14"
                  width="16"
                  height="16"
                  id="rect6424" />
               <rect
                  class="mista"
                  x="302.21"
                  y="562.84"
                  width="16"
                  height="16"
                  id="rect6426" />
               <rect
                  class="mista"
                  x="280.08"
                  y="543.5"
                  width="16"
                  height="16"
                  id="rect6428" />
               <rect
                  class="mista"
                  x="280.08"
                  y="524.47"
                  width="16"
                  height="16"
                  id="rect6430" />
               <rect
                  class="mista"
                  x="324.34"
                  y="543.5"
                  width="16"
                  height="16"
                  id="rect6432" />
               <rect
                  class="mista"
                  x="324.34"
                  y="524.47"
                  width="16"
                  height="16"
                  id="rect6434" />
               <rect
                  class="mista"
                  x="390.01"
                  y="505.14"
                  width="16"
                  height="16"
                  id="rect6436" />
               <rect
                  class="mista"
                  x="390.01"
                  y="562.84"
                  width="16"
                  height="16"
                  id="rect6438" />
               <rect
                  class="mista"
                  x="367.89"
                  y="543.5"
                  width="16"
                  height="16"
                  id="rect6440" />
               <rect
                  class="mista"
                  x="367.89"
                  y="524.47"
                  width="16"
                  height="16"
                  id="rect6442" />
               <rect
                  class="mista"
                  x="412.14"
                  y="543.5"
                  width="16"
                  height="16"
                  id="rect6444" />
               <rect
                  class="mista"
                  x="412.14"
                  y="524.47"
                  width="16"
                  height="16"
                  id="rect6446" />
               <rect
                  class="mista"
                  x="355.35"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6448" />
               <rect
                  class="mista"
                  x="355.35"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6450" />
               <rect
                  class="mista"
                  x="333.22"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6452" />
               <rect
                  class="mista"
                  x="333.22"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6454" />
               <rect
                  class="mista"
                  x="377.48"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6456" />
               <rect
                  class="mista"
                  x="377.48"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6458" />
               <rect
                  class="mista"
                  x="433.73"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6460" />
               <rect
                  class="mista"
                  x="433.73"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6462" />
               <rect
                  class="mista"
                  x="411.6"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6464" />
               <rect
                  class="mista"
                  x="411.6"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6466" />
               <rect
                  class="mista"
                  x="455.86"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6468" />
               <rect
                  class="mista"
                  x="455.86"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6470" />
               <rect
                  class="mista"
                  x="355.35"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6472" />
               <rect
                  class="mista"
                  x="355.35"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6474" />
               <rect
                  class="mista"
                  x="333.22"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6476" />
               <rect
                  class="mista"
                  x="333.22"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6478" />
               <rect
                  class="mista"
                  x="377.48"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6480" />
               <rect
                  class="mista"
                  x="377.48"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6482" />
               <rect
                  class="mista"
                  x="433.73"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6484" />
               <rect
                  class="mista"
                  x="433.73"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6486" />
               <rect
                  class="mista"
                  x="411.6"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6488" />
               <rect
                  class="mista"
                  x="411.6"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6490" />
               <rect
                  class="mista"
                  x="455.86"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6492" />
               <rect
                  class="mista"
                  x="455.86"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6494" />
               <rect
                  class="mista"
                  x="508.61"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6496" />
               <rect
                  class="mista"
                  x="508.61"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6498" />
               <rect
                  class="mista"
                  x="486.48"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6500" />
               <rect
                  class="mista"
                  x="486.48"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6502" />
               <rect
                  class="mista"
                  x="530.73"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6504" />
               <rect
                  class="mista"
                  x="530.73"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6506" />
               <rect
                  class="mista"
                  x="583.73"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6508" />
               <rect
                  class="mista"
                  x="583.73"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6510" />
               <rect
                  class="mista"
                  x="561.6"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6512" />
               <rect
                  class="mista"
                  x="561.6"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6514" />
               <rect
                  class="mista"
                  x="605.86"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6516" />
               <rect
                  class="mista"
                  x="605.86"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6518" />
               <rect
                  class="mista"
                  x="662.11"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6520" />
               <rect
                  class="mista"
                  x="662.11"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6522" />
               <rect
                  class="mista"
                  x="639.98"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6524" />
               <rect
                  class="mista"
                  x="639.98"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6526" />
               <rect
                  class="mista"
                  x="684.24"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6528" />
               <rect
                  class="mista"
                  x="684.24"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6530" />
               <rect
                  class="mista"
                  x="737.88"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6532" />
               <rect
                  class="mista"
                  x="737.88"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6534" />
               <rect
                  class="mista"
                  x="715.75"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6536" />
               <rect
                  class="mista"
                  x="715.75"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6538" />
               <rect
                  class="mista"
                  x="760.01"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6540" />
               <rect
                  class="mista"
                  x="760.01"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6542" />
               <rect
                  class="mista"
                  x="905.38"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6544" />
               <rect
                  class="mista"
                  x="905.38"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6546" />
               <rect
                  class="mista"
                  x="883.25"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6548" />
               <rect
                  class="mista"
                  x="883.25"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6550" />
               <rect
                  class="mista"
                  x="927.51"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6552" />
               <rect
                  class="mista"
                  x="927.51"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6554" />
               <rect
                  class="mista"
                  x="981.76"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6556" />
               <rect
                  class="mista"
                  x="981.76"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6558" />
               <rect
                  class="mista"
                  x="959.63"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6560" />
               <rect
                  class="mista"
                  x="959.63"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6562" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6564" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6566" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6568" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6570" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6572" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6574" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6576" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6578" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="196.58"
                  width="16"
                  height="16"
                  id="rect6580" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="254.27"
                  width="16"
                  height="16"
                  id="rect6582" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6584" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6586" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="234.94"
                  width="16"
                  height="16"
                  id="rect6588" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="215.91"
                  width="16"
                  height="16"
                  id="rect6590" />
               <rect
                  class="mista"
                  x="355.35"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6592" />
               <rect
                  class="mista"
                  x="355.35"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6594" />
               <rect
                  class="mista"
                  x="333.22"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6596" />
               <rect
                  class="mista"
                  x="333.22"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6598" />
               <rect
                  class="mista"
                  x="377.48"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6600" />
               <rect
                  class="mista"
                  x="377.48"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6602" />
               <rect
                  class="mista"
                  x="433.73"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6604" />
               <rect
                  class="mista"
                  x="433.73"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6606" />
               <rect
                  class="mista"
                  x="411.6"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6608" />
               <rect
                  class="mista"
                  x="411.6"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6610" />
               <rect
                  class="mista"
                  x="455.86"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6612" />
               <rect
                  class="mista"
                  x="455.86"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6614" />
               <rect
                  class="mista"
                  x="508.61"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6616" />
               <rect
                  class="mista"
                  x="508.61"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6618" />
               <rect
                  class="mista"
                  x="486.48"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6620" />
               <rect
                  class="mista"
                  x="486.48"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6622" />
               <rect
                  class="mista"
                  x="530.73"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6624" />
               <rect
                  class="mista"
                  x="530.73"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6626" />
               <rect
                  class="mista"
                  x="583.73"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6628" />
               <rect
                  class="mista"
                  x="583.73"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6630" />
               <rect
                  class="mista"
                  x="561.6"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6632" />
               <rect
                  class="mista"
                  x="561.6"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6634" />
               <rect
                  class="mista"
                  x="605.86"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6636" />
               <rect
                  class="mista"
                  x="605.86"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6638" />
               <rect
                  class="mista"
                  x="662.11"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6640" />
               <rect
                  class="mista"
                  x="662.11"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6642" />
               <rect
                  class="mista"
                  x="639.98"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6644" />
               <rect
                  class="mista"
                  x="639.98"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6646" />
               <rect
                  class="mista"
                  x="684.24"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6648" />
               <rect
                  class="mista"
                  x="684.24"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6650" />
               <rect
                  class="mista"
                  x="737.88"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6652" />
               <rect
                  class="mista"
                  x="737.88"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6654" />
               <rect
                  class="mista"
                  x="715.75"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6656" />
               <rect
                  class="mista"
                  x="715.75"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6658" />
               <rect
                  class="mista"
                  x="760.01"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6660" />
               <rect
                  class="mista"
                  x="760.01"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6662" />
               <rect
                  class="mista"
                  x="905.38"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6664" />
               <rect
                  class="mista"
                  x="905.38"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6666" />
               <rect
                  class="mista"
                  x="883.25"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6668" />
               <rect
                  class="mista"
                  x="883.25"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6670" />
               <rect
                  class="mista"
                  x="927.51"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6672" />
               <rect
                  class="mista"
                  x="927.51"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6674" />
               <rect
                  class="mista"
                  x="981.76"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6676" />
               <rect
                  class="mista"
                  x="981.76"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6678" />
               <rect
                  class="mista"
                  x="959.63"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6680" />
               <rect
                  class="mista"
                  x="959.63"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6682" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6684" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6686" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6688" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6690" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6692" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6694" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6696" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6698" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="797.52"
                  width="16"
                  height="16"
                  id="rect6700" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="855.21"
                  width="16"
                  height="16"
                  id="rect6702" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6704" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6706" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="835.88"
                  width="16"
                  height="16"
                  id="rect6708" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="816.85"
                  width="16"
                  height="16"
                  id="rect6710" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="109.13"
                  width="16"
                  height="16"
                  id="rect6712" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="166.83"
                  width="16"
                  height="16"
                  id="rect6714" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6716" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6718" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="147.49"
                  width="16"
                  height="16"
                  id="rect6720" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="128.47"
                  width="16"
                  height="16"
                  id="rect6722" />
               <rect
                  class="mista"
                  x="280.23"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect6724" />
               <rect
                  class="mista"
                  x="280.23"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect6726" />
               <rect
                  class="mista"
                  x="258.1"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6728" />
               <rect
                  class="mista"
                  x="258.1"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6730" />
               <rect
                  class="mista"
                  x="302.35"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6732" />
               <rect
                  class="mista"
                  x="302.35"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6734" />
               <rect
                  class="mista"
                  x="100.14"
                  y="298.4"
                  width="16"
                  height="16"
                  transform="translate(-198.26 414.54) rotate(-90)"
                  id="rect6736" />
               <rect
                  class="mista"
                  x="157.84"
                  y="298.4"
                  width="16"
                  height="16"
                  transform="translate(-140.56 472.24) rotate(-90)"
                  id="rect6738" />
               <rect
                  class="mista"
                  x="138.5"
                  y="320.53"
                  width="16"
                  height="16"
                  transform="translate(-182.02 475.03) rotate(-90)"
                  id="rect6740" />
               <rect
                  class="mista"
                  x="119.48"
                  y="320.53"
                  width="16"
                  height="16"
                  transform="translate(-201.05 456.01) rotate(-90)"
                  id="rect6742" />
               <rect
                  class="mista"
                  x="138.5"
                  y="276.27"
                  width="16"
                  height="16"
                  transform="translate(-137.77 430.78) rotate(-90)"
                  id="rect6744" />
               <rect
                  class="mista"
                  x="119.48"
                  y="276.27"
                  width="16"
                  height="16"
                  transform="translate(-156.79 411.75) rotate(-90)"
                  id="rect6746" />
               <rect
                  class="mista"
                  x="188.31"
                  y="298.4"
                  width="16"
                  height="16"
                  transform="translate(-110.09 502.71) rotate(-90)"
                  id="rect6748" />
               <rect
                  class="mista"
                  x="246.01"
                  y="298.4"
                  width="16"
                  height="16"
                  transform="translate(-52.39 560.41) rotate(-90)"
                  id="rect6750" />
               <rect
                  class="mista"
                  x="226.67"
                  y="320.53"
                  width="16"
                  height="16"
                  transform="translate(-93.85 563.2) rotate(-90)"
                  id="rect6752" />
               <rect
                  class="mista"
                  x="207.65"
                  y="320.53"
                  width="16"
                  height="16"
                  transform="translate(-112.88 544.17) rotate(-90)"
                  id="rect6754" />
               <rect
                  class="mista"
                  x="226.67"
                  y="276.27"
                  width="16"
                  height="16"
                  transform="translate(-49.6 518.94) rotate(-90)"
                  id="rect6756" />
               <rect
                  class="mista"
                  x="207.65"
                  y="276.27"
                  width="16"
                  height="16"
                  transform="translate(-68.63 499.92) rotate(-90)"
                  id="rect6758" />
               <rect
                  class="mista"
                  x="188.31"
                  y="370.4"
                  width="16"
                  height="16"
                  transform="translate(-182.09 574.71) rotate(-90)"
                  id="rect6760" />
               <rect
                  class="mista"
                  x="246.01"
                  y="370.4"
                  width="16"
                  height="16"
                  transform="translate(-124.39 632.41) rotate(-90)"
                  id="rect6762" />
               <rect
                  class="mista"
                  x="226.67"
                  y="392.53"
                  width="16"
                  height="16"
                  transform="translate(-165.85 635.2) rotate(-90)"
                  id="rect6764" />
               <rect
                  class="mista"
                  x="207.65"
                  y="392.53"
                  width="16"
                  height="16"
                  transform="translate(-184.88 616.17) rotate(-90)"
                  id="rect6766" />
               <rect
                  class="mista"
                  x="226.67"
                  y="348.27"
                  width="16"
                  height="16"
                  transform="translate(-121.6 590.94) rotate(-90)"
                  id="rect6768" />
               <rect
                  class="mista"
                  x="207.65"
                  y="348.27"
                  width="16"
                  height="16"
                  transform="translate(-140.63 571.92) rotate(-90)"
                  id="rect6770" />
               <rect
                  class="mista"
                  x="100.14"
                  y="370.4"
                  width="16"
                  height="16"
                  transform="translate(-270.26 486.54) rotate(-90)"
                  id="rect6772" />
               <rect
                  class="mista"
                  x="157.84"
                  y="370.4"
                  width="16"
                  height="16"
                  transform="translate(-212.56 544.24) rotate(-90)"
                  id="rect6774" />
               <rect
                  class="mista"
                  x="138.5"
                  y="392.53"
                  width="16"
                  height="16"
                  transform="translate(-254.02 547.03) rotate(-90)"
                  id="rect6776" />
               <rect
                  class="mista"
                  x="119.48"
                  y="392.53"
                  width="16"
                  height="16"
                  transform="translate(-273.05 528.01) rotate(-90)"
                  id="rect6778" />
               <rect
                  class="mista"
                  x="138.5"
                  y="348.27"
                  width="16"
                  height="16"
                  transform="translate(-209.77 502.78) rotate(-90)"
                  id="rect6780" />
               <rect
                  class="mista"
                  x="119.48"
                  y="348.27"
                  width="16"
                  height="16"
                  transform="translate(-228.79 483.75) rotate(-90)"
                  id="rect6782" />
               <rect
                  class="mista"
                  x="274.42"
                  y="317.27"
                  width="16"
                  height="16"
                  transform="translate(-42.85 607.69) rotate(-90)"
                  id="rect6784" />
               <rect
                  class="mista"
                  x="332.12"
                  y="317.27"
                  width="16"
                  height="16"
                  transform="translate(14.84 665.39) rotate(-90)"
                  id="rect6786" />
               <rect
                  class="mista"
                  x="312.78"
                  y="339.4"
                  width="16"
                  height="16"
                  transform="translate(-26.62 668.18) rotate(-90)"
                  id="rect6788" />
               <rect
                  class="mista"
                  x="293.75"
                  y="339.4"
                  width="16"
                  height="16"
                  transform="translate(-45.65 649.15) rotate(-90)"
                  id="rect6790" />
               <rect
                  class="mista"
                  x="312.78"
                  y="295.15"
                  width="16"
                  height="16"
                  transform="translate(17.63 623.93) rotate(-90)"
                  id="rect6792" />
               <rect
                  class="mista"
                  x="293.75"
                  y="295.15"
                  width="16"
                  height="16"
                  transform="translate(-1.39 604.9) rotate(-90)"
                  id="rect6794" />
               <rect
                  class="mista"
                  x="362.59"
                  y="317.27"
                  width="16"
                  height="16"
                  transform="translate(45.31 695.86) rotate(-90)"
                  id="rect6796" />
               <rect
                  class="mista"
                  x="420.28"
                  y="317.27"
                  width="16"
                  height="16"
                  transform="translate(103.01 753.56) rotate(-90)"
                  id="rect6798" />
               <rect
                  class="mista"
                  x="400.95"
                  y="339.4"
                  width="16"
                  height="16"
                  transform="translate(61.55 756.35) rotate(-90)"
                  id="rect6800" />
               <rect
                  class="mista"
                  x="381.92"
                  y="339.4"
                  width="16"
                  height="16"
                  transform="translate(42.52 737.32) rotate(-90)"
                  id="rect6802" />
               <rect
                  class="mista"
                  x="400.95"
                  y="295.15"
                  width="16"
                  height="16"
                  transform="translate(105.8 712.09) rotate(-90)"
                  id="rect6804" />
               <rect
                  class="mista"
                  x="381.92"
                  y="295.15"
                  width="16"
                  height="16"
                  transform="translate(86.78 693.07) rotate(-90)"
                  id="rect6806" />
               <rect
                  class="mista"
                  x="362.59"
                  y="385.27"
                  width="16"
                  height="16"
                  transform="translate(-22.69 763.86) rotate(-90)"
                  id="rect6808" />
               <rect
                  class="mista"
                  x="420.28"
                  y="385.27"
                  width="16"
                  height="16"
                  transform="translate(35.01 821.56) rotate(-90)"
                  id="rect6810" />
               <rect
                  class="mista"
                  x="400.95"
                  y="407.4"
                  width="16"
                  height="16"
                  transform="translate(-6.45 824.35) rotate(-90)"
                  id="rect6812" />
               <rect
                  class="mista"
                  x="381.92"
                  y="407.4"
                  width="16"
                  height="16"
                  transform="translate(-25.48 805.32) rotate(-90)"
                  id="rect6814" />
               <rect
                  class="mista"
                  x="400.95"
                  y="363.15"
                  width="16"
                  height="16"
                  transform="translate(37.8 780.09) rotate(-90)"
                  id="rect6816" />
               <rect
                  class="mista"
                  x="381.92"
                  y="363.15"
                  width="16"
                  height="16"
                  transform="translate(18.78 761.07) rotate(-90)"
                  id="rect6818" />
               <rect
                  class="mista"
                  x="274.42"
                  y="385.27"
                  width="16"
                  height="16"
                  transform="translate(-110.85 675.69) rotate(-90)"
                  id="rect6820" />
               <rect
                  class="mista"
                  x="332.12"
                  y="385.27"
                  width="16"
                  height="16"
                  transform="translate(-53.16 733.39) rotate(-90)"
                  id="rect6822" />
               <rect
                  class="mista"
                  x="312.78"
                  y="407.4"
                  width="16"
                  height="16"
                  transform="translate(-94.62 736.18) rotate(-90)"
                  id="rect6824" />
               <rect
                  class="mista"
                  x="293.75"
                  y="407.4"
                  width="16"
                  height="16"
                  transform="translate(-113.65 717.15) rotate(-90)"
                  id="rect6826" />
               <rect
                  class="mista"
                  x="312.78"
                  y="363.15"
                  width="16"
                  height="16"
                  transform="translate(-50.37 691.93) rotate(-90)"
                  id="rect6828" />
               <rect
                  class="mista"
                  x="293.75"
                  y="363.15"
                  width="16"
                  height="16"
                  transform="translate(-69.39 672.9) rotate(-90)"
                  id="rect6830" />
               <rect
                  class="mista"
                  x="272.94"
                  y="668.61"
                  width="16"
                  height="16"
                  transform="translate(-395.67 957.55) rotate(-90)"
                  id="rect6832" />
               <rect
                  class="mista"
                  x="330.63"
                  y="668.61"
                  width="16"
                  height="16"
                  transform="translate(-337.97 1015.24) rotate(-90)"
                  id="rect6834" />
               <rect
                  class="mista"
                  x="311.3"
                  y="690.73"
                  width="16"
                  height="16"
                  transform="translate(-379.43 1018.03) rotate(-90)"
                  id="rect6836" />
               <rect
                  class="mista"
                  x="292.27"
                  y="690.73"
                  width="16"
                  height="16"
                  transform="translate(-398.46 999.01) rotate(-90)"
                  id="rect6838" />
               <rect
                  class="mista"
                  x="311.3"
                  y="646.48"
                  width="16"
                  height="16"
                  transform="translate(-335.18 973.78) rotate(-90)"
                  id="rect6840" />
               <rect
                  class="mista"
                  x="292.27"
                  y="646.48"
                  width="16"
                  height="16"
                  transform="translate(-354.21 954.75) rotate(-90)"
                  id="rect6842" />
               <rect
                  class="mista"
                  x="361.11"
                  y="668.61"
                  width="16"
                  height="16"
                  transform="translate(-307.5 1045.71) rotate(-90)"
                  id="rect6844" />
               <rect
                  class="mista"
                  x="418.8"
                  y="668.61"
                  width="16"
                  height="16"
                  transform="translate(-249.8 1103.41) rotate(-90)"
                  id="rect6846" />
               <rect
                  class="mista"
                  x="399.47"
                  y="690.73"
                  width="16"
                  height="16"
                  transform="translate(-291.27 1106.2) rotate(-90)"
                  id="rect6848" />
               <rect
                  class="mista"
                  x="380.44"
                  y="690.73"
                  width="16"
                  height="16"
                  transform="translate(-310.29 1087.17) rotate(-90)"
                  id="rect6850" />
               <rect
                  class="mista"
                  x="399.47"
                  y="646.48"
                  width="16"
                  height="16"
                  transform="translate(-247.01 1061.95) rotate(-90)"
                  id="rect6852" />
               <rect
                  class="mista"
                  x="380.44"
                  y="646.48"
                  width="16"
                  height="16"
                  transform="translate(-266.04 1042.92) rotate(-90)"
                  id="rect6854" />
               <rect
                  class="mista"
                  x="361.11"
                  y="740.61"
                  width="16"
                  height="16"
                  transform="translate(-379.5 1117.71) rotate(-90)"
                  id="rect6856" />
               <rect
                  class="mista"
                  x="418.8"
                  y="740.61"
                  width="16"
                  height="16"
                  transform="translate(-321.8 1175.41) rotate(-90)"
                  id="rect6858" />
               <rect
                  class="mista"
                  x="399.47"
                  y="762.73"
                  width="16"
                  height="16"
                  transform="translate(-363.27 1178.2) rotate(-90)"
                  id="rect6860" />
               <rect
                  class="mista"
                  x="380.44"
                  y="762.73"
                  width="16"
                  height="16"
                  transform="translate(-382.29 1159.17) rotate(-90)"
                  id="rect6862" />
               <rect
                  class="mista"
                  x="399.47"
                  y="718.48"
                  width="16"
                  height="16"
                  transform="translate(-319.01 1133.95) rotate(-90)"
                  id="rect6864" />
               <rect
                  class="mista"
                  x="380.44"
                  y="718.48"
                  width="16"
                  height="16"
                  transform="translate(-338.04 1114.92) rotate(-90)"
                  id="rect6866" />
               <rect
                  class="mista"
                  x="272.94"
                  y="740.61"
                  width="16"
                  height="16"
                  transform="translate(-467.67 1029.55) rotate(-90)"
                  id="rect6868" />
               <rect
                  class="mista"
                  x="330.63"
                  y="740.61"
                  width="16"
                  height="16"
                  transform="translate(-409.97 1087.24) rotate(-90)"
                  id="rect6870" />
               <rect
                  class="mista"
                  x="311.3"
                  y="762.73"
                  width="16"
                  height="16"
                  transform="translate(-451.43 1090.03) rotate(-90)"
                  id="rect6872" />
               <rect
                  class="mista"
                  x="292.27"
                  y="762.73"
                  width="16"
                  height="16"
                  transform="translate(-470.46 1071.01) rotate(-90)"
                  id="rect6874" />
               <rect
                  class="mista"
                  x="311.3"
                  y="718.48"
                  width="16"
                  height="16"
                  transform="translate(-407.18 1045.78) rotate(-90)"
                  id="rect6876" />
               <rect
                  class="mista"
                  x="292.27"
                  y="718.48"
                  width="16"
                  height="16"
                  transform="translate(-426.21 1026.75) rotate(-90)"
                  id="rect6878" />
               <rect
                  class="mista"
                  x="100.14"
                  y="696.61"
                  width="16"
                  height="16"
                  transform="translate(-596.46 812.75) rotate(-90)"
                  id="rect6880" />
               <rect
                  class="mista"
                  x="157.84"
                  y="696.61"
                  width="16"
                  height="16"
                  transform="translate(-538.77 870.45) rotate(-90)"
                  id="rect6882" />
               <rect
                  class="mista"
                  x="138.5"
                  y="718.73"
                  width="16"
                  height="16"
                  transform="translate(-580.23 873.24) rotate(-90)"
                  id="rect6884" />
               <rect
                  class="mista"
                  x="119.48"
                  y="718.73"
                  width="16"
                  height="16"
                  transform="translate(-599.25 854.21) rotate(-90)"
                  id="rect6886" />
               <rect
                  class="mista"
                  x="138.5"
                  y="674.48"
                  width="16"
                  height="16"
                  transform="translate(-535.98 828.98) rotate(-90)"
                  id="rect6888" />
               <rect
                  class="mista"
                  x="119.48"
                  y="674.48"
                  width="16"
                  height="16"
                  transform="translate(-555 809.96) rotate(-90)"
                  id="rect6890" />
               <rect
                  class="mista"
                  x="188.31"
                  y="696.61"
                  width="16"
                  height="16"
                  transform="translate(-508.3 900.92) rotate(-90)"
                  id="rect6892" />
               <rect
                  class="mista"
                  x="246.01"
                  y="696.61"
                  width="16"
                  height="16"
                  transform="translate(-450.6 958.61) rotate(-90)"
                  id="rect6894" />
               <rect
                  class="mista"
                  x="226.67"
                  y="718.73"
                  width="16"
                  height="16"
                  transform="translate(-492.06 961.4) rotate(-90)"
                  id="rect6896" />
               <rect
                  class="mista"
                  x="207.65"
                  y="718.73"
                  width="16"
                  height="16"
                  transform="translate(-511.09 942.38) rotate(-90)"
                  id="rect6898" />
               <rect
                  class="mista"
                  x="226.67"
                  y="674.48"
                  width="16"
                  height="16"
                  transform="translate(-447.81 917.15) rotate(-90)"
                  id="rect6900" />
               <rect
                  class="mista"
                  x="207.65"
                  y="674.48"
                  width="16"
                  height="16"
                  transform="translate(-466.83 898.13) rotate(-90)"
                  id="rect6902" />
               <rect
                  class="mista"
                  x="188.31"
                  y="768.61"
                  width="16"
                  height="16"
                  transform="translate(-580.3 972.92) rotate(-90)"
                  id="rect6904" />
               <rect
                  class="mista"
                  x="246.01"
                  y="768.61"
                  width="16"
                  height="16"
                  transform="translate(-522.6 1030.61) rotate(-90)"
                  id="rect6906" />
               <rect
                  class="mista"
                  x="226.67"
                  y="790.73"
                  width="16"
                  height="16"
                  transform="translate(-564.06 1033.4) rotate(-90)"
                  id="rect6908" />
               <rect
                  class="mista"
                  x="207.65"
                  y="790.73"
                  width="16"
                  height="16"
                  transform="translate(-583.09 1014.38) rotate(-90)"
                  id="rect6910" />
               <rect
                  class="mista"
                  x="226.67"
                  y="746.48"
                  width="16"
                  height="16"
                  transform="translate(-519.81 989.15) rotate(-90)"
                  id="rect6912" />
               <rect
                  class="mista"
                  x="207.65"
                  y="746.48"
                  width="16"
                  height="16"
                  transform="translate(-538.83 970.13) rotate(-90)"
                  id="rect6914" />
               <rect
                  class="mista"
                  x="100.14"
                  y="768.61"
                  width="16"
                  height="16"
                  transform="translate(-668.46 884.75) rotate(-90)"
                  id="rect6916" />
               <rect
                  class="mista"
                  x="157.84"
                  y="768.61"
                  width="16"
                  height="16"
                  transform="translate(-610.77 942.45) rotate(-90)"
                  id="rect6918" />
               <rect
                  class="mista"
                  x="138.5"
                  y="790.73"
                  width="16"
                  height="16"
                  transform="translate(-652.23 945.24) rotate(-90)"
                  id="rect6920" />
               <rect
                  class="mista"
                  x="119.48"
                  y="790.73"
                  width="16"
                  height="16"
                  transform="translate(-671.25 926.21) rotate(-90)"
                  id="rect6922" />
               <rect
                  class="mista"
                  x="138.5"
                  y="746.48"
                  width="16"
                  height="16"
                  transform="translate(-607.98 900.98) rotate(-90)"
                  id="rect6924" />
               <rect
                  class="mista"
                  x="119.48"
                  y="746.48"
                  width="16"
                  height="16"
                  transform="translate(-627 881.96) rotate(-90)"
                  id="rect6926" />
               <rect
                  class="mista"
                  x="355.35"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect6928" />
               <rect
                  class="mista"
                  x="355.35"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect6930" />
               <rect
                  class="mista"
                  x="333.22"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6932" />
               <rect
                  class="mista"
                  x="333.22"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6934" />
               <rect
                  class="mista"
                  x="377.48"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6936" />
               <rect
                  class="mista"
                  x="377.48"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6938" />
               <rect
                  class="mista"
                  x="433.73"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect6940" />
               <rect
                  class="mista"
                  x="433.73"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect6942" />
               <rect
                  class="mista"
                  x="411.6"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6944" />
               <rect
                  class="mista"
                  x="411.6"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6946" />
               <rect
                  class="mista"
                  x="455.86"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6948" />
               <rect
                  class="mista"
                  x="455.86"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6950" />
               <rect
                  class="mista"
                  x="508.61"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect6952" />
               <rect
                  class="mista"
                  x="508.61"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect6954" />
               <rect
                  class="mista"
                  x="486.48"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6956" />
               <rect
                  class="mista"
                  x="486.48"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6958" />
               <rect
                  class="mista"
                  x="530.73"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6960" />
               <rect
                  class="mista"
                  x="530.73"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6962" />
               <rect
                  class="mista"
                  x="583.73"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect6964" />
               <rect
                  class="mista"
                  x="583.73"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect6966" />
               <rect
                  class="mista"
                  x="561.6"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6968" />
               <rect
                  class="mista"
                  x="561.6"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6970" />
               <rect
                  class="mista"
                  x="605.86"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6972" />
               <rect
                  class="mista"
                  x="605.86"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6974" />
               <rect
                  class="mista"
                  x="662.11"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect6976" />
               <rect
                  class="mista"
                  x="662.11"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect6978" />
               <rect
                  class="mista"
                  x="639.98"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6980" />
               <rect
                  class="mista"
                  x="639.98"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6982" />
               <rect
                  class="mista"
                  x="684.24"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6984" />
               <rect
                  class="mista"
                  x="684.24"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6986" />
               <rect
                  class="mista"
                  x="737.88"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect6988" />
               <rect
                  class="mista"
                  x="737.88"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect6990" />
               <rect
                  class="mista"
                  x="715.75"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6992" />
               <rect
                  class="mista"
                  x="715.75"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6994" />
               <rect
                  class="mista"
                  x="760.01"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect6996" />
               <rect
                  class="mista"
                  x="760.01"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect6998" />
               <rect
                  class="mista"
                  x="829"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect7000" />
               <rect
                  class="mista"
                  x="829"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect7002" />
               <rect
                  class="mista"
                  x="806.87"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7004" />
               <rect
                  class="mista"
                  x="806.87"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7006" />
               <rect
                  class="mista"
                  x="851.13"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7008" />
               <rect
                  class="mista"
                  x="851.13"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7010" />
               <rect
                  class="mista"
                  x="905.38"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect7012" />
               <rect
                  class="mista"
                  x="905.38"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect7014" />
               <rect
                  class="mista"
                  x="883.25"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7016" />
               <rect
                  class="mista"
                  x="883.25"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7018" />
               <rect
                  class="mista"
                  x="927.51"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7020" />
               <rect
                  class="mista"
                  x="927.51"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7022" />
               <rect
                  class="mista"
                  x="981.76"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect7024" />
               <rect
                  class="mista"
                  x="981.76"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect7026" />
               <rect
                  class="mista"
                  x="959.63"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7028" />
               <rect
                  class="mista"
                  x="959.63"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7030" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7032" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7034" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect7036" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect7038" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7040" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7042" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7044" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7046" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect7048" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect7050" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7052" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7054" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7056" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7058" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="21.69"
                  width="16"
                  height="16"
                  id="rect7060" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="79.39"
                  width="16"
                  height="16"
                  id="rect7062" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7064" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7066" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="60.05"
                  width="16"
                  height="16"
                  id="rect7068" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="41.03"
                  width="16"
                  height="16"
                  id="rect7070" />
               <rect
                  class="mista"
                  x="508.61"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7072" />
               <rect
                  class="mista"
                  x="508.61"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7074" />
               <rect
                  class="mista"
                  x="486.48"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7076" />
               <rect
                  class="mista"
                  x="486.48"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7078" />
               <rect
                  class="mista"
                  x="530.73"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7080" />
               <rect
                  class="mista"
                  x="530.73"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7082" />
               <rect
                  class="mista"
                  x="583.73"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7084" />
               <rect
                  class="mista"
                  x="583.73"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7086" />
               <rect
                  class="mista"
                  x="561.6"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7088" />
               <rect
                  class="mista"
                  x="561.6"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7090" />
               <rect
                  class="mista"
                  x="605.86"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7092" />
               <rect
                  class="mista"
                  x="605.86"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7094" />
               <rect
                  class="mista"
                  x="662.11"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7096" />
               <rect
                  class="mista"
                  x="662.11"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7098" />
               <rect
                  class="mista"
                  x="639.98"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7100" />
               <rect
                  class="mista"
                  x="639.98"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7102" />
               <rect
                  class="mista"
                  x="684.24"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7104" />
               <rect
                  class="mista"
                  x="684.24"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7106" />
               <rect
                  class="mista"
                  x="737.88"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7108" />
               <rect
                  class="mista"
                  x="737.88"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7110" />
               <rect
                  class="mista"
                  x="715.75"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7112" />
               <rect
                  class="mista"
                  x="715.75"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7114" />
               <rect
                  class="mista"
                  x="760.01"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7116" />
               <rect
                  class="mista"
                  x="760.01"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7118" />
               <rect
                  class="mista"
                  x="829"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7120" />
               <rect
                  class="mista"
                  x="829"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7122" />
               <rect
                  class="mista"
                  x="806.87"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7124" />
               <rect
                  class="mista"
                  x="806.87"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7126" />
               <rect
                  class="mista"
                  x="851.13"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7128" />
               <rect
                  class="mista"
                  x="851.13"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7130" />
               <rect
                  class="mista"
                  x="905.38"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7132" />
               <rect
                  class="mista"
                  x="905.38"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7134" />
               <rect
                  class="mista"
                  x="883.25"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7136" />
               <rect
                  class="mista"
                  x="883.25"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7138" />
               <rect
                  class="mista"
                  x="927.51"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7140" />
               <rect
                  class="mista"
                  x="927.51"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7142" />
               <rect
                  class="mista"
                  x="981.76"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7144" />
               <rect
                  class="mista"
                  x="981.76"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7146" />
               <rect
                  class="mista"
                  x="959.63"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7148" />
               <rect
                  class="mista"
                  x="959.63"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7150" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7152" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7154" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7156" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7158" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7160" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7162" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7164" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7166" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7168" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7170" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7172" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7174" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7176" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7178" />
               <rect
                  class="mista"
                  x="355.35"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7180" />
               <rect
                  class="mista"
                  x="355.35"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7182" />
               <rect
                  class="mista"
                  x="333.22"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7184" />
               <rect
                  class="mista"
                  x="333.22"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7186" />
               <rect
                  class="mista"
                  x="377.48"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7188" />
               <rect
                  class="mista"
                  x="377.48"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7190" />
               <rect
                  class="mista"
                  x="433.73"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7192" />
               <rect
                  class="mista"
                  x="433.73"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7194" />
               <rect
                  class="mista"
                  x="411.6"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7196" />
               <rect
                  class="mista"
                  x="411.6"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7198" />
               <rect
                  class="mista"
                  x="455.86"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7200" />
               <rect
                  class="mista"
                  x="455.86"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7202" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="977.44"
                  width="16"
                  height="16"
                  id="rect7204" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="1035.14"
                  width="16"
                  height="16"
                  id="rect7206" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7208" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7210" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="1015.8"
                  width="16"
                  height="16"
                  id="rect7212" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="996.78"
                  width="16"
                  height="16"
                  id="rect7214" />
               <rect
                  class="mista"
                  x="280.23"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7216" />
               <rect
                  class="mista"
                  x="280.23"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7218" />
               <rect
                  class="mista"
                  x="258.1"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7220" />
               <rect
                  class="mista"
                  x="258.1"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7222" />
               <rect
                  class="mista"
                  x="302.35"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7224" />
               <rect
                  class="mista"
                  x="302.35"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7226" />
               <rect
                  class="mista"
                  x="355.35"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7228" />
               <rect
                  class="mista"
                  x="355.35"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7230" />
               <rect
                  class="mista"
                  x="333.22"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7232" />
               <rect
                  class="mista"
                  x="333.22"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7234" />
               <rect
                  class="mista"
                  x="377.48"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7236" />
               <rect
                  class="mista"
                  x="377.48"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7238" />
               <rect
                  class="mista"
                  x="433.73"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7240" />
               <rect
                  class="mista"
                  x="433.73"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7242" />
               <rect
                  class="mista"
                  x="411.6"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7244" />
               <rect
                  class="mista"
                  x="411.6"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7246" />
               <rect
                  class="mista"
                  x="455.86"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7248" />
               <rect
                  class="mista"
                  x="455.86"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7250" />
               <rect
                  class="mista"
                  x="508.61"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7252" />
               <rect
                  class="mista"
                  x="508.61"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7254" />
               <rect
                  class="mista"
                  x="486.48"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7256" />
               <rect
                  class="mista"
                  x="486.48"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7258" />
               <rect
                  class="mista"
                  x="530.73"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7260" />
               <rect
                  class="mista"
                  x="530.73"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7262" />
               <rect
                  class="mista"
                  x="583.73"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7264" />
               <rect
                  class="mista"
                  x="583.73"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7266" />
               <rect
                  class="mista"
                  x="561.6"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7268" />
               <rect
                  class="mista"
                  x="561.6"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7270" />
               <rect
                  class="mista"
                  x="605.86"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7272" />
               <rect
                  class="mista"
                  x="605.86"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7274" />
               <rect
                  class="mista"
                  x="662.11"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7276" />
               <rect
                  class="mista"
                  x="662.11"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7278" />
               <rect
                  class="mista"
                  x="639.98"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7280" />
               <rect
                  class="mista"
                  x="639.98"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7282" />
               <rect
                  class="mista"
                  x="684.24"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7284" />
               <rect
                  class="mista"
                  x="684.24"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7286" />
               <rect
                  class="mista"
                  x="737.88"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7288" />
               <rect
                  class="mista"
                  x="737.88"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7290" />
               <rect
                  class="mista"
                  x="715.75"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7292" />
               <rect
                  class="mista"
                  x="715.75"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7294" />
               <rect
                  class="mista"
                  x="760.01"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7296" />
               <rect
                  class="mista"
                  x="760.01"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7298" />
               <rect
                  class="mista"
                  x="829"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7300" />
               <rect
                  class="mista"
                  x="829"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7302" />
               <rect
                  class="mista"
                  x="806.87"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7304" />
               <rect
                  class="mista"
                  x="806.87"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7306" />
               <rect
                  class="mista"
                  x="851.13"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7308" />
               <rect
                  class="mista"
                  x="851.13"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7310" />
               <rect
                  class="mista"
                  x="905.38"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7312" />
               <rect
                  class="mista"
                  x="905.38"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7314" />
               <rect
                  class="mista"
                  x="883.25"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7316" />
               <rect
                  class="mista"
                  x="883.25"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7318" />
               <rect
                  class="mista"
                  x="927.51"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7320" />
               <rect
                  class="mista"
                  x="927.51"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7322" />
               <rect
                  class="mista"
                  x="981.76"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7324" />
               <rect
                  class="mista"
                  x="981.76"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7326" />
               <rect
                  class="mista"
                  x="959.63"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7328" />
               <rect
                  class="mista"
                  x="959.63"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7330" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7332" />
               <rect
                  class="mista"
                  x="1003.89"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7334" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7336" />
               <rect
                  class="mista"
                  x="1058.14"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7338" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7340" />
               <rect
                  class="mista"
                  x="1036.01"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7342" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7344" />
               <rect
                  class="mista"
                  x="1080.27"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7346" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7348" />
               <rect
                  class="mista"
                  x="1134.52"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7350" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7352" />
               <rect
                  class="mista"
                  x="1112.39"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7354" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7356" />
               <rect
                  class="mista"
                  x="1156.65"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7358" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="890"
                  width="16"
                  height="16"
                  id="rect7360" />
               <rect
                  class="mista"
                  x="1210.9"
                  y="947.69"
                  width="16"
                  height="16"
                  id="rect7362" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7364" />
               <rect
                  class="mista"
                  x="1188.77"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7366" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="928.36"
                  width="16"
                  height="16"
                  id="rect7368" />
               <rect
                  class="mista"
                  x="1233.03"
                  y="909.33"
                  width="16"
                  height="16"
                  id="rect7370" />
            </g>
            <rect
               class="stoly"
               x="274.1"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5738" />
            <text
               class="text"
               transform="translate(278.12 152.26)"
               id="text5742"><tspan
                  x="0"
                  y="0"
                  id="tspan5740">81</tspan></text>
            <rect
               class="stoly"
               x="296.08"
               y="443.21"
               width="28.25"
               height="41.7"
               id="rect5744" />
            <text
               class="text"
               transform="translate(300.11 470.34)"
               id="text5748"><tspan
                  x="0"
                  y="0"
                  id="tspan5746">44</tspan></text>
            <rect
               class="stoly"
               x="383.89"
               y="443.21"
               width="28.25"
               height="41.7"
               id="rect5750" />
            <text
               class="text"
               transform="translate(387.91 470.34)"
               id="text5754"><tspan
                  x="0"
                  y="0"
                  id="tspan5752">39</tspan></text>
            <rect
               class="stoly"
               x="502.48"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5756" />
            <text
               class="text"
               transform="translate(506.5 152.26)"
               id="text5760"><tspan
                  x="0"
                  y="0"
                  id="tspan5758">78</tspan></text>
            <rect
               class="stoly"
               x="577.6"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5762" />
            <text
               class="text"
               transform="translate(581.63 152.26)"
               id="text5766"><tspan
                  x="0"
                  y="0"
                  id="tspan5764">77</tspan></text>
            <rect
               class="stoly"
               x="655.98"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5768" />
            <text
               class="text"
               transform="translate(660.01 152.26)"
               id="text5772"><tspan
                  x="0"
                  y="0"
                  id="tspan5770">76</tspan></text>
            <rect
               class="stoly"
               x="731.75"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5774" />
            <text
               class="text"
               transform="translate(735.78 152.26)"
               id="text5778"><tspan
                  x="0"
                  y="0"
                  id="tspan5776">75</tspan></text>
            <rect
               class="stoly"
               x="822.87"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5780" />
            <text
               class="text"
               transform="translate(826.9 152.26)"
               id="text5784"><tspan
                  x="0"
                  y="0"
                  id="tspan5782">74</tspan></text>
            <rect
               class="stoly"
               x="899.25"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5786" />
            <text
               class="text"
               transform="translate(903.28 152.26)"
               id="text5790"><tspan
                  x="0"
                  y="0"
                  id="tspan5788">73</tspan></text>
            <rect
               class="stoly"
               x="975.63"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5792" />
            <text
               class="text"
               transform="translate(979.66 152.26)"
               id="text5796"><tspan
                  x="0"
                  y="0"
                  id="tspan5794">72</tspan></text>
            <rect
               class="stoly"
               x="1052.01"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5798" />
            <text
               class="text"
               transform="translate(1056.04 152.26)"
               id="text5802"><tspan
                  x="0"
                  y="0"
                  id="tspan5800">71</tspan></text>
            <rect
               class="stoly"
               x="1128.39"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5804" />
            <text
               class="text"
               transform="translate(1132.42 152.26)"
               id="text5808"><tspan
                  x="0"
                  y="0"
                  id="tspan5806">70</tspan></text>
            <rect
               class="stoly"
               x="296.08"
               y="521.14"
               width="28.25"
               height="41.7"
               id="rect5810" />
            <text
               class="text"
               transform="translate(300.11 548.27)"
               id="text5814"><tspan
                  x="0"
                  y="0"
                  id="tspan5812">45</tspan></text>
            <rect
               class="stoly"
               x="383.89"
               y="521.14"
               width="28.25"
               height="41.7"
               id="rect5816" />
            <text
               class="text"
               transform="translate(387.91 548.27)"
               id="text5820"><tspan
                  x="0"
                  y="0"
                  id="tspan5818">38</tspan></text>
            <rect
               class="stoly"
               x="349.22"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5822" />
            <text
               class="text"
               transform="translate(353.25 152.26)"
               id="text5826"><tspan
                  x="0"
                  y="0"
                  id="tspan5824">80</tspan></text>
            <rect
               class="stoly"
               x="427.6"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5828" />
            <text
               class="text"
               transform="translate(431.63 152.26)"
               id="text5832"><tspan
                  x="0"
                  y="0"
                  id="tspan5830">79</tspan></text>
            <rect
               class="stoly"
               x="349.22"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5834" />
            <text
               class="text"
               transform="translate(353.25 239.71)"
               id="text5838"><tspan
                  x="0"
                  y="0"
                  id="tspan5836">82</tspan></text>
            <rect
               class="stoly"
               x="427.6"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5840" />
            <text
               class="text"
               transform="translate(431.63 239.71)"
               id="text5844"><tspan
                  x="0"
                  y="0"
                  id="tspan5842">83</tspan></text>
            <rect
               class="stoly"
               x="502.48"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5846" />
            <text
               class="text"
               transform="translate(506.5 239.71)"
               id="text5850"><tspan
                  x="0"
                  y="0"
                  id="tspan5848">84</tspan></text>
            <rect
               class="stoly"
               x="577.6"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5852" />
            <text
               class="text"
               transform="translate(581.63 239.71)"
               id="text5856"><tspan
                  x="0"
                  y="0"
                  id="tspan5854">85</tspan></text>
            <rect
               class="stoly"
               x="655.98"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5858" />
            <text
               class="text"
               transform="translate(660.01 239.71)"
               id="text5862"><tspan
                  x="0"
                  y="0"
                  id="tspan5860">86</tspan></text>
            <rect
               class="stoly"
               x="731.75"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5864" />
            <text
               class="text"
               transform="translate(735.78 239.71)"
               id="text5868"><tspan
                  x="0"
                  y="0"
                  id="tspan5866">87</tspan></text>
            <rect
               class="stoly"
               x="899.25"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5870" />
            <text
               class="text"
               transform="translate(903.28 239.71)"
               id="text5874"><tspan
                  x="0"
                  y="0"
                  id="tspan5872">88</tspan></text>
            <rect
               class="stoly"
               x="975.63"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5876" />
            <text
               class="text"
               transform="translate(979.66 239.71)"
               id="text5880"><tspan
                  x="0"
                  y="0"
                  id="tspan5878">89</tspan></text>
            <rect
               class="stoly"
               x="1052.01"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5882" />
            <text
               class="text"
               transform="translate(1056.04 239.71)"
               id="text5886"><tspan
                  x="0"
                  y="0"
                  id="tspan5884">90</tspan></text>
            <rect
               class="stoly"
               x="1128.39"
               y="212.58"
               width="28.25"
               height="41.7"
               id="rect5888" />
            <text
               class="text"
               transform="translate(1132.42 239.71)"
               id="text5892"><tspan
                  x="0"
                  y="0"
                  id="tspan5890">91</tspan></text>
            <rect
               class="stoly"
               x="349.22"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5894" />
            <text
               class="text"
               transform="translate(353.25 840.65)"
               id="text5898"><tspan
                  x="0"
                  y="0"
                  id="tspan5896">35</tspan></text>
            <rect
               class="stoly"
               x="427.6"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5900" />
            <text
               class="text"
               transform="translate(431.63 840.65)"
               id="text5904"><tspan
                  x="0"
                  y="0"
                  id="tspan5902">34</tspan></text>
            <rect
               class="stoly"
               x="502.48"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5906" />
            <text
               class="text"
               transform="translate(506.5 840.65)"
               id="text5910"><tspan
                  x="0"
                  y="0"
                  id="tspan5908">33</tspan></text>
            <rect
               class="stoly"
               x="577.6"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5912" />
            <text
               class="text"
               transform="translate(581.63 840.65)"
               id="text5916"><tspan
                  x="0"
                  y="0"
                  id="tspan5914">32</tspan></text>
            <rect
               class="stoly"
               x="655.98"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5918" />
            <text
               class="text"
               transform="translate(660.01 840.65)"
               id="text5922"><tspan
                  x="0"
                  y="0"
                  id="tspan5920">31</tspan></text>
            <rect
               class="stoly"
               x="731.75"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5924" />
            <text
               class="text"
               transform="translate(735.78 840.65)"
               id="text5928"><tspan
                  x="0"
                  y="0"
                  id="tspan5926">30</tspan></text>
            <rect
               class="stoly"
               x="899.25"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5930" />
            <text
               class="text"
               transform="translate(903.28 840.65)"
               id="text5934"><tspan
                  x="0"
                  y="0"
                  id="tspan5932">29</tspan></text>
            <rect
               class="stoly"
               x="975.63"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5936" />
            <text
               class="text"
               transform="translate(979.66 840.65)"
               id="text5940"><tspan
                  x="0"
                  y="0"
                  id="tspan5938">28</tspan></text>
            <rect
               class="stoly"
               x="1052.01"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5942" />
            <text
               class="text"
               transform="translate(1056.04 840.65)"
               id="text5946"><tspan
                  x="0"
                  y="0"
                  id="tspan5944">27</tspan></text>
            <rect
               class="stoly"
               x="1128.39"
               y="813.52"
               width="28.25"
               height="41.7"
               id="rect5948" />
            <text
               class="text"
               transform="translate(1132.42 840.65)"
               id="text5952"><tspan
                  x="0"
                  y="0"
                  id="tspan5950">26</tspan></text>
            <rect
               class="stoly"
               x="1204.77"
               y="125.13"
               width="28.25"
               height="41.7"
               id="rect5954" />
            <text
               class="text"
               transform="translate(1208.8 152.26)"
               id="text5958"><tspan
                  x="0"
                  y="0"
                  id="tspan5956">69</tspan></text>
            <rect
               class="stoly"
               x="274.1"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect5960" />
            <text
               class="text"
               transform="translate(278.12 64.82)"
               id="text5964"><tspan
                  x="0"
                  y="0"
                  id="tspan5962">56</tspan></text>
            <rect
               class="stoly"
               x="122.86"
               y="285.55"
               width="28.25"
               height="41.7"
               transform="translate(-169.41 443.39) rotate(-90)"
               id="rect5966" />
            <text
               class="text"
               transform="translate(126.89 312.55)"
               id="text5970"><tspan
                  x="0"
                  y="0"
                  id="tspan5968">52</tspan></text>
            <rect
               class="stoly"
               x="211.03"
               y="285.55"
               width="28.25"
               height="41.7"
               transform="translate(-81.24 531.56) rotate(-90)"
               id="rect5972" />
            <text
               class="text"
               transform="translate(215.06 312.55)"
               id="text5976"><tspan
                  x="0"
                  y="0"
                  id="tspan5974">51</tspan></text>
            <rect
               class="stoly"
               x="211.03"
               y="357.55"
               width="28.25"
               height="41.7"
               transform="translate(-153.24 603.56) rotate(-90)"
               id="rect5978" />
            <text
               class="text"
               transform="translate(215.06 384.55)"
               id="text5982"><tspan
                  x="0"
                  y="0"
                  id="tspan5980">50</tspan></text>
            <rect
               class="stoly"
               x="122.86"
               y="357.55"
               width="28.25"
               height="41.7"
               transform="translate(-241.41 515.39) rotate(-90)"
               id="rect5984" />
            <text
               class="text"
               transform="translate(126.89 384.55)"
               id="text5988"><tspan
                  x="0"
                  y="0"
                  id="tspan5986">53</tspan></text>
            <rect
               class="stoly"
               x="297.14"
               y="304.42"
               width="28.25"
               height="41.7"
               transform="translate(-14.01 636.54) rotate(-90)"
               id="rect5990" />
            <text
               class="text"
               transform="translate(301.16 331.42)"
               id="text5994"><tspan
                  x="0"
                  y="0"
                  id="tspan5992">42</tspan></text>
            <rect
               class="stoly"
               x="385.31"
               y="304.42"
               width="28.25"
               height="41.7"
               transform="translate(74.16 724.71) rotate(-90)"
               id="rect5996" />
            <text
               class="text"
               transform="translate(389.33 331.42)"
               id="text6000"><tspan
                  x="0"
                  y="0"
                  id="tspan5998">41</tspan></text>
            <rect
               class="stoly"
               x="385.31"
               y="372.42"
               width="28.25"
               height="41.7"
               transform="translate(6.16 792.71) rotate(-90)"
               id="rect6002" />
            <text
               class="text"
               transform="translate(389.33 399.42)"
               id="text6006"><tspan
                  x="0"
                  y="0"
                  id="tspan6004">40</tspan></text>
            <rect
               class="stoly"
               x="297.14"
               y="372.42"
               width="28.25"
               height="41.7"
               transform="translate(-82.01 704.54) rotate(-90)"
               id="rect6008" />
            <text
               class="text"
               transform="translate(301.16 399.42)"
               id="text6012"><tspan
                  x="0"
                  y="0"
                  id="tspan6010">43</tspan></text>
            <rect
               class="stoly"
               x="295.66"
               y="655.76"
               width="28.25"
               height="41.7"
               transform="translate(-366.82 986.39) rotate(-90)"
               id="rect6014" />
            <text
               class="text"
               transform="translate(299.68 682.76)"
               id="text6018"><tspan
                  x="0"
                  y="0"
                  id="tspan6016">46</tspan></text>
            <rect
               class="stoly"
               x="383.83"
               y="655.76"
               width="28.25"
               height="41.7"
               transform="translate(-278.65 1074.56) rotate(-90)"
               id="rect6020" />
            <text
               class="text"
               transform="translate(387.85 682.76)"
               id="text6024"><tspan
                  x="0"
                  y="0"
                  id="tspan6022">37</tspan></text>
            <rect
               class="stoly"
               x="383.83"
               y="727.76"
               width="28.25"
               height="41.7"
               transform="translate(-350.65 1146.56) rotate(-90)"
               id="rect6026" />
            <text
               class="text"
               transform="translate(387.85 754.76)"
               id="text6030"><tspan
                  x="0"
                  y="0"
                  id="tspan6028">36</tspan></text>
            <rect
               class="stoly"
               x="295.66"
               y="727.76"
               width="28.25"
               height="41.7"
               transform="translate(-438.82 1058.39) rotate(-90)"
               id="rect6032" />
            <text
               class="text"
               transform="translate(299.68 754.76)"
               id="text6036"><tspan
                  x="0"
                  y="0"
                  id="tspan6034">47</tspan></text>
            <rect
               class="stoly"
               x="122.86"
               y="683.76"
               width="28.25"
               height="41.7"
               transform="translate(-567.62 841.6) rotate(-90)"
               id="rect6038" />
            <text
               class="text"
               transform="translate(126.89 710.76)"
               id="text6042"><tspan
                  x="0"
                  y="0"
                  id="tspan6040">54</tspan></text>
            <rect
               class="stoly"
               x="211.03"
               y="683.76"
               width="28.25"
               height="41.7"
               transform="translate(-479.45 929.77) rotate(-90)"
               id="rect6044" />
            <text
               class="text"
               transform="translate(215.06 710.76)"
               id="text6048"><tspan
                  x="0"
                  y="0"
                  id="tspan6046">49</tspan></text>
            <rect
               class="stoly"
               x="211.03"
               y="755.76"
               width="28.25"
               height="41.7"
               transform="translate(-551.45 1001.77) rotate(-90)"
               id="rect6050" />
            <text
               class="text"
               transform="translate(215.06 782.76)"
               id="text6054"><tspan
                  x="0"
                  y="0"
                  id="tspan6052">48</tspan></text>
            <rect
               class="stoly"
               x="122.86"
               y="755.76"
               width="28.25"
               height="41.7"
               transform="translate(-639.62 913.6) rotate(-90)"
               id="rect6056" />
            <text
               class="text"
               transform="translate(126.89 782.76)"
               id="text6060"><tspan
                  x="0"
                  y="0"
                  id="tspan6058">55</tspan></text>
            <rect
               class="stoly"
               x="349.22"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6062" />
            <text
               class="text"
               transform="translate(353.25 64.82)"
               id="text6066"><tspan
                  x="0"
                  y="0"
                  id="tspan6064">57</tspan></text>
            <rect
               class="stoly"
               x="427.6"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6068" />
            <text
               class="text"
               transform="translate(431.63 64.82)"
               id="text6072"><tspan
                  x="0"
                  y="0"
                  id="tspan6070">58</tspan></text>
            <rect
               class="stoly"
               x="502.48"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6074" />
            <text
               class="text"
               transform="translate(506.5 64.82)"
               id="text6078"><tspan
                  x="0"
                  y="0"
                  id="tspan6076">59</tspan></text>
            <rect
               class="stoly"
               x="577.6"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6080" />
            <text
               class="text"
               transform="translate(581.63 64.82)"
               id="text6084"><tspan
                  x="0"
                  y="0"
                  id="tspan6082">60</tspan></text>
            <rect
               class="stoly"
               x="655.98"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6086" />
            <text
               class="text"
               transform="translate(660.01 64.82)"
               id="text6090"><tspan
                  x="0"
                  y="0"
                  id="tspan6088">61</tspan></text>
            <rect
               class="stoly"
               x="731.75"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6092" />
            <text
               class="text"
               transform="translate(735.78 64.82)"
               id="text6096"><tspan
                  x="0"
                  y="0"
                  id="tspan6094">62</tspan></text>
            <rect
               class="stoly"
               x="822.87"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6098" />
            <text
               class="text"
               transform="translate(826.9 64.82)"
               id="text6102"><tspan
                  x="0"
                  y="0"
                  id="tspan6100">63</tspan></text>
            <rect
               class="stoly"
               x="899.25"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6104" />
            <text
               class="text"
               transform="translate(903.28 64.82)"
               id="text6108"><tspan
                  x="0"
                  y="0"
                  id="tspan6106">64</tspan></text>
            <rect
               class="stoly"
               x="975.63"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6110" />
            <text
               class="text"
               transform="translate(979.66 64.82)"
               id="text6114"><tspan
                  x="0"
                  y="0"
                  id="tspan6112">65</tspan></text>
            <rect
               class="stoly"
               x="1052.01"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6116" />
            <text
               class="text"
               transform="translate(1056.04 64.82)"
               id="text6120"><tspan
                  x="0"
                  y="0"
                  id="tspan6118">66</tspan></text>
            <rect
               class="stoly"
               x="1128.39"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6122" />
            <text
               class="text"
               transform="translate(1132.42 64.82)"
               id="text6126"><tspan
                  x="0"
                  y="0"
                  id="tspan6124">67</tspan></text>
            <rect
               class="stoly"
               x="1204.77"
               y="37.69"
               width="28.25"
               height="41.7"
               id="rect6128" />
            <text
               class="text"
               transform="translate(1208.8 64.82)"
               id="text6132"><tspan
                  x="0"
                  y="0"
                  id="tspan6130">68</tspan></text>
            <rect
               class="stoly"
               x="502.48"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6134" />
            <text
               class="text"
               transform="translate(506.5 1020.57)"
               id="text6138"><tspan
                  x="0"
                  y="0"
                  id="tspan6136">10</tspan></text>
            <rect
               class="stoly"
               x="577.6"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6140" />
            <text
               class="text"
               transform="translate(586.68 1020.57)"
               id="text6144"><tspan
                  x="0"
                  y="0"
                  id="tspan6142">9</tspan></text>
            <rect
               class="stoly"
               x="655.98"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6146" />
            <text
               class="text"
               transform="translate(665.06 1020.57)"
               id="text6150"><tspan
                  x="0"
                  y="0"
                  id="tspan6148">8</tspan></text>
            <rect
               class="stoly"
               x="731.75"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6152" />
            <text
               class="text"
               transform="translate(740.83 1020.57)"
               id="text6156"><tspan
                  x="0"
                  y="0"
                  id="tspan6154">7</tspan></text>
            <rect
               class="stoly"
               x="822.87"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6158" />
            <text
               class="text"
               transform="translate(831.95 1020.57)"
               id="text6162"><tspan
                  x="0"
                  y="0"
                  id="tspan6160">6</tspan></text>
            <rect
               class="stoly"
               x="899.25"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6164" />
            <text
               class="text"
               transform="translate(908.33 1020.57)"
               id="text6168"><tspan
                  x="0"
                  y="0"
                  id="tspan6166">5</tspan></text>
            <rect
               class="stoly"
               x="975.63"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6170" />
            <text
               class="text"
               transform="translate(984.71 1020.57)"
               id="text6174"><tspan
                  x="0"
                  y="0"
                  id="tspan6172">4</tspan></text>
            <rect
               class="stoly"
               x="1052.01"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6176" />
            <text
               class="text"
               transform="translate(1061.09 1020.57)"
               id="text6180"><tspan
                  x="0"
                  y="0"
                  id="tspan6178">3</tspan></text>
            <rect
               class="stoly"
               x="1128.39"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6182" />
            <text
               class="text"
               transform="translate(1137.47 1020.57)"
               id="text6186"><tspan
                  x="0"
                  y="0"
                  id="tspan6184">2</tspan></text>
            <rect
               class="stoly"
               x="349.22"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6188" />
            <text
               class="text"
               transform="translate(353.25 1020.57)"
               id="text6192"><tspan
                  x="0"
                  y="0"
                  id="tspan6190">12</tspan></text>
            <rect
               class="stoly"
               x="427.6"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6194" />
            <text
               class="text"
               transform="translate(431.63 1020.57)"
               id="text6198"><tspan
                  x="0"
                  y="0"
                  id="tspan6196">11</tspan></text>
            <rect
               class="stoly"
               x="1204.77"
               y="993.44"
               width="28.25"
               height="41.7"
               id="rect6200" />
            <text
               class="text"
               transform="translate(1213.85 1020.57)"
               id="text6204"><tspan
                  x="0"
                  y="0"
                  id="tspan6202">1</tspan></text>
            <rect
               class="stoly"
               x="274.1"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6206" />
            <text
               class="text"
               transform="translate(278.12 933.13)"
               id="text6210"><tspan
                  x="0"
                  y="0"
                  id="tspan6208">13</tspan></text>
            <rect
               class="stoly"
               x="349.22"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6212" />
            <text
               class="text"
               transform="translate(353.25 933.13)"
               id="text6216"><tspan
                  x="0"
                  y="0"
                  id="tspan6214">14</tspan></text>
            <rect
               class="stoly"
               x="427.6"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6218" />
            <text
               class="text"
               transform="translate(431.63 933.13)"
               id="text6222"><tspan
                  x="0"
                  y="0"
                  id="tspan6220">15</tspan></text>
            <rect
               class="stoly"
               x="502.48"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6224" />
            <text
               class="text"
               transform="translate(506.5 933.13)"
               id="text6228"><tspan
                  x="0"
                  y="0"
                  id="tspan6226">16</tspan></text>
            <rect
               class="stoly"
               x="577.6"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6230" />
            <text
               class="text"
               transform="translate(581.63 933.13)"
               id="text6234"><tspan
                  x="0"
                  y="0"
                  id="tspan6232">17</tspan></text>
            <rect
               class="stoly"
               x="655.98"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6236" />
            <text
               class="text"
               transform="translate(660.01 933.13)"
               id="text6240"><tspan
                  x="0"
                  y="0"
                  id="tspan6238">18</tspan></text>
            <rect
               class="stoly"
               x="731.75"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6242" />
            <text
               class="text"
               transform="translate(735.78 933.13)"
               id="text6246"><tspan
                  x="0"
                  y="0"
                  id="tspan6244">19</tspan></text>
            <rect
               class="stoly"
               x="822.87"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6248" />
            <text
               class="text"
               transform="translate(826.9 933.13)"
               id="text6252"><tspan
                  x="0"
                  y="0"
                  id="tspan6250">20</tspan></text>
            <rect
               class="stoly"
               x="899.25"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6254" />
            <text
               class="text"
               transform="translate(903.28 933.13)"
               id="text6258"><tspan
                  x="0"
                  y="0"
                  id="tspan6256">21</tspan></text>
            <rect
               class="stoly"
               x="975.63"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6260" />
            <text
               class="text"
               transform="translate(979.66 933.13)"
               id="text6264"><tspan
                  x="0"
                  y="0"
                  id="tspan6262">22</tspan></text>
            <rect
               class="stoly"
               x="1052.01"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6266" />
            <text
               class="text"
               transform="translate(1056.04 933.13)"
               id="text6270"><tspan
                  x="0"
                  y="0"
                  id="tspan6268">23</tspan></text>
            <rect
               class="stoly"
               x="1128.39"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6272" />
            <text
               class="text"
               transform="translate(1132.42 933.13)"
               id="text6276"><tspan
                  x="0"
                  y="0"
                  id="tspan6274">24</tspan></text>
            <rect
               class="stoly"
               x="1204.77"
               y="906"
               width="28.25"
               height="41.7"
               id="rect6278" />
            <text
               class="text"
               transform="translate(1208.8 933.13)"
               id="text7376"><tspan
                  x="0"
                  y="0"
                  id="tspan7374">25</tspan></text>
            <rect
               class="parket"
               x="447.04"
               y="314.4"
               width="652.78"
               height="462.21"
               id="rect7378" />
            <rect
               class="parket"
               x="1172.65"
               y="314.4"
               width="212.21"
               height="462.21"
               id="rect7380" />
            <rect
               class="zed"
               x="219.42"
               y="427.21"
               width="53.06"
               height="132.29"
               id="rect7382" />
            <polygon
               class=""
               points="296.35 283.94 281.39 303.94 266.43 283.94 246.43 268.98 266.43 254.02 281.39 234.02 296.35 254.02 316.35 268.98 296.35 283.94"
               id="polygon7384" />
            <polygon
               class="linka"
               points="854.66 283.94 839.7 303.94 824.73 283.94 804.73 268.98 824.73 254.02 839.7 234.02 854.66 254.02 874.66 268.98 854.66 283.94"
               id="polygon7386" />
            <polygon
               class="linka"
               points="1406.28 283.94 1391.32 303.94 1376.35 283.94 1356.35 268.98 1376.35 254.02 1391.32 234.02 1406.28 254.02 1426.28 268.98 1406.28 283.94"
               id="polygon7388" />
            <polygon
               class="linka"
               points="1406.28 835.99 1391.32 855.99 1376.35 835.99 1356.35 821.03 1376.35 806.06 1391.32 786.06 1406.28 806.06 1426.28 821.03 1406.28 835.99"
               id="polygon7390" />
            <polygon
               class="linka"
               points="854.66 835.99 839.7 855.99 824.73 835.99 804.73 821.03 824.73 806.06 839.7 786.06 854.66 806.06 874.66 821.03 854.66 835.99"
               id="polygon7392" />
            <polygon
               class="linka"
               points="296.35 835.99 281.39 855.99 266.43 835.99 246.43 821.03 266.43 806.06 281.39 786.06 296.35 806.06 316.35 821.03 296.35 835.99"
               id="polygon7394" />
            <text
               class="popis-cerny"
               transform="translate(693 550.69)"
               id="text7398"><tspan
                  x="0"
                  y="0"
                  id="tspan7396">taneční parket</tspan></text>
            <text
               class="popis-sedy"
               transform="translate(65 550.69)"
               id="text7402"><tspan
                  x="0"
                  y="0"
                  id="tspan7400">vstup</tspan></text>
            <text
               class="popis-cerny"
               transform="translate(1235.24 550.69)"
               id="text7406"><tspan
                  x="0"
                  y="0"
                  id="tspan7404">pódium</tspan></text>
            <rect
               class="linka"
               x="15.95"
               y="181.53"
               width="76.56"
               height="17.77"
               id="rect7408" />
            <rect
               class="linka"
               x="15.95"
               y="163.75"
               width="76.56"
               height="17.77"
               id="rect7410" />
            <rect
               class="linka"
               x="15.95"
               y="145.98"
               width="76.56"
               height="17.77"
               id="rect7412" />
            <rect
               class="linka"
               x="15.95"
               y="128.21"
               width="76.56"
               height="17.77"
               id="rect7414" />
            <rect
               class="linka"
               x="15.95"
               y="110.44"
               width="76.56"
               height="17.77"
               id="rect7416" />
            <rect
               class="linka"
               x="15.95"
               y="92.66"
               width="76.56"
               height="17.77"
               id="rect7418" />
            <rect
               class="linka"
               x="15.95"
               y="16.11"
               width="76.56"
               height="76.56"
               id="rect7420" />
            <rect
               class="linka"
               x="151.97"
               y="45.5"
               width="76.56"
               height="17.77"
               transform="translate(135.87 244.64) rotate(-90)"
               id="rect7422" />
            <rect
               class="linka"
               x="134.2"
               y="45.5"
               width="76.56"
               height="17.77"
               transform="translate(118.09 226.87) rotate(-90)"
               id="rect7424" />
            <rect
               class="linka"
               x="116.43"
               y="45.5"
               width="76.56"
               height="17.77"
               transform="translate(100.32 209.1) rotate(-90)"
               id="rect7426" />
            <rect
               class="linka"
               x="98.66"
               y="45.5"
               width="76.56"
               height="17.77"
               transform="translate(82.55 191.32) rotate(-90)"
               id="rect7428" />
            <rect
               class="linka"
               x="80.89"
               y="45.5"
               width="76.56"
               height="17.77"
               transform="translate(64.78 173.55) rotate(-90)"
               id="rect7430" />
            <rect
               class="linka"
               x="63.11"
               y="45.5"
               width="76.56"
               height="17.77"
               transform="translate(47.01 155.78) rotate(-90)"
               id="rect7432" />
            <rect
               class="linka"
               x="151.97"
               y="1016.73"
               width="76.56"
               height="17.77"
               transform="translate(-835.36 1215.87) rotate(-90)"
               id="rect7434" />
            <rect
               class="linka"
               x="134.2"
               y="1016.73"
               width="76.56"
               height="17.77"
               transform="translate(-853.13 1198.09) rotate(-90)"
               id="rect7436" />
            <rect
               class="linka"
               x="116.43"
               y="1016.73"
               width="76.56"
               height="17.77"
               transform="translate(-870.9 1180.32) rotate(-90)"
               id="rect7438" />
            <rect
               class="linka"
               x="98.66"
               y="1016.73"
               width="76.56"
               height="17.77"
               transform="translate(-888.68 1162.55) rotate(-90)"
               id="rect7440" />
            <rect
               class="linka"
               x="80.89"
               y="1016.73"
               width="76.56"
               height="17.77"
               transform="translate(-906.45 1144.78) rotate(-90)"
               id="rect7442" />
            <rect
               class="linka"
               x="63.11"
               y="1016.73"
               width="76.56"
               height="17.77"
               transform="translate(-924.22 1127.01) rotate(-90)"
               id="rect7444" />
            <rect
               class="linka"
               x="15.95"
               y="987.34"
               width="76.56"
               height="76.56"
               transform="translate(-971.39 1079.84) rotate(-90)"
               id="rect7446" />
            <rect
               class="linka"
               x="15.95"
               y="880.7"
               width="76.56"
               height="17.77"
               transform="translate(108.46 1779.18) rotate(180)"
               id="rect7448" />
            <rect
               class="linka"
               x="15.95"
               y="898.47"
               width="76.56"
               height="17.77"
               transform="translate(108.46 1814.72) rotate(180)"
               id="rect7450" />
            <rect
               class="linka"
               x="15.95"
               y="916.25"
               width="76.56"
               height="17.77"
               transform="translate(108.46 1850.27) rotate(180)"
               id="rect7452" />
            <rect
               class="linka"
               x="15.95"
               y="934.02"
               width="76.56"
               height="17.77"
               transform="translate(108.46 1885.81) rotate(180)"
               id="rect7454" />
            <rect
               class="linka"
               x="15.95"
               y="951.79"
               width="76.56"
               height="17.77"
               transform="translate(108.46 1921.35) rotate(180)"
               id="rect7456" />
            <rect
               class="linka"
               x="15.95"
               y="969.56"
               width="76.56"
               height="17.77"
               transform="translate(108.46 1956.9) rotate(180)"
               id="rect7458" />
            <polygon
               class="parket"
               points="15.95 599.18 15.95 483.82 52.63 541.5 15.95 599.18"
               id="polygon7460" />
            <polygon
               class="parket"
               points="37.36 213.61 71.1 213.61 54.23 228.62 37.36 213.61"
               id="polygon7462" />
            <polygon
               class="parket"
               points="71.1 865.7 37.36 865.7 54.23 850.69 71.1 865.7"
               id="polygon7464" />





         </svg>
         <svg
            version="1.1"
            id="Vrstva_galerie"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            viewBox="0 0 1440 1080"
         >
            <g
               id="tables"
               onClick={(e) => click(e)}>






               <rect
                  id="101"
                  data-name="101"
                  class="mista"
                  x="12.87"
                  y="876.76"
                  width="16.4"
                  height="16.4"
                  transform="translate(-619.59 274.1) rotate(-45)" />
               <rect
                  id="104"
                  data-name="104"
                  class="mista"
                  x="45.49"
                  y="909.37"
                  width="16.4"
                  height="16.4"
                  transform="translate(-633.1 306.71) rotate(-45)" />
               <rect
                  id="103"
                  data-name="103"
                  class="mista"
                  x="12.87"
                  y="909.37"
                  width="16.4"
                  height="16.4"
                  transform="translate(-642.65 283.65) rotate(-45)" />
               <rect
                  id="102"
                  data-name="102"
                  class="mista"
                  x="45.49"
                  y="876.76"
                  width="16.4"
                  height="16.4"
                  transform="translate(-610.04 297.16) rotate(-45)" />
               <rect
                  class="mista"
                  x="77.02"
                  y="876.76"
                  width="16.4"
                  height="16.4"
                  transform="translate(-600.8 319.46) rotate(-45)"
                  id="rect1129" />
               <rect
                  class="mista"
                  x="109.63"
                  y="909.37"
                  width="16.4"
                  height="16.4"
                  transform="translate(-614.31 352.07) rotate(-45)"
                  id="rect1131" />
               <rect
                  class="mista"
                  x="77.02"
                  y="909.37"
                  width="16.4"
                  height="16.4"
                  transform="translate(-623.86 329.01) rotate(-45)"
                  id="rect1133" />
               <rect
                  class="mista"
                  x="109.63"
                  y="876.76"
                  width="16.4"
                  height="16.4"
                  transform="translate(-591.25 342.52) rotate(-45)"
                  id="rect1135" />
               <rect
                  class="mista"
                  x="143.76"
                  y="876.76"
                  width="16.4"
                  height="16.4"
                  transform="translate(-581.25 366.65) rotate(-45)"
                  id="rect1137" />
               <rect
                  class="mista"
                  x="176.37"
                  y="909.37"
                  width="16.4"
                  height="16.4"
                  transform="translate(-594.76 399.26) rotate(-45)"
                  id="rect1139" />
               <rect
                  class="mista"
                  x="143.76"
                  y="909.37"
                  width="16.4"
                  height="16.4"
                  transform="translate(-604.31 376.2) rotate(-45)"
                  id="rect1141" />
               <rect
                  class="mista"
                  x="176.37"
                  y="876.76"
                  width="16.4"
                  height="16.4"
                  transform="translate(-571.7 389.71) rotate(-45)"
                  id="rect1143" />
               <rect
                  class="mista"
                  x="77.02"
                  y="812.61"
                  width="16.4"
                  height="16.4"
                  transform="translate(-555.44 300.67) rotate(-45)"
                  id="rect1145" />
               <rect
                  class="mista"
                  x="109.63"
                  y="845.23"
                  width="16.4"
                  height="16.4"
                  transform="translate(-568.95 333.28) rotate(-45)"
                  id="rect1147" />
               <rect
                  class="mista"
                  x="77.02"
                  y="845.23"
                  width="16.4"
                  height="16.4"
                  transform="translate(-578.51 310.22) rotate(-45)"
                  id="rect1149" />
               <rect
                  class="mista"
                  x="109.63"
                  y="812.61"
                  width="16.4"
                  height="16.4"
                  transform="translate(-545.89 323.73) rotate(-45)"
                  id="rect1151" />
               <rect
                  id="105"
                  data-name="105"
                  class="mista"
                  x="25.02"
                  y="719.3"
                  width="16.4"
                  height="16.4"
                  transform="translate(-504.69 236.57) rotate(-45)" />
               <rect
                  id="_108"
                  data-name="108"
                  class="mista"
                  x="57.64"
                  y="751.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-518.2 269.19) rotate(-45)" />
               <rect
                  id="107"
                  data-name="107"
                  class="mista"
                  x="25.02"
                  y="751.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-527.75 246.13) rotate(-45)" />
               <rect
                  id="106"
                  data-name="106"
                  class="mista"
                  x="57.64"
                  y="719.3"
                  width="16.4"
                  height="16.4"
                  transform="translate(-495.14 259.64) rotate(-45)" />
               <rect
                  class="mista"
                  x="25.02"
                  y="649.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-455.36 216.14) rotate(-45)"
                  id="rect1157" />
               <rect
                  class="mista"
                  x="57.64"
                  y="682.15"
                  width="16.4"
                  height="16.4"
                  transform="translate(-468.86 248.75) rotate(-45)"
                  id="rect1159" />
               <rect
                  class="mista"
                  x="25.02"
                  y="682.15"
                  width="16.4"
                  height="16.4"
                  transform="translate(-478.42 225.69) rotate(-45)"
                  id="rect1161" />
               <rect
                  class="mista"
                  x="57.64"
                  y="649.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-445.8 239.2) rotate(-45)"
                  id="rect1163" />
               <rect
                  class="mista"
                  x="25.02"
                  y="581.98"
                  width="16.4"
                  height="16.4"
                  transform="translate(-407.59 196.35) rotate(-45)"
                  id="rect1165" />
               <rect
                  class="mista"
                  x="57.64"
                  y="614.6"
                  width="16.4"
                  height="16.4"
                  transform="translate(-421.1 228.97) rotate(-45)"
                  id="rect1167" />
               <rect
                  class="mista"
                  x="25.02"
                  y="614.6"
                  width="16.4"
                  height="16.4"
                  transform="translate(-430.65 205.91) rotate(-45)"
                  id="rect1169" />
               <rect
                  class="mista"
                  x="57.64"
                  y="581.98"
                  width="16.4"
                  height="16.4"
                  transform="translate(-398.04 219.42) rotate(-45)"
                  id="rect1171" />
               <rect
                  class="mista"
                  x="25.02"
                  y="512.21"
                  width="16.4"
                  height="16.4"
                  transform="translate(-358.26 175.92) rotate(-45)"
                  id="rect1173" />
               <rect
                  class="mista"
                  x="57.64"
                  y="544.83"
                  width="16.4"
                  height="16.4"
                  transform="translate(-371.77 208.53) rotate(-45)"
                  id="rect1175" />
               <rect
                  class="mista"
                  x="25.02"
                  y="544.83"
                  width="16.4"
                  height="16.4"
                  transform="translate(-381.32 185.47) rotate(-45)"
                  id="rect1177" />
               <rect
                  class="mista"
                  x="57.64"
                  y="512.21"
                  width="16.4"
                  height="16.4"
                  transform="translate(-348.7 198.98) rotate(-45)"
                  id="rect1179" />
               <rect
                  class="mista"
                  x="25.02"
                  y="446.78"
                  width="16.4"
                  height="16.4"
                  transform="translate(-311.99 156.75) rotate(-45)"
                  id="rect1181" />
               <rect
                  class="mista"
                  x="57.64"
                  y="479.39"
                  width="16.4"
                  height="16.4"
                  transform="translate(-325.49 189.37) rotate(-45)"
                  id="rect1183" />
               <rect
                  class="mista"
                  x="25.02"
                  y="479.39"
                  width="16.4"
                  height="16.4"
                  transform="translate(-335.05 166.3) rotate(-45)"
                  id="rect1185" />
               <rect
                  class="mista"
                  x="57.64"
                  y="446.78"
                  width="16.4"
                  height="16.4"
                  transform="translate(-302.43 179.81) rotate(-45)"
                  id="rect1187" />
               <rect
                  class="mista"
                  x="25.02"
                  y="377.01"
                  width="16.4"
                  height="16.4"
                  transform="translate(-262.65 136.32) rotate(-45)"
                  id="rect1189" />
               <rect
                  class="mista"
                  x="57.64"
                  y="409.62"
                  width="16.4"
                  height="16.4"
                  transform="translate(-276.16 168.93) rotate(-45)"
                  id="rect1191" />
               <rect
                  class="mista"
                  x="25.02"
                  y="409.62"
                  width="16.4"
                  height="16.4"
                  transform="translate(-285.71 145.87) rotate(-45)"
                  id="rect1193" />
               <rect
                  class="mista"
                  x="57.64"
                  y="377.01"
                  width="16.4"
                  height="16.4"
                  transform="translate(-253.1 159.38) rotate(-45)"
                  id="rect1195" />
               <rect
                  class="mista"
                  x="25.02"
                  y="307.24"
                  width="16.4"
                  height="16.4"
                  transform="translate(-213.32 115.88) rotate(-45)"
                  id="rect1197" />
               <rect
                  class="mista"
                  x="57.64"
                  y="339.85"
                  width="16.4"
                  height="16.4"
                  transform="translate(-226.82 148.5) rotate(-45)"
                  id="rect1199" />
               <rect
                  class="mista"
                  x="25.02"
                  y="339.85"
                  width="16.4"
                  height="16.4"
                  transform="translate(-236.38 125.43) rotate(-45)"
                  id="rect1201" />
               <rect
                  class="mista"
                  x="57.64"
                  y="307.24"
                  width="16.4"
                  height="16.4"
                  transform="translate(-203.76 138.94) rotate(-45)"
                  id="rect1203" />
               <rect
                  class="mista"
                  x="10.77"
                  y="151.52"
                  width="16.4"
                  height="16.4"
                  transform="translate(-107.38 60.19) rotate(-45)"
                  id="rect1205" />
               <rect
                  class="mista"
                  x="43.38"
                  y="184.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-120.89 92.81) rotate(-45)"
                  id="rect1207" />
               <rect
                  class="mista"
                  x="10.77"
                  y="184.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-130.45 69.75) rotate(-45)"
                  id="rect1209" />
               <rect
                  class="mista"
                  x="43.38"
                  y="151.52"
                  width="16.4"
                  height="16.4"
                  transform="translate(-97.83 83.26) rotate(-45)"
                  id="rect1211" />
               <rect
                  class="mista"
                  x="78.49"
                  y="151.52"
                  width="16.4"
                  height="16.4"
                  transform="translate(-87.55 108.08) rotate(-45)"
                  id="rect1213" />
               <rect
                  class="mista"
                  x="111.1"
                  y="184.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-101.06 140.69) rotate(-45)"
                  id="rect1215" />
               <rect
                  class="mista"
                  x="78.49"
                  y="184.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-110.61 117.63) rotate(-45)"
                  id="rect1217" />
               <rect
                  class="mista"
                  x="111.1"
                  y="151.52"
                  width="16.4"
                  height="16.4"
                  transform="translate(-78 131.14) rotate(-45)"
                  id="rect1219" />
               <rect
                  class="mista"
                  x="78.49"
                  y="216.85"
                  width="16.4"
                  height="16.4"
                  transform="translate(-133.74 127.21) rotate(-45)"
                  id="rect1221" />
               <rect
                  class="mista"
                  x="111.1"
                  y="249.46"
                  width="16.4"
                  height="16.4"
                  transform="translate(-147.25 159.83) rotate(-45)"
                  id="rect1223" />
               <rect
                  class="mista"
                  x="78.49"
                  y="249.46"
                  width="16.4"
                  height="16.4"
                  transform="translate(-156.8 136.76) rotate(-45)"
                  id="rect1225" />
               <rect
                  class="mista"
                  x="111.1"
                  y="216.85"
                  width="16.4"
                  height="16.4"
                  transform="translate(-124.19 150.27) rotate(-45)"
                  id="rect1227" />
               <rect
                  class="mista"
                  x="143.81"
                  y="151.52"
                  width="16.4"
                  height="16.4"
                  transform="translate(-68.42 154.27) rotate(-45)"
                  id="rect1229" />
               <rect
                  class="mista"
                  x="176.43"
                  y="184.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-81.92 186.89) rotate(-45)"
                  id="rect1231" />
               <rect
                  class="mista"
                  x="143.81"
                  y="184.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-91.48 163.82) rotate(-45)"
                  id="rect1233" />
               <rect
                  class="mista"
                  x="176.43"
                  y="151.52"
                  width="16.4"
                  height="16.4"
                  transform="translate(-58.86 177.33) rotate(-45)"
                  id="rect1235" />
               <rect
                  class="mista"
                  x="94.79"
                  y="719.3"
                  width="16.4"
                  height="16.4"
                  transform="translate(-484.26 285.91) rotate(-45)"
                  id="rect1237" />
               <rect
                  class="mista"
                  x="127.41"
                  y="751.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-497.76 318.52) rotate(-45)"
                  id="rect1239" />
               <rect
                  class="mista"
                  x="94.79"
                  y="751.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-507.32 295.46) rotate(-45)"
                  id="rect1241" />
               <rect
                  class="mista"
                  x="127.41"
                  y="719.3"
                  width="16.4"
                  height="16.4"
                  transform="translate(-474.7 308.97) rotate(-45)"
                  id="rect1243" />
               <rect
                  class="mista"
                  x="94.79"
                  y="649.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-434.92 265.47) rotate(-45)"
                  id="rect1245" />
               <rect
                  class="mista"
                  x="127.41"
                  y="682.15"
                  width="16.4"
                  height="16.4"
                  transform="translate(-448.43 298.09) rotate(-45)"
                  id="rect1247" />
               <rect
                  class="mista"
                  x="94.79"
                  y="682.15"
                  width="16.4"
                  height="16.4"
                  transform="translate(-457.98 275.03) rotate(-45)"
                  id="rect1249" />
               <rect
                  class="mista"
                  x="127.41"
                  y="649.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-425.37 288.54) rotate(-45)"
                  id="rect1251" />
               <rect
                  class="mista"
                  x="94.79"
                  y="581.98"
                  width="16.4"
                  height="16.4"
                  transform="translate(-387.16 245.69) rotate(-45)"
                  id="rect1253" />
               <rect
                  class="mista"
                  x="127.41"
                  y="614.6"
                  width="16.4"
                  height="16.4"
                  transform="translate(-400.67 278.3) rotate(-45)"
                  id="rect1255" />
               <rect
                  class="mista"
                  x="94.79"
                  y="614.6"
                  width="16.4"
                  height="16.4"
                  transform="translate(-410.22 255.24) rotate(-45)"
                  id="rect1257" />
               <rect
                  class="mista"
                  x="127.41"
                  y="581.98"
                  width="16.4"
                  height="16.4"
                  transform="translate(-377.6 268.75) rotate(-45)"
                  id="rect1259" />
               <rect
                  class="mista"
                  x="94.79"
                  y="512.21"
                  width="16.4"
                  height="16.4"
                  transform="translate(-337.82 225.25) rotate(-45)"
                  id="rect1261" />
               <rect
                  class="mista"
                  x="127.41"
                  y="544.83"
                  width="16.4"
                  height="16.4"
                  transform="translate(-351.33 257.87) rotate(-45)"
                  id="rect1263" />
               <rect
                  class="mista"
                  x="94.79"
                  y="544.83"
                  width="16.4"
                  height="16.4"
                  transform="translate(-360.88 234.81) rotate(-45)"
                  id="rect1265" />
               <rect
                  class="mista"
                  x="127.41"
                  y="512.21"
                  width="16.4"
                  height="16.4"
                  transform="translate(-328.27 248.32) rotate(-45)"
                  id="rect1267" />
               <rect
                  class="mista"
                  x="94.79"
                  y="446.78"
                  width="16.4"
                  height="16.4"
                  transform="translate(-291.55 206.09) rotate(-45)"
                  id="rect1269" />
               <rect
                  class="mista"
                  x="127.41"
                  y="479.39"
                  width="16.4"
                  height="16.4"
                  transform="translate(-305.06 238.7) rotate(-45)"
                  id="rect1271" />
               <rect
                  class="mista"
                  x="94.79"
                  y="479.39"
                  width="16.4"
                  height="16.4"
                  transform="translate(-314.61 215.64) rotate(-45)"
                  id="rect1273" />
               <rect
                  class="mista"
                  x="127.41"
                  y="446.78"
                  width="16.4"
                  height="16.4"
                  transform="translate(-282 229.15) rotate(-45)"
                  id="rect1275" />
               <rect
                  class="mista"
                  x="94.79"
                  y="377.01"
                  width="16.4"
                  height="16.4"
                  transform="translate(-242.21 185.65) rotate(-45)"
                  id="rect1277" />
               <rect
                  class="mista"
                  x="127.41"
                  y="409.62"
                  width="16.4"
                  height="16.4"
                  transform="translate(-255.72 218.27) rotate(-45)"
                  id="rect1279" />
               <rect
                  class="mista"
                  x="94.79"
                  y="409.62"
                  width="16.4"
                  height="16.4"
                  transform="translate(-265.28 195.2) rotate(-45)"
                  id="rect1281" />
               <rect
                  class="mista"
                  x="127.41"
                  y="377.01"
                  width="16.4"
                  height="16.4"
                  transform="translate(-232.66 208.71) rotate(-45)"
                  id="rect1283" />
               <rect
                  class="mista"
                  x="94.79"
                  y="307.24"
                  width="16.4"
                  height="16.4"
                  transform="translate(-192.88 165.22) rotate(-45)"
                  id="rect1285" />
               <rect
                  class="mista"
                  x="127.41"
                  y="339.85"
                  width="16.4"
                  height="16.4"
                  transform="translate(-206.39 197.83) rotate(-45)"
                  id="rect1287" />
               <rect
                  class="mista"
                  x="94.79"
                  y="339.85"
                  width="16.4"
                  height="16.4"
                  transform="translate(-215.94 174.77) rotate(-45)"
                  id="rect1289" />
               <rect
                  class="mista"
                  x="127.41"
                  y="307.24"
                  width="16.4"
                  height="16.4"
                  transform="translate(-183.33 188.28) rotate(-45)"
                  id="rect1291" />
               <rect
                  class="mista"
                  x="328.88"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-615.26 534.1) rotate(-45)"
                  id="rect1293" />
               <rect
                  class="mista"
                  x="361.5"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-628.77 566.71) rotate(-45)"
                  id="rect1295" />
               <rect
                  class="mista"
                  x="328.88"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-638.32 543.65) rotate(-45)"
                  id="rect1297" />
               <rect
                  class="mista"
                  x="361.5"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-605.7 557.16) rotate(-45)"
                  id="rect1299" />
               <rect
                  class="mista"
                  x="328.88"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-558.96 510.78) rotate(-45)"
                  id="rect1301" />
               <rect
                  class="mista"
                  x="361.5"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-572.47 543.39) rotate(-45)"
                  id="rect1303" />
               <rect
                  class="mista"
                  x="328.88"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-582.02 520.33) rotate(-45)"
                  id="rect1305" />
               <rect
                  class="mista"
                  x="361.5"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-549.41 533.84) rotate(-45)"
                  id="rect1307" />
               <rect
                  class="mista"
                  x="398.65"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-594.82 583.43) rotate(-45)"
                  id="rect1309" />
               <rect
                  class="mista"
                  x="431.27"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-608.33 616.05) rotate(-45)"
                  id="rect1311" />
               <rect
                  class="mista"
                  x="398.65"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-617.88 592.98) rotate(-45)"
                  id="rect1313" />
               <rect
                  class="mista"
                  x="431.27"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-585.27 606.49) rotate(-45)"
                  id="rect1315" />
               <rect
                  class="mista"
                  x="398.65"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-538.53 560.11) rotate(-45)"
                  id="rect1317" />
               <rect
                  class="mista"
                  x="431.27"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-552.04 592.73) rotate(-45)"
                  id="rect1319" />
               <rect
                  class="mista"
                  x="398.65"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-561.59 569.67) rotate(-45)"
                  id="rect1321" />
               <rect
                  class="mista"
                  x="431.27"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-528.97 583.17) rotate(-45)"
                  id="rect1323" />
               <rect
                  class="mista"
                  x="465.59"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-575.22 630.76) rotate(-45)"
                  id="rect1325" />
               <rect
                  class="mista"
                  x="498.2"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-588.72 663.38) rotate(-45)"
                  id="rect1327" />
               <rect
                  class="mista"
                  x="465.59"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-598.28 640.31) rotate(-45)"
                  id="rect1329" />
               <rect
                  class="mista"
                  x="498.2"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-565.66 653.82) rotate(-45)"
                  id="rect1331" />
               <rect
                  class="mista"
                  x="465.59"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-518.92 607.44) rotate(-45)"
                  id="rect1333" />
               <rect
                  class="mista"
                  x="498.2"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-532.43 640.06) rotate(-45)"
                  id="rect1335" />
               <rect
                  class="mista"
                  x="465.59"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-541.98 617) rotate(-45)"
                  id="rect1337" />
               <rect
                  class="mista"
                  x="498.2"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-509.37 630.51) rotate(-45)"
                  id="rect1339" />
               <rect
                  class="mista"
                  x="535.36"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-554.78 680.1) rotate(-45)"
                  id="rect1341" />
               <rect
                  class="mista"
                  x="567.97"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-568.29 712.71) rotate(-45)"
                  id="rect1343" />
               <rect
                  class="mista"
                  x="535.36"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-577.84 689.65) rotate(-45)"
                  id="rect1345" />
               <rect
                  class="mista"
                  x="567.97"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-545.23 703.16) rotate(-45)"
                  id="rect1347" />
               <rect
                  class="mista"
                  x="535.36"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-498.49 656.78) rotate(-45)"
                  id="rect1349" />
               <rect
                  class="mista"
                  x="567.97"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-512 689.39) rotate(-45)"
                  id="rect1351" />
               <rect
                  class="mista"
                  x="535.36"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-521.55 666.33) rotate(-45)"
                  id="rect1353" />
               <rect
                  class="mista"
                  x="567.97"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-488.93 679.84) rotate(-45)"
                  id="rect1355" />
               <rect
                  class="mista"
                  x="602.78"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-535.03 727.77) rotate(-45)"
                  id="rect1357" />
               <rect
                  class="mista"
                  x="635.4"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-548.54 760.39) rotate(-45)"
                  id="rect1359" />
               <rect
                  class="mista"
                  x="602.78"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-558.09 737.32) rotate(-45)"
                  id="rect1361" />
               <rect
                  class="mista"
                  x="635.4"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-525.48 750.83) rotate(-45)"
                  id="rect1363" />
               <rect
                  class="mista"
                  x="602.78"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-478.74 704.45) rotate(-45)"
                  id="rect1365" />
               <rect
                  class="mista"
                  x="635.4"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-492.25 737.07) rotate(-45)"
                  id="rect1367" />
               <rect
                  class="mista"
                  x="602.78"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-501.8 714.01) rotate(-45)"
                  id="rect1369" />
               <rect
                  class="mista"
                  x="635.4"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-469.19 727.52) rotate(-45)"
                  id="rect1371" />
               <rect
                  class="mista"
                  x="672.55"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-514.6 777.11) rotate(-45)"
                  id="rect1373" />
               <rect
                  class="mista"
                  x="705.17"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-528.11 809.72) rotate(-45)"
                  id="rect1375" />
               <rect
                  class="mista"
                  x="672.55"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-537.66 786.66) rotate(-45)"
                  id="rect1377" />
               <rect
                  class="mista"
                  x="705.17"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-505.04 800.17) rotate(-45)"
                  id="rect1379" />
               <rect
                  class="mista"
                  x="672.55"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-458.3 753.79) rotate(-45)"
                  id="rect1381" />
               <rect
                  class="mista"
                  x="705.17"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-471.81 786.4) rotate(-45)"
                  id="rect1383" />
               <rect
                  class="mista"
                  x="672.55"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-481.37 763.34) rotate(-45)"
                  id="rect1385" />
               <rect
                  class="mista"
                  x="705.17"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-448.75 776.85) rotate(-45)"
                  id="rect1387" />
               <rect
                  class="mista"
                  x="740.63"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-494.66 825.25) rotate(-45)"
                  id="rect1389" />
               <rect
                  class="mista"
                  x="773.25"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-508.17 857.86) rotate(-45)"
                  id="rect1391" />
               <rect
                  class="mista"
                  x="740.63"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-517.72 834.8) rotate(-45)"
                  id="rect1393" />
               <rect
                  class="mista"
                  x="773.25"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-485.1 848.31) rotate(-45)"
                  id="rect1395" />
               <rect
                  class="mista"
                  x="740.63"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-438.36 801.93) rotate(-45)"
                  id="rect1397" />
               <rect
                  class="mista"
                  x="773.25"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-451.87 834.54) rotate(-45)"
                  id="rect1399" />
               <rect
                  class="mista"
                  x="740.63"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-461.43 811.48) rotate(-45)"
                  id="rect1401" />
               <rect
                  class="mista"
                  x="773.25"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-428.81 824.99) rotate(-45)"
                  id="rect1403" />
               <rect
                  class="mista"
                  x="810.4"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-474.22 874.58) rotate(-45)"
                  id="rect1405" />
               <rect
                  class="mista"
                  x="843.02"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-487.73 907.2) rotate(-45)"
                  id="rect1407" />
               <rect
                  class="mista"
                  x="810.4"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-497.28 884.13) rotate(-45)"
                  id="rect1409" />
               <rect
                  class="mista"
                  x="843.02"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-464.67 897.64) rotate(-45)"
                  id="rect1411" />
               <rect
                  class="mista"
                  x="810.4"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-417.93 851.26) rotate(-45)"
                  id="rect1413" />
               <rect
                  class="mista"
                  x="843.02"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-431.44 883.88) rotate(-45)"
                  id="rect1415" />
               <rect
                  class="mista"
                  x="810.4"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-440.99 860.82) rotate(-45)"
                  id="rect1417" />
               <rect
                  class="mista"
                  x="843.02"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-408.38 874.33) rotate(-45)"
                  id="rect1419" />
               <rect
                  class="mista"
                  x="875.39"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-455.19 920.54) rotate(-45)"
                  id="rect1421" />
               <rect
                  class="mista"
                  x="908.01"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-468.7 953.15) rotate(-45)"
                  id="rect1423" />
               <rect
                  class="mista"
                  x="875.39"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-478.25 930.09) rotate(-45)"
                  id="rect1425" />
               <rect
                  class="mista"
                  x="908.01"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-445.63 943.6) rotate(-45)"
                  id="rect1427" />
               <rect
                  class="mista"
                  x="875.39"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-398.89 897.22) rotate(-45)"
                  id="rect1429" />
               <rect
                  class="mista"
                  x="908.01"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-412.4 929.83) rotate(-45)"
                  id="rect1431" />
               <rect
                  class="mista"
                  x="875.39"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-421.95 906.77) rotate(-45)"
                  id="rect1433" />
               <rect
                  class="mista"
                  x="908.01"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-389.34 920.28) rotate(-45)"
                  id="rect1435" />
               <rect
                  class="mista"
                  x="945.16"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-434.75 969.87) rotate(-45)"
                  id="rect1437" />
               <rect
                  class="mista"
                  x="977.78"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-448.26 1002.49) rotate(-45)"
                  id="rect1439" />
               <rect
                  class="mista"
                  x="945.16"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-457.81 979.42) rotate(-45)"
                  id="rect1441" />
               <rect
                  class="mista"
                  x="977.78"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-425.2 992.93) rotate(-45)"
                  id="rect1443" />
               <rect
                  class="mista"
                  x="945.16"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-378.46 946.55) rotate(-45)"
                  id="rect1445" />
               <rect
                  class="mista"
                  x="977.78"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-391.97 979.17) rotate(-45)"
                  id="rect1447" />
               <rect
                  class="mista"
                  x="945.16"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-401.52 956.11) rotate(-45)"
                  id="rect1449" />
               <rect
                  class="mista"
                  x="977.78"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-368.91 969.62) rotate(-45)"
                  id="rect1451" />
               <rect
                  class="mista"
                  x="1015.43"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-414.17 1019.56) rotate(-45)"
                  id="rect1453" />
               <rect
                  class="mista"
                  x="1048.04"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-427.68 1052.17) rotate(-45)"
                  id="rect1455" />
               <rect
                  class="mista"
                  x="1015.43"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-437.23 1029.11) rotate(-45)"
                  id="rect1457" />
               <rect
                  class="mista"
                  x="1048.04"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-404.62 1042.62) rotate(-45)"
                  id="rect1459" />
               <rect
                  class="mista"
                  x="1015.43"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-357.88 996.24) rotate(-45)"
                  id="rect1461" />
               <rect
                  class="mista"
                  x="1048.04"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-371.39 1028.85) rotate(-45)"
                  id="rect1463" />
               <rect
                  class="mista"
                  x="1015.43"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-380.94 1005.79) rotate(-45)"
                  id="rect1465" />
               <rect
                  class="mista"
                  x="1048.04"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-348.32 1019.3) rotate(-45)"
                  id="rect1467" />
               <rect
                  class="mista"
                  x="1085.2"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-393.74 1068.89) rotate(-45)"
                  id="rect1469" />
               <rect
                  class="mista"
                  x="1117.81"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-407.25 1101.51) rotate(-45)"
                  id="rect1471" />
               <rect
                  class="mista"
                  x="1085.2"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-416.8 1078.44) rotate(-45)"
                  id="rect1473" />
               <rect
                  class="mista"
                  x="1117.81"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-384.18 1091.95) rotate(-45)"
                  id="rect1475" />
               <rect
                  class="mista"
                  x="1085.2"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-337.44 1045.57) rotate(-45)"
                  id="rect1477" />
               <rect
                  class="mista"
                  x="1117.81"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-350.95 1078.19) rotate(-45)"
                  id="rect1479" />
               <rect
                  class="mista"
                  x="1085.2"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-360.5 1055.13) rotate(-45)"
                  id="rect1481" />
               <rect
                  class="mista"
                  x="1117.81"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-327.89 1068.64) rotate(-45)"
                  id="rect1483" />
               <rect
                  class="mista"
                  x="1152.3"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-374.08 1116.34) rotate(-45)"
                  id="rect1485" />
               <rect
                  class="mista"
                  x="1184.91"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-387.59 1148.95) rotate(-45)"
                  id="rect1487" />
               <rect
                  class="mista"
                  x="1152.3"
                  y="1034.14"
                  width="16.4"
                  height="16.4"
                  transform="translate(-397.14 1125.89) rotate(-45)"
                  id="rect1489" />
               <rect
                  class="mista"
                  x="1184.91"
                  y="1001.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-364.53 1139.4) rotate(-45)"
                  id="rect1491" />
               <rect
                  class="mista"
                  x="1152.3"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-317.79 1093.02) rotate(-45)"
                  id="rect1493" />
               <rect
                  class="mista"
                  x="1184.91"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-331.3 1125.63) rotate(-45)"
                  id="rect1495" />
               <rect
                  class="mista"
                  x="1152.3"
                  y="954.53"
                  width="16.4"
                  height="16.4"
                  transform="translate(-340.85 1102.57) rotate(-45)"
                  id="rect1497" />
               <rect
                  class="mista"
                  x="1184.91"
                  y="921.92"
                  width="16.4"
                  height="16.4"
                  transform="translate(-308.24 1116.08) rotate(-45)"
                  id="rect1499" />
               <rect
                  class="mista"
                  x="328.88"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(17.94 271.82) rotate(-45)"
                  id="rect1501" />
               <rect
                  class="mista"
                  x="361.5"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(4.43 304.43) rotate(-45)"
                  id="rect1503" />
               <rect
                  class="mista"
                  x="328.88"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(-5.13 281.37) rotate(-45)"
                  id="rect1505" />
               <rect
                  class="mista"
                  x="361.5"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(27.49 294.88) rotate(-45)"
                  id="rect1507" />
               <rect
                  class="mista"
                  x="328.88"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(74.23 248.5) rotate(-45)"
                  id="rect1509" />
               <rect
                  class="mista"
                  x="361.5"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(60.72 281.12) rotate(-45)"
                  id="rect1511" />
               <rect
                  class="mista"
                  x="328.88"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(51.17 258.05) rotate(-45)"
                  id="rect1513" />
               <rect
                  class="mista"
                  x="361.5"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(83.78 271.56) rotate(-45)"
                  id="rect1515" />
               <rect
                  class="mista"
                  x="397.73"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(38.1 320.5) rotate(-45)"
                  id="rect1517" />
               <rect
                  class="mista"
                  x="430.34"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(24.59 353.11) rotate(-45)"
                  id="rect1519" />
               <rect
                  class="mista"
                  x="397.73"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(15.04 330.05) rotate(-45)"
                  id="rect1521" />
               <rect
                  class="mista"
                  x="430.34"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(47.65 343.56) rotate(-45)"
                  id="rect1523" />
               <rect
                  class="mista"
                  x="397.73"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(94.39 297.18) rotate(-45)"
                  id="rect1525" />
               <rect
                  class="mista"
                  x="430.34"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(80.88 329.79) rotate(-45)"
                  id="rect1527" />
               <rect
                  class="mista"
                  x="397.73"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(71.33 306.73) rotate(-45)"
                  id="rect1529" />
               <rect
                  class="mista"
                  x="430.34"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(103.95 320.24) rotate(-45)"
                  id="rect1531" />
               <rect
                  class="mista"
                  x="466.57"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(58.26 369.18) rotate(-45)"
                  id="rect1533" />
               <rect
                  class="mista"
                  x="499.18"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(44.75 401.79) rotate(-45)"
                  id="rect1535" />
               <rect
                  class="mista"
                  x="466.57"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(35.2 378.73) rotate(-45)"
                  id="rect1537" />
               <rect
                  class="mista"
                  x="499.18"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(67.82 392.24) rotate(-45)"
                  id="rect1539" />
               <rect
                  class="mista"
                  x="466.57"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(114.56 345.86) rotate(-45)"
                  id="rect1541" />
               <rect
                  class="mista"
                  x="499.18"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(101.05 378.47) rotate(-45)"
                  id="rect1543" />
               <rect
                  class="mista"
                  x="466.57"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(91.5 355.41) rotate(-45)"
                  id="rect1545" />
               <rect
                  class="mista"
                  x="499.18"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(124.11 368.92) rotate(-45)"
                  id="rect1547" />
               <rect
                  class="mista"
                  x="535.41"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(78.43 417.86) rotate(-45)"
                  id="rect1549" />
               <rect
                  class="mista"
                  x="568.03"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(64.92 450.47) rotate(-45)"
                  id="rect1551" />
               <rect
                  class="mista"
                  x="535.41"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(55.37 427.41) rotate(-45)"
                  id="rect1553" />
               <rect
                  class="mista"
                  x="568.03"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(87.98 440.92) rotate(-45)"
                  id="rect1555" />
               <rect
                  class="mista"
                  x="535.41"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(134.72 394.54) rotate(-45)"
                  id="rect1557" />
               <rect
                  class="mista"
                  x="568.03"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(121.21 427.15) rotate(-45)"
                  id="rect1559" />
               <rect
                  class="mista"
                  x="535.41"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(111.66 404.09) rotate(-45)"
                  id="rect1561" />
               <rect
                  class="mista"
                  x="568.03"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(144.27 417.6) rotate(-45)"
                  id="rect1563" />
               <rect
                  class="mista"
                  x="604.25"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(98.59 466.54) rotate(-45)"
                  id="rect1565" />
               <rect
                  class="mista"
                  x="636.87"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(85.08 499.15) rotate(-45)"
                  id="rect1567" />
               <rect
                  class="mista"
                  x="604.25"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(75.53 476.09) rotate(-45)"
                  id="rect1569" />
               <rect
                  class="mista"
                  x="636.87"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(108.14 489.6) rotate(-45)"
                  id="rect1571" />
               <rect
                  class="mista"
                  x="604.25"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(154.88 443.22) rotate(-45)"
                  id="rect1573" />
               <rect
                  class="mista"
                  x="636.87"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(141.38 475.83) rotate(-45)"
                  id="rect1575" />
               <rect
                  class="mista"
                  x="604.25"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(131.82 452.77) rotate(-45)"
                  id="rect1577" />
               <rect
                  class="mista"
                  x="636.87"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(164.44 466.28) rotate(-45)"
                  id="rect1579" />
               <rect
                  class="mista"
                  x="673.1"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(118.75 515.21) rotate(-45)"
                  id="rect1581" />
               <rect
                  class="mista"
                  x="705.71"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(105.24 547.83) rotate(-45)"
                  id="rect1583" />
               <rect
                  class="mista"
                  x="673.1"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(95.69 524.77) rotate(-45)"
                  id="rect1585" />
               <rect
                  class="mista"
                  x="705.71"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(128.31 538.28) rotate(-45)"
                  id="rect1587" />
               <rect
                  class="mista"
                  x="673.1"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(175.05 491.9) rotate(-45)"
                  id="rect1589" />
               <rect
                  class="mista"
                  x="705.71"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(161.54 524.51) rotate(-45)"
                  id="rect1591" />
               <rect
                  class="mista"
                  x="673.1"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(151.99 501.45) rotate(-45)"
                  id="rect1593" />
               <rect
                  class="mista"
                  x="705.71"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(184.6 514.96) rotate(-45)"
                  id="rect1595" />
               <rect
                  class="mista"
                  x="741.94"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(138.92 563.89) rotate(-45)"
                  id="rect1597" />
               <rect
                  class="mista"
                  x="774.55"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(125.41 596.51) rotate(-45)"
                  id="rect1599" />
               <rect
                  class="mista"
                  x="741.94"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(115.86 573.45) rotate(-45)"
                  id="rect1601" />
               <rect
                  class="mista"
                  x="774.55"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(148.47 586.96) rotate(-45)"
                  id="rect1603" />
               <rect
                  class="mista"
                  x="741.94"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(195.21 540.58) rotate(-45)"
                  id="rect1605" />
               <rect
                  class="mista"
                  x="774.55"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(181.7 573.19) rotate(-45)"
                  id="rect1607" />
               <rect
                  class="mista"
                  x="741.94"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(172.15 550.13) rotate(-45)"
                  id="rect1609" />
               <rect
                  class="mista"
                  x="774.55"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(204.76 563.64) rotate(-45)"
                  id="rect1611" />
               <rect
                  class="mista"
                  x="810.78"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(159.08 612.57) rotate(-45)"
                  id="rect1613" />
               <rect
                  class="mista"
                  x="843.4"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(145.57 645.19) rotate(-45)"
                  id="rect1615" />
               <rect
                  class="mista"
                  x="810.78"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(136.02 622.13) rotate(-45)"
                  id="rect1617" />
               <rect
                  class="mista"
                  x="843.4"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(168.63 635.63) rotate(-45)"
                  id="rect1619" />
               <rect
                  class="mista"
                  x="810.78"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(215.38 589.26) rotate(-45)"
                  id="rect1621" />
               <rect
                  class="mista"
                  x="843.4"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(201.87 621.87) rotate(-45)"
                  id="rect1623" />
               <rect
                  class="mista"
                  x="810.78"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(192.31 598.81) rotate(-45)"
                  id="rect1625" />
               <rect
                  class="mista"
                  x="843.4"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(224.93 612.32) rotate(-45)"
                  id="rect1627" />
               <rect
                  class="mista"
                  x="879.62"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(179.24 661.25) rotate(-45)"
                  id="rect1629" />
               <rect
                  class="mista"
                  x="912.24"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(165.74 693.87) rotate(-45)"
                  id="rect1631" />
               <rect
                  class="mista"
                  x="879.62"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(156.18 670.8) rotate(-45)"
                  id="rect1633" />
               <rect
                  class="mista"
                  x="912.24"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(188.8 684.31) rotate(-45)"
                  id="rect1635" />
               <rect
                  class="mista"
                  x="879.62"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(235.54 637.93) rotate(-45)"
                  id="rect1637" />
               <rect
                  class="mista"
                  x="912.24"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(222.03 670.55) rotate(-45)"
                  id="rect1639" />
               <rect
                  class="mista"
                  x="879.62"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(212.48 647.49) rotate(-45)"
                  id="rect1641" />
               <rect
                  class="mista"
                  x="912.24"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(245.09 661) rotate(-45)"
                  id="rect1643" />
               <rect
                  class="mista"
                  x="948.47"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(199.41 709.93) rotate(-45)"
                  id="rect1645" />
               <rect
                  class="mista"
                  x="981.08"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(185.9 742.55) rotate(-45)"
                  id="rect1647" />
               <rect
                  class="mista"
                  x="948.47"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(176.35 719.48) rotate(-45)"
                  id="rect1649" />
               <rect
                  class="mista"
                  x="981.08"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(208.96 732.99) rotate(-45)"
                  id="rect1651" />
               <rect
                  class="mista"
                  x="948.47"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(255.7 686.61) rotate(-45)"
                  id="rect1653" />
               <rect
                  class="mista"
                  x="981.08"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(242.19 719.23) rotate(-45)"
                  id="rect1655" />
               <rect
                  class="mista"
                  x="948.47"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(232.64 696.17) rotate(-45)"
                  id="rect1657" />
               <rect
                  class="mista"
                  x="981.08"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(265.25 709.68) rotate(-45)"
                  id="rect1659" />
               <rect
                  class="mista"
                  x="1017.31"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(219.57 758.61) rotate(-45)"
                  id="rect1661" />
               <rect
                  class="mista"
                  x="1049.92"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(206.06 791.22) rotate(-45)"
                  id="rect1663" />
               <rect
                  class="mista"
                  x="1017.31"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(196.51 768.16) rotate(-45)"
                  id="rect1665" />
               <rect
                  class="mista"
                  x="1049.92"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(229.12 781.67) rotate(-45)"
                  id="rect1667" />
               <rect
                  class="mista"
                  x="1017.31"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(275.87 735.29) rotate(-45)"
                  id="rect1669" />
               <rect
                  class="mista"
                  x="1049.92"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(262.36 767.91) rotate(-45)"
                  id="rect1671" />
               <rect
                  class="mista"
                  x="1017.31"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(252.8 744.85) rotate(-45)"
                  id="rect1673" />
               <rect
                  class="mista"
                  x="1049.92"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(285.42 758.35) rotate(-45)"
                  id="rect1675" />
               <rect
                  class="mista"
                  x="1086.15"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(239.74 807.29) rotate(-45)"
                  id="rect1677" />
               <rect
                  class="mista"
                  x="1118.77"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(226.23 839.9) rotate(-45)"
                  id="rect1679" />
               <rect
                  class="mista"
                  x="1086.15"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(216.67 816.84) rotate(-45)"
                  id="rect1681" />
               <rect
                  class="mista"
                  x="1118.77"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(249.29 830.35) rotate(-45)"
                  id="rect1683" />
               <rect
                  class="mista"
                  x="1086.15"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(296.03 783.97) rotate(-45)"
                  id="rect1685" />
               <rect
                  class="mista"
                  x="1118.77"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(282.52 816.59) rotate(-45)"
                  id="rect1687" />
               <rect
                  class="mista"
                  x="1086.15"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(272.97 793.52) rotate(-45)"
                  id="rect1689" />
               <rect
                  class="mista"
                  x="1118.77"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(305.58 807.03) rotate(-45)"
                  id="rect1691" />
               <rect
                  class="mista"
                  x="1155"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(259.9 855.97) rotate(-45)"
                  id="rect1693" />
               <rect
                  class="mista"
                  x="1187.61"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(246.39 888.58) rotate(-45)"
                  id="rect1695" />
               <rect
                  class="mista"
                  x="1155"
                  y="138.67"
                  width="16.4"
                  height="16.4"
                  transform="translate(236.84 865.52) rotate(-45)"
                  id="rect1697" />
               <rect
                  class="mista"
                  x="1187.61"
                  y="106.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(269.45 879.03) rotate(-45)"
                  id="rect1699" />
               <rect
                  class="mista"
                  x="1155"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(316.19 832.65) rotate(-45)"
                  id="rect1701" />
               <rect
                  class="mista"
                  x="1187.61"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(302.68 865.27) rotate(-45)"
                  id="rect1703" />
               <rect
                  class="mista"
                  x="1155"
                  y="59.06"
                  width="16.4"
                  height="16.4"
                  transform="translate(293.13 842.2) rotate(-45)"
                  id="rect1705" />
               <rect
                  id="_1111"
                  data-name="1111"
                  class="mista"
                  x="1187.61"
                  y="26.45"
                  width="16.4"
                  height="16.4"
                  transform="translate(325.75 855.71) rotate(-45)" />
            </g>
            <rect
               class="stoly"
               x="22.52"
               y="886.4"
               width="29.72"
               height="29.72"
               transform="translate(-626.34 290.41) rotate(-45)"
               id="rect685" />
            <text
               class="text"
               transform="translate(22.42 907.86)"
               id="text689"><tspan
                  x="0"
                  y="0"
                  id="tspan687">101</tspan></text>
            <rect
               class="stoly"
               x="86.66"
               y="886.4"
               width="29.72"
               height="29.72"
               transform="translate(-607.56 335.76) rotate(-45)"
               id="rect691" />
            <text
               class="text"
               transform="translate(86.56 907.86)"
               id="text695"><tspan
                  x="0"
                  y="0"
                  id="tspan693">110</tspan></text>
            <rect
               class="stoly"
               x="153.4"
               y="886.4"
               width="29.72"
               height="29.72"
               transform="translate(-588.01 382.96) rotate(-45)"
               id="rect697" />
            <text
               class="text"
               transform="translate(153.31 907.86)"
               id="text701"><tspan
                  x="0"
                  y="0"
                  id="tspan699">114</tspan></text>
            <rect
               class="stoly"
               x="86.66"
               y="822.26"
               width="29.72"
               height="29.72"
               transform="translate(-562.2 316.97) rotate(-45)"
               id="rect703" />
            <text
               class="text"
               transform="translate(86.56 843.72)"
               id="text707"><tspan
                  x="0"
                  y="0"
                  id="tspan705">111</tspan></text>
            <rect
               class="stoly"
               x="34.67"
               y="728.95"
               width="29.72"
               height="29.72"
               transform="translate(-511.45 252.88) rotate(-45)"
               id="rect709" />
            <text
               class="text"
               transform="translate(34.57 750.41)"
               id="text713"><tspan
                  x="0"
                  y="0"
                  id="tspan711">102</tspan></text>
            <rect
               class="stoly"
               x="34.67"
               y="659.18"
               width="29.72"
               height="29.72"
               transform="translate(-462.11 232.45) rotate(-45)"
               id="rect715" />
            <text
               class="text"
               transform="translate(34.57 680.63)"
               id="text719"><tspan
                  x="0"
                  y="0"
                  id="tspan717">103</tspan></text>
            <rect
               class="stoly"
               x="34.67"
               y="591.63"
               width="29.72"
               height="29.72"
               transform="translate(-414.35 212.66) rotate(-45)"
               id="rect721" />
            <text
               class="text"
               transform="translate(34.57 613.09)"
               id="text725"><tspan
                  x="0"
                  y="0"
                  id="tspan723">104</tspan></text>
            <rect
               class="stoly"
               x="34.67"
               y="521.86"
               width="29.72"
               height="29.72"
               transform="translate(-365.01 192.23) rotate(-45)"
               id="rect727" />
            <text
               class="text"
               transform="translate(34.57 543.32)"
               id="text731"><tspan
                  x="0"
                  y="0"
                  id="tspan729">105</tspan></text>
            <rect
               class="stoly"
               x="34.67"
               y="456.42"
               width="29.72"
               height="29.72"
               transform="translate(-318.74 173.06) rotate(-45)"
               id="rect733" />
            <text
               class="text"
               transform="translate(34.57 477.88)"
               id="text737"><tspan
                  x="0"
                  y="0"
                  id="tspan735">106</tspan></text>
            <rect
               class="stoly"
               x="34.67"
               y="386.65"
               width="29.72"
               height="29.72"
               transform="translate(-269.4 152.62) rotate(-45)"
               id="rect739" />
            <text
               class="text"
               transform="translate(34.57 408.11)"
               id="text743"><tspan
                  x="0"
                  y="0"
                  id="tspan741">107</tspan></text>
            <rect
               class="stoly"
               x="34.67"
               y="316.88"
               width="29.72"
               height="29.72"
               transform="translate(-220.07 132.19) rotate(-45)"
               id="rect745" />
            <text
               class="text"
               transform="translate(34.57 338.34)"
               id="text749"><tspan
                  x="0"
                  y="0"
                  id="tspan747">108</tspan></text>
            <rect
               class="stoly"
               x="20.41"
               y="161.17"
               width="29.72"
               height="29.72"
               transform="translate(-114.14 76.5) rotate(-45)"
               id="rect751" />
            <text
               class="text"
               transform="translate(20.32 182.62)"
               id="text755"><tspan
                  x="0"
                  y="0"
                  id="tspan753">109</tspan></text>
            <rect
               class="stoly"
               x="88.13"
               y="161.17"
               width="29.72"
               height="29.72"
               transform="translate(-94.3 124.39) rotate(-45)"
               id="rect757" />
            <text
               class="text"
               transform="translate(88.04 182.62)"
               id="text761"><tspan
                  x="0"
                  y="0"
                  id="tspan759">113</tspan></text>
            <rect
               class="stoly"
               x="88.13"
               y="226.49"
               width="29.72"
               height="29.72"
               transform="translate(-140.5 143.52) rotate(-45)"
               id="rect763" />
            <text
               class="text"
               transform="translate(88.04 247.95)"
               id="text767"><tspan
                  x="0"
                  y="0"
                  id="tspan765">112</tspan></text>
            <rect
               class="stoly"
               x="153.46"
               y="161.17"
               width="29.72"
               height="29.72"
               transform="translate(-75.17 170.58) rotate(-45)"
               id="rect769" />
            <text
               class="text"
               transform="translate(153.36 182.62)"
               id="text773"><tspan
                  x="0"
                  y="0"
                  id="tspan771">122</tspan></text>
            <rect
               class="stoly"
               x="104.44"
               y="728.95"
               width="29.72"
               height="29.72"
               transform="translate(-491.01 302.22) rotate(-45)"
               id="rect775" />
            <text
               class="text"
               transform="translate(104.34 750.41)"
               id="text779"><tspan
                  x="0"
                  y="0"
                  id="tspan777">115</tspan></text>
            <rect
               class="stoly"
               x="104.44"
               y="659.18"
               width="29.72"
               height="29.72"
               transform="translate(-441.67 281.78) rotate(-45)"
               id="rect781" />
            <text
               class="text"
               transform="translate(104.34 680.63)"
               id="text785"><tspan
                  x="0"
                  y="0"
                  id="tspan783">116</tspan></text>
            <rect
               class="stoly"
               x="104.44"
               y="591.63"
               width="29.72"
               height="29.72"
               transform="translate(-393.91 262) rotate(-45)"
               id="rect787" />
            <text
               class="text"
               transform="translate(104.34 613.09)"
               id="text791"><tspan
                  x="0"
                  y="0"
                  id="tspan789">117</tspan></text>
            <rect
               class="stoly"
               x="104.44"
               y="521.86"
               width="29.72"
               height="29.72"
               transform="translate(-344.58 241.56) rotate(-45)"
               id="rect793" />
            <text
               class="text"
               transform="translate(104.34 543.32)"
               id="text797"><tspan
                  x="0"
                  y="0"
                  id="tspan795">118</tspan></text>
            <rect
               class="stoly"
               x="104.44"
               y="456.42"
               width="29.72"
               height="29.72"
               transform="translate(-298.3 222.39) rotate(-45)"
               id="rect799" />
            <text
               class="text"
               transform="translate(104.34 477.88)"
               id="text803"><tspan
                  x="0"
                  y="0"
                  id="tspan801">119</tspan></text>
            <rect
               class="stoly"
               x="104.44"
               y="386.65"
               width="29.72"
               height="29.72"
               transform="translate(-248.97 201.96) rotate(-45)"
               id="rect805" />
            <text
               class="text"
               transform="translate(104.34 408.11)"
               id="text809"><tspan
                  x="0"
                  y="0"
                  id="tspan807">120</tspan></text>
            <rect
               class="stoly"
               x="104.44"
               y="316.88"
               width="29.72"
               height="29.72"
               transform="translate(-199.63 181.52) rotate(-45)"
               id="rect811" />
            <text
               class="text"
               transform="translate(104.34 338.34)"
               id="text815"><tspan
                  x="0"
                  y="0"
                  id="tspan813">121</tspan></text>
            <rect
               class="stoly"
               x="338.53"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-622.01 550.4) rotate(-45)"
               id="rect817" />
            <text
               class="text"
               transform="translate(338.43 1032.63)"
               id="text821"><tspan
                  x="0"
                  y="0"
                  id="tspan819">123</tspan></text>
            <rect
               class="stoly"
               x="338.53"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-565.72 527.09) rotate(-45)"
               id="rect823" />
            <text
               class="text"
               transform="translate(338.43 953.02)"
               id="text827"><tspan
                  x="0"
                  y="0"
                  id="tspan825">124</tspan></text>
            <rect
               class="stoly"
               x="408.3"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-601.58 599.74) rotate(-45)"
               id="rect829" />
            <text
               class="text"
               transform="translate(408.2 1032.63)"
               id="text833"><tspan
                  x="0"
                  y="0"
                  id="tspan831">125</tspan></text>
            <rect
               class="stoly"
               x="408.3"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-545.28 576.42) rotate(-45)"
               id="rect835" />
            <text
               class="text"
               transform="translate(408.2 953.02)"
               id="text839"><tspan
                  x="0"
                  y="0"
                  id="tspan837">126</tspan></text>
            <rect
               class="stoly"
               x="475.23"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-581.97 647.07) rotate(-45)"
               id="rect841" />
            <text
               class="text"
               transform="translate(475.14 1032.63)"
               id="text845"><tspan
                  x="0"
                  y="0"
                  id="tspan843">127</tspan></text>
            <rect
               class="stoly"
               x="475.23"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-525.68 623.75) rotate(-45)"
               id="rect847" />
            <text
               class="text"
               transform="translate(475.14 953.02)"
               id="text851"><tspan
                  x="0"
                  y="0"
                  id="tspan849">128</tspan></text>
            <rect
               class="stoly"
               x="545"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-561.53 696.4) rotate(-45)"
               id="rect853" />
            <text
               class="text"
               transform="translate(544.91 1032.63)"
               id="text857"><tspan
                  x="0"
                  y="0"
                  id="tspan855">129</tspan></text>
            <rect
               class="stoly"
               x="545"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-505.24 673.09) rotate(-45)"
               id="rect859" />
            <text
               class="text"
               transform="translate(544.91 953.02)"
               id="text863"><tspan
                  x="0"
                  y="0"
                  id="tspan861">130</tspan></text>
            <rect
               class="stoly"
               x="612.43"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-541.79 744.08) rotate(-45)"
               id="rect865" />
            <text
               class="text"
               transform="translate(612.33 1032.63)"
               id="text869"><tspan
                  x="0"
                  y="0"
                  id="tspan867">131</tspan></text>
            <rect
               class="stoly"
               x="612.43"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-485.49 720.76) rotate(-45)"
               id="rect871" />
            <text
               class="text"
               transform="translate(612.33 953.02)"
               id="text875"><tspan
                  x="0"
                  y="0"
                  id="tspan873">132</tspan></text>
            <rect
               class="stoly"
               x="682.2"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-521.35 793.41) rotate(-45)"
               id="rect877" />
            <text
               class="text"
               transform="translate(682.1 1032.63)"
               id="text881"><tspan
                  x="0"
                  y="0"
                  id="tspan879">133</tspan></text>
            <rect
               class="stoly"
               x="682.2"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-465.06 770.1) rotate(-45)"
               id="rect883" />
            <text
               class="text"
               transform="translate(682.1 953.02)"
               id="text887"><tspan
                  x="0"
                  y="0"
                  id="tspan885">134</tspan></text>
            <rect
               class="stoly"
               x="750.28"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-501.41 841.55) rotate(-45)"
               id="rect889" />
            <text
               class="text"
               transform="translate(750.18 1032.63)"
               id="text893"><tspan
                  x="0"
                  y="0"
                  id="tspan891">135</tspan></text>
            <rect
               class="stoly"
               x="750.28"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-445.12 818.24) rotate(-45)"
               id="rect895" />
            <text
               class="text"
               transform="translate(750.18 953.02)"
               id="text899"><tspan
                  x="0"
                  y="0"
                  id="tspan897">136</tspan></text>
            <rect
               class="stoly"
               x="820.05"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-480.98 890.89) rotate(-45)"
               id="rect901" />
            <text
               class="text"
               transform="translate(819.95 1032.63)"
               id="text905"><tspan
                  x="0"
                  y="0"
                  id="tspan903">137</tspan></text>
            <rect
               class="stoly"
               x="820.05"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-424.68 867.57) rotate(-45)"
               id="rect907" />
            <text
               class="text"
               transform="translate(819.95 953.02)"
               id="text911"><tspan
                  x="0"
                  y="0"
                  id="tspan909">138</tspan></text>
            <rect
               class="stoly"
               x="885.04"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-461.94 936.84) rotate(-45)"
               id="rect913" />
            <text
               class="text"
               transform="translate(884.94 1032.63)"
               id="text917"><tspan
                  x="0"
                  y="0"
                  id="tspan915">139</tspan></text>
            <rect
               class="stoly"
               x="885.04"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-405.65 913.53) rotate(-45)"
               id="rect919" />
            <text
               class="text"
               transform="translate(884.94 953.02)"
               id="text923"><tspan
                  x="0"
                  y="0"
                  id="tspan921">140</tspan></text>
            <rect
               class="stoly"
               x="954.81"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-441.51 986.18) rotate(-45)"
               id="rect925" />
            <text
               class="text"
               transform="translate(954.71 1032.63)"
               id="text929"><tspan
                  x="0"
                  y="0"
                  id="tspan927">141</tspan></text>
            <rect
               class="stoly"
               x="954.81"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-385.21 962.86) rotate(-45)"
               id="rect931" />
            <text
               class="text"
               transform="translate(954.71 953.02)"
               id="text935"><tspan
                  x="0"
                  y="0"
                  id="tspan933">142</tspan></text>
            <rect
               class="stoly"
               x="1025.07"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-420.93 1035.86) rotate(-45)"
               id="rect937" />
            <text
               class="text"
               transform="translate(1024.98 1032.63)"
               id="text941"><tspan
                  x="0"
                  y="0"
                  id="tspan939">143</tspan></text>
            <rect
               class="stoly"
               x="1025.07"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-364.63 1012.55) rotate(-45)"
               id="rect943" />
            <text
               class="text"
               transform="translate(1024.98 953.02)"
               id="text947"><tspan
                  x="0"
                  y="0"
                  id="tspan945">144</tspan></text>
            <rect
               class="stoly"
               x="1094.84"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-400.49 1085.2) rotate(-45)"
               id="rect949" />
            <text
               class="text"
               transform="translate(1094.75 1032.63)"
               id="text953"><tspan
                  x="0"
                  y="0"
                  id="tspan951">145</tspan></text>
            <rect
               class="stoly"
               x="1094.84"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-344.2 1061.88) rotate(-45)"
               id="rect955" />
            <text
               class="text"
               transform="translate(1094.75 953.02)"
               id="text959"><tspan
                  x="0"
                  y="0"
                  id="tspan957">146</tspan></text>
            <rect
               class="stoly"
               x="1161.94"
               y="1011.17"
               width="29.72"
               height="29.72"
               transform="translate(-380.84 1132.65) rotate(-45)"
               id="rect961" />
            <text
               class="text"
               transform="translate(1161.85 1032.63)"
               id="text965"><tspan
                  x="0"
                  y="0"
                  id="tspan963">147</tspan></text>
            <rect
               class="stoly"
               x="1161.94"
               y="931.56"
               width="29.72"
               height="29.72"
               transform="translate(-324.54 1109.33) rotate(-45)"
               id="rect967" />
            <text
               class="text"
               transform="translate(1161.85 953.02)"
               id="text971"><tspan
                  x="0"
                  y="0"
                  id="tspan969">148</tspan></text>
            <rect
               class="stoly"
               x="338.53"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(11.18 288.13) rotate(-45)"
               id="rect973" />
            <text
               class="text"
               transform="translate(338.43 137.16)"
               id="text977"><tspan
                  x="0"
                  y="0"
                  id="tspan975">196</tspan></text>
            <rect
               class="stoly"
               x="338.53"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(67.48 264.81) rotate(-45)"
               id="rect979" />
            <text
               class="text"
               transform="translate(338.43 57.55)"
               id="text983"><tspan
                  x="0"
                  y="0"
                  id="tspan981">197</tspan></text>
            <rect
               class="stoly"
               x="407.37"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(31.35 336.81) rotate(-45)"
               id="rect985" />
            <text
               class="text"
               transform="translate(407.27 137.16)"
               id="text989"><tspan
                  x="0"
                  y="0"
                  id="tspan987">194</tspan></text>
            <rect
               class="stoly"
               x="407.37"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(87.64 313.49) rotate(-45)"
               id="rect991" />
            <text
               class="text"
               transform="translate(407.27 57.55)"
               id="text995"><tspan
                  x="0"
                  y="0"
                  id="tspan993">195</tspan></text>
            <rect
               class="stoly"
               x="476.21"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(51.51 385.48) rotate(-45)"
               id="rect997" />
            <text
               class="text"
               transform="translate(476.12 137.16)"
               id="text1001"><tspan
                  x="0"
                  y="0"
                  id="tspan999">192</tspan></text>
            <rect
               class="stoly"
               x="476.21"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(107.8 362.17) rotate(-45)"
               id="rect1003" />
            <text
               class="text"
               transform="translate(476.12 57.55)"
               id="text1007"><tspan
                  x="0"
                  y="0"
                  id="tspan1005">193</tspan></text>
            <rect
               class="stoly"
               x="545.06"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(71.67 434.16) rotate(-45)"
               id="rect1009" />
            <text
               class="text"
               transform="translate(544.96 137.16)"
               id="text1013"><tspan
                  x="0"
                  y="0"
                  id="tspan1011">190</tspan></text>
            <rect
               class="stoly"
               x="545.06"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(127.97 410.85) rotate(-45)"
               id="rect1015" />
            <text
               class="text"
               transform="translate(544.96 57.55)"
               id="text1019"><tspan
                  x="0"
                  y="0"
                  id="tspan1017">191</tspan></text>
            <rect
               class="stoly"
               x="613.9"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(91.84 482.84) rotate(-45)"
               id="rect1021" />
            <text
               class="text"
               transform="translate(613.8 137.16)"
               id="text1025"><tspan
                  x="0"
                  y="0"
                  id="tspan1023">188</tspan></text>
            <rect
               class="stoly"
               x="613.9"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(148.13 459.52) rotate(-45)"
               id="rect1027" />
            <text
               class="text"
               transform="translate(613.8 57.55)"
               id="text1031"><tspan
                  x="0"
                  y="0"
                  id="tspan1029">189</tspan></text>
            <rect
               class="stoly"
               x="682.74"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(112 531.52) rotate(-45)"
               id="rect1033" />
            <text
               class="text"
               transform="translate(682.64 137.16)"
               id="text1037"><tspan
                  x="0"
                  y="0"
                  id="tspan1035">186</tspan></text>
            <rect
               class="stoly"
               x="682.74"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(168.29 508.2) rotate(-45)"
               id="rect1039" />
            <text
               class="text"
               transform="translate(682.64 57.55)"
               id="text1043"><tspan
                  x="0"
                  y="0"
                  id="tspan1041">187</tspan></text>
            <rect
               class="stoly"
               x="751.58"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(132.16 580.2) rotate(-45)"
               id="rect1045" />
            <text
               class="text"
               transform="translate(751.49 137.16)"
               id="text1049"><tspan
                  x="0"
                  y="0"
                  id="tspan1047">184</tspan></text>
            <rect
               class="stoly"
               x="751.58"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(188.46 556.88) rotate(-45)"
               id="rect1051" />
            <text
               class="text"
               transform="translate(751.49 57.55)"
               id="text1055"><tspan
                  x="0"
                  y="0"
                  id="tspan1053">185</tspan></text>
            <rect
               class="stoly"
               x="820.43"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(152.33 628.88) rotate(-45)"
               id="rect1057" />
            <text
               class="text"
               transform="translate(820.33 137.16)"
               id="text1061"><tspan
                  x="0"
                  y="0"
                  id="tspan1059">182</tspan></text>
            <rect
               class="stoly"
               x="820.43"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(208.62 605.56) rotate(-45)"
               id="rect1063" />
            <text
               class="text"
               transform="translate(820.33 57.55)"
               id="text1067"><tspan
                  x="0"
                  y="0"
                  id="tspan1065">183</tspan></text>
            <rect
               class="stoly"
               x="889.27"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(172.49 677.56) rotate(-45)"
               id="rect1069" />
            <text
               class="text"
               transform="translate(889.17 137.16)"
               id="text1073"><tspan
                  x="0"
                  y="0"
                  id="tspan1071">180</tspan></text>
            <rect
               class="stoly"
               x="889.27"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(228.78 654.24) rotate(-45)"
               id="rect1075" />
            <text
               class="text"
               transform="translate(889.17 57.55)"
               id="text1079"><tspan
                  x="0"
                  y="0"
                  id="tspan1077">181</tspan></text>
            <rect
               class="stoly"
               x="958.11"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(192.65 726.24) rotate(-45)"
               id="rect1081" />
            <text
               class="text"
               transform="translate(958.02 137.16)"
               id="text1085"><tspan
                  x="0"
                  y="0"
                  id="tspan1083">178</tspan></text>
            <rect
               class="stoly"
               x="958.11"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(248.95 702.92) rotate(-45)"
               id="rect1087" />
            <text
               class="text"
               transform="translate(958.02 57.55)"
               id="text1091"><tspan
                  x="0"
                  y="0"
                  id="tspan1089">179</tspan></text>
            <rect
               class="stoly"
               x="1026.96"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(212.82 774.92) rotate(-45)"
               id="rect1093" />
            <text
               class="text"
               transform="translate(1026.86 137.16)"
               id="text1097"><tspan
                  x="0"
                  y="0"
                  id="tspan1095">176</tspan></text>
            <rect
               class="stoly"
               x="1026.96"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(269.11 751.6) rotate(-45)"
               id="rect1099" />
            <text
               class="text"
               transform="translate(1026.86 57.55)"
               id="text1103"><tspan
                  x="0"
                  y="0"
                  id="tspan1101">177</tspan></text>
            <rect
               class="stoly"
               x="1095.8"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(232.98 823.6) rotate(-45)"
               id="rect1105" />
            <text
               class="text"
               transform="translate(1095.7 137.16)"
               id="text1109"><tspan
                  x="0"
                  y="0"
                  id="tspan1107">174</tspan></text>
            <rect
               class="stoly"
               x="1095.8"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(289.27 800.28) rotate(-45)"
               id="rect1111" />
            <text
               class="text"
               transform="translate(1095.7 57.55)"
               id="text1115"><tspan
                  x="0"
                  y="0"
                  id="tspan1113">175</tspan></text>
            <rect
               class="stoly"
               x="1164.64"
               y="115.7"
               width="29.72"
               height="29.72"
               transform="translate(253.14 872.28) rotate(-45)"
               id="rect1117" />
            <text
               class="text"
               transform="translate(1164.54 137.16)"
               id="text1121"><tspan
                  x="0"
                  y="0"
                  id="tspan1119">172</tspan></text>
            <rect
               class="stoly"
               x="1164.64"
               y="36.09"
               width="29.72"
               height="29.72"
               transform="translate(309.44 848.96) rotate(-45)"
               id="rect1123" />
            <text
               class="text"
               transform="translate(1164.54 57.55)"
               id="text1712"><tspan
                  x="0"
                  y="0"
                  id="tspan1710">173</tspan></text>
            <rect
               class="linka"
               x="175.1"
               y="999.44"
               width="117.11"
               height="18.22"
               transform="translate(-774.89 1242.2) rotate(-90)"
               id="rect1714" />
            <rect
               class="linka"
               x="156.89"
               y="999.44"
               width="117.11"
               height="18.22"
               transform="translate(-793.11 1223.99) rotate(-90)"
               id="rect1716" />
            <rect
               class="linka"
               x="138.67"
               y="999.44"
               width="117.11"
               height="18.22"
               transform="translate(-811.32 1205.77) rotate(-90)"
               id="rect1718" />
            <rect
               class="linka"
               x="120.45"
               y="999.44"
               width="117.11"
               height="18.22"
               transform="translate(-829.54 1187.55) rotate(-90)"
               id="rect1720" />
            <rect
               class="linka"
               x="102.24"
               y="999.44"
               width="117.11"
               height="18.22"
               transform="translate(-847.76 1169.34) rotate(-90)"
               id="rect1722" />
            <rect
               class="linka"
               x="84.02"
               y="999.44"
               width="117.11"
               height="18.22"
               transform="translate(-865.97 1151.12) rotate(-90)"
               id="rect1724" />
            <rect
               class="linka"
               x="11.84"
               y="944.83"
               width="117.11"
               height="127.43"
               transform="translate(-938.16 1078.94) rotate(-90)"
               id="rect1726" />
            <rect
               class="linka"
               x="175.1"
               y="62.35"
               width="117.11"
               height="18.22"
               transform="translate(162.2 305.11) rotate(-90)"
               id="rect1728" />
            <rect
               class="linka"
               x="156.89"
               y="62.35"
               width="117.11"
               height="18.22"
               transform="translate(143.99 286.89) rotate(-90)"
               id="rect1730" />
            <rect
               class="linka"
               x="138.67"
               y="62.35"
               width="117.11"
               height="18.22"
               transform="translate(125.77 268.68) rotate(-90)"
               id="rect1732" />
            <rect
               class="linka"
               x="120.45"
               y="62.35"
               width="117.11"
               height="18.22"
               transform="translate(107.55 250.46) rotate(-90)"
               id="rect1734" />
            <rect
               class="linka"
               x="102.24"
               y="62.35"
               width="117.11"
               height="18.22"
               transform="translate(89.34 232.24) rotate(-90)"
               id="rect1736" />
            <rect
               class="linka"
               x="84.02"
               y="62.35"
               width="117.11"
               height="18.22"
               transform="translate(71.12 214.03) rotate(-90)"
               id="rect1738" />
            <rect
               class="linka"
               x="11.84"
               y="7.74"
               width="117.11"
               height="127.43"
               transform="translate(-1.06 141.84) rotate(-90)"
               id="rect1740" />
            <polygon
               class="parket"
               points="270.85 991.26 270.85 1025.84 255.47 1008.55 270.85 991.26"
               id="polygon1742" />
            <polygon
               class="parket"
               points="270.85 54.16 270.85 88.74 255.47 71.45 270.85 54.16"
               id="polygon1744" />
            <polygon
               class="linka"
               points="566.81 175.5 280.85 223.14 245.58 253.26 193.04 541.69 244.88 824.96 280.85 854.39 575.01 902.03 854.45 851.26 1079.75 902.03 1328.61 855.09 1361.54 820.76 1410.2 538.76 1361.54 253.26 1328.61 225.24 1079.75 175.5 854.45 223.84 566.81 175.5"
               id="polygon1746" />
            <polygon
               class="zed"
               points="1195.9 880.12 1328.61 855.09 1361.54 820.76 1410.2 538.76 1361.54 253.26 1328.61 225.24 1195.06 198.54 1207.96 188.11 1345.05 211.69 1382.88 242.52 1433.32 538.76 1380.78 833.38 1345.05 865.6 1206.79 888.72 1195.9 880.12"
               id="polygon1748" />
         </svg>



         <svg
            version="1.1"
            id="Vrstva_loading"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            viewBox="0 0 1440 1080"
         >

            <text
               class="popis-cerny popis-center"
               id="text7398"
               x="766.53607"
               y="616.73993"><tspan
                  x="720.3349"
                  y="616.73993"
                  id="tspan7396"
                  class="popis-cerny">načítání</tspan></text>

<g id="circle" className='circle'>
	<line x1="721.5" y1="548.3" x2="721.5" y2="568.3"/>
	<line class="" x1="721.5" y1="337.9" x2="721.5" y2="358"/>
	<line class="" x1="626.4" y1="453.1" x2="606.3" y2="453.1"/>
	<line class="" x1="836.7" y1="453.1" x2="816.7" y2="453.1"/>
	<line class="" x1="788.8" y1="520.4" x2="803" y2="534.6"/>
	<line class="" x1="640.1" y1="371.7" x2="654.3" y2="385.9"/>
	<line class="" x1="654.3" y1="520.4" x2="640.1" y2="534.6"/>
	<line class="" x1="803" y1="371.7" x2="788.8" y2="385.9"/>
	<line class="" x1="803.9" y1="500.7" x2="821.3" y2="510.7"/>
	<line class="" x1="621.8" y1="395.5" x2="639.1" y2="405.6"/>
	<line class="" x1="674" y1="535.5" x2="663.9" y2="552.9"/>
	<line class="" x1="779.1" y1="353.4" x2="769.1" y2="370.7"/>
	<line class="" x1="813.4" y1="428.5" x2="832.8" y2="423.3"/>
	<line class="" x1="610.3" y1="483" x2="629.6" y2="477.8"/>
	<line class="" x1="746.2" y1="545" x2="751.4" y2="564.4"/>
	<line class="" x1="691.7" y1="341.9" x2="696.9" y2="361.2"/>
	<line class="" x1="639.1" y1="500.7" x2="621.8" y2="510.7"/>
	<line class="" x1="821.3" y1="395.5" x2="803.9" y2="405.6"/>
	<line class="" x1="674" y1="370.7" x2="663.9" y2="353.4"/>
	<line class="" x1="779.1" y1="552.9" x2="769.1" y2="535.5"/>
	<line class="" x1="696.9" y1="545" x2="691.7" y2="564.4"/>
	<line class="" x1="751.4" y1="341.9" x2="746.2" y2="361.2"/>
	<line class="" x1="629.6" y1="428.5" x2="610.3" y2="423.3"/>
	<line class="" x1="832.8" y1="483" x2="813.4" y2="477.8"/>
	<line class="" x1="815.9" y1="465.6" x2="835.8" y2="468.2"/>
	<line class="" x1="607.3" y1="438.1" x2="627.2" y2="440.7"/>
	<line class="" x1="709.1" y1="547.5" x2="706.5" y2="567.4"/>
	<line class="" x1="736.6" y1="338.9" x2="734" y2="358.8"/>
	<line class="" x1="797" y1="395.2" x2="812.9" y2="383"/>
	<line class="" x1="630.1" y1="523.3" x2="646" y2="511.1"/>
	<line class="" x1="779.5" y1="528.6" x2="791.7" y2="544.5"/>
	<line class="" x1="651.4" y1="361.7" x2="663.6" y2="377.6"/>
	<line class="" x1="779.5" y1="377.6" x2="791.7" y2="361.7"/>
	<line class="" x1="651.4" y1="544.5" x2="663.6" y2="528.6"/>
	<line class="" x1="797" y1="511.1" x2="812.9" y2="523.3"/>
	<line class="" x1="630.1" y1="383" x2="646" y2="395.2"/>
	<line class="" x1="709.1" y1="358.8" x2="706.5" y2="338.9"/>
	<line class="" x1="736.6" y1="567.4" x2="734" y2="547.5"/>
	<line class="" x1="815.9" y1="440.7" x2="835.8" y2="438.1"/>
	<line class="" x1="607.3" y1="468.2" x2="627.2" y2="465.6"/>
	<line class="" x1="757.9" y1="541" x2="765.6" y2="559.6"/>
	<line class="" x1="677.4" y1="346.7" x2="685.1" y2="365.2"/>
	<line class="" x1="633.6" y1="489.5" x2="615.1" y2="497.2"/>
	<line class="" x1="828" y1="409" x2="809.4" y2="416.7"/>
	<line class="" x1="809.4" y1="489.5" x2="828" y2="497.2"/>
	<line class="" x1="615.1" y1="409" x2="633.6" y2="416.7"/>
	<line class="" x1="685.1" y1="541" x2="677.4" y2="559.6"/>
	<line class="" x1="765.6" y1="346.7" x2="757.9" y2="365.2"/>
	<line class="" x1="727.8" y1="548.1" x2="729.1" y2="568.1"/>
	<line class="" x1="714" y1="338.2" x2="715.3" y2="358.2"/>
	<line class="" x1="626.6" y1="459.4" x2="606.6" y2="460.7"/>
	<line class="" x1="836.5" y1="445.6" x2="816.5" y2="446.9"/>
	<line class="" x1="793.1" y1="515.9" x2="808.2" y2="529.1"/>
	<line class="" x1="634.9" y1="377.2" x2="650" y2="390.4"/>
	<line class="" x1="658.8" y1="524.7" x2="645.6" y2="539.7"/>
	<line class="" x1="797.5" y1="366.5" x2="784.3" y2="381.6"/>
	<line class="" x1="806.9" y1="495.2" x2="824.9" y2="504.1"/>
	<line class="" x1="618.2" y1="402.2" x2="636.2" y2="411"/>
	<line class="" x1="679.5" y1="538.5" x2="670.6" y2="556.5"/>
	<line class="" x1="772.5" y1="349.8" x2="763.6" y2="367.8"/>
	<line class="" x1="811.6" y1="422.5" x2="830.6" y2="416.1"/>
	<line class="" x1="612.4" y1="490.2" x2="631.4" y2="483.7"/>
	<line class="" x1="752.1" y1="543.2" x2="758.6" y2="562.2"/>
	<line class="" x1="684.5" y1="344" x2="691" y2="363"/>
	<line class="" x1="642.4" y1="506" x2="625.7" y2="517.1"/>
	<line class="" x1="817.3" y1="389.1" x2="800.7" y2="400.3"/>
	<line class="" x1="668.7" y1="374" x2="657.5" y2="357.3"/>
	<line class="" x1="785.5" y1="548.9" x2="774.4" y2="532.2"/>
	<line class="" x1="703" y1="546.5" x2="699.1" y2="566.1"/>
	<line class="" x1="744" y1="340.1" x2="740.1" y2="359.8"/>
	<line class="" x1="628.2" y1="434.6" x2="608.5" y2="430.7"/>
	<line class="" x1="834.5" y1="475.6" x2="814.9" y2="471.7"/>
	<line class="" x1="816.5" y1="459.4" x2="836.5" y2="460.7"/>
	<line class="" x1="606.6" y1="445.6" x2="626.6" y2="446.9"/>
	<line class="" x1="715.3" y1="548.1" x2="714" y2="568.1"/>
	<line class="" x1="729.1" y1="338.2" x2="727.8" y2="358.2"/>
	<line class="" x1="793.1" y1="390.4" x2="808.2" y2="377.2"/>
	<line class="" x1="634.9" y1="529.1" x2="650" y2="515.9"/>
	<line class="" x1="784.3" y1="524.7" x2="797.5" y2="539.7"/>
	<line class="" x1="645.6" y1="366.5" x2="658.8" y2="381.6"/>
	<line class="" x1="774.4" y1="374" x2="785.5" y2="357.3"/>
	<line class="" x1="657.5" y1="548.9" x2="668.7" y2="532.2"/>
	<line class="" x1="800.7" y1="506" x2="817.3" y2="517.1"/>
	<line class="" x1="625.7" y1="389.1" x2="642.4" y2="400.3"/>
	<line class="" x1="703" y1="359.8" x2="699.1" y2="340.1"/>
	<line class="" x1="744" y1="566.1" x2="740.1" y2="546.5"/>
	<line class="" x1="814.9" y1="434.6" x2="834.5" y2="430.7"/>
	<line class="" x1="608.5" y1="475.6" x2="628.2" y2="471.7"/>
	<line class="" x1="763.6" y1="538.5" x2="772.5" y2="556.5"/>
	<line class="" x1="670.6" y1="349.8" x2="679.5" y2="367.8"/>
	<line class="" x1="636.2" y1="495.2" x2="618.2" y2="504.1"/>
	<line class="" x1="824.9" y1="402.2" x2="806.9" y2="411"/>
	<line class="" x1="811.6" y1="483.7" x2="830.6" y2="490.2"/>
	<line class="" x1="612.4" y1="416.1" x2="631.4" y2="422.5"/>
	<line class="" x1="691" y1="543.2" x2="684.5" y2="562.2"/>
	<line class="" x1="758.6" y1="344" x2="752.1" y2="363"/>
</g>


         </svg>
      </div>
   )

}

export default Map