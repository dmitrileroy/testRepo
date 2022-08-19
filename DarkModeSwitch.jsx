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
import SwitchLightImage from './assets/hello/switch_light.png';
import SwitchDarkImage from './assets/hello/switch_dark.png';
import { styled } from '@mui/material/styles';

 
const PricingLight = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Left = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ theme, props }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,  
  margin: `0px`,  
  opacity: props.userTheme === 'dark' ? `0.30000001192092896` : "unset",  
}));
  
const SwitchLight = styled("img")({  
  height: `38px`,  
  width: `58px`,  
  margin: `0px 0px 0px 2px`,  
  cursor: `pointer`,  
});
  
const SwitchDark = styled("img")({  
  height: `38px`,  
  width: `58px`,  
  margin: `0px 0px 0px 2px`,  
});
  
const Right = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ theme, props }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,  
  opacity: props.userTheme === 'dark' ? "unset" : `0.30000001192092896`,  
  margin: `0px 0px 0px 2px`,  
}));
 
function DarkModeSwitch(props) {
  return (
    <PricingLight >
       <Left props={props} >
         {`Light Mode`}
           </Left>
       {(!(props.userTheme === 'dark')) &&
           <SwitchLight onClick={() => props.onClick('dark')}  src={SwitchLightImage} alt={"switch_light"}/>
       }
       {((props.userTheme === 'dark')) &&
           <SwitchDark  src={SwitchDarkImage} alt={"switch_dark"}/>
       }
       <Right props={props} >
         {`Dark Mode`}
           </Right>
     </PricingLight>
   );
}

export default DarkModeSwitch;
