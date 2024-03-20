import React from 'react'
import SubMenu from './SubMenu';



export default function SubOverlay(props) {


  return (
    <div className="page-banner-area overlay overlay-black overlay-70">
     <SubMenu headerName={props.headerName}/>
    </div>
  );
}
