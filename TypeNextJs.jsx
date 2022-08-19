/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import React from 'react';
import ImgIconImage from './assets/hello/img_icon_6.png';
import ImgIconImage1 from './assets/hello/img_icon_7.png';
import ImgIconImage2 from './assets/hello/img_icon_8.png';
import { styled } from '@mui/material/styles';
import useTypeNextJs from './useTypeNextJs';
 
const SelectedFalse = styled("div", {
    shouldForwardProp: prop => !["props", "data"].includes(prop.toString())
  })(({ props, data }) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  border: props.selected ? `2px solid rgba(107, 104, 255, 1)` : data.isHover && !props.selected ? `1px solid rgba(116, 116, 116, 1)` : `1px solid rgba(196, 196, 196, 1)`,  
  boxSizing: `border-box`,  
  borderRadius: `4px 0px 0px 4px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  height: `46px`,  
  width: `100px`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  cursor: `pointer`,  
}));
  
const ImgIcon = styled("img")({  
  height: `36px`,  
  width: `60px`,  
  margin: `0px`,  
});
 
function TypeNextJs(props) {
  const {data, fns} = useTypeNextJs();
  return (
    <SelectedFalse onClick={props.onClick} onMouseOver={fns.handleMouseOver} onMouseOut={fns.handleMouseOut} props={props} data={data} >
       <ImgIcon  src={`${props.selected ? ImgIconImage1 : data.isHover && !props.selected ? ImgIconImage2 : ImgIconImage }`} alt={"img:icon"}/>
     </SelectedFalse>
   );
}

export default TypeNextJs;
