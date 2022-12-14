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
import SeparatorImage from './assets/hello/Separator.png';
import { styled } from '@mui/material/styles';
import useAppBreadcrumbs from './useAppBreadcrumbs';
 
const AppBreadcrumbs1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Workspace = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const ImagePlaceholder = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }) =>({  
  backgroundImage: `url(${ImagePlaceholderImage})`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  mixBlendMode: `multiply`,  
  width: `21px`,  
  height: `21px`,  
  margin: `0px`,  
  backgroundImage: `url(${data.thumbnail})`,  
}));
  
const NovaBrazilWorkspace = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(39, 39, 39, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 10px`,  
});
  
const Separator = styled("img")({  
  height: `11.49px`,  
  width: `7px`,  
  margin: `0px 0px 0px 14px`,  
});
  
const Apps = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(39, 39, 39, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 14px`,  
});
 
function AppBreadcrumbs() {
  const {data} = useAppBreadcrumbs();
  return (
    <AppBreadcrumbs1 >
       <Workspace >
         <ImagePlaceholder data={data} >
         </ImagePlaceholder>
         <NovaBrazilWorkspace >
           {`${data.workspaceName}`}
             </NovaBrazilWorkspace>
       </Workspace>
       <Separator  src={SeparatorImage} alt={"Separator"}/>
       <Apps >
         {`Apps`}
           </Apps>
     </AppBreadcrumbs1>
   );
}

export default AppBreadcrumbs;
