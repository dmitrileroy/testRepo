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
import ClickAreaForDotsImage from './assets/images/click_area_for_dots.png';
import { styled } from '@mui/material/styles';
import useWorkspaceCard from './useWorkspaceCard';
 
const WorkspaceCard1 = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ props }) =>({  
  borderRadius: `4px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `278.18px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
  border: `${props.isSelected === true ? "2.5px solid rgba(107, 104, 255, 1)" : "2.5px solid transparent"}`,  
  cursor: `pointer`,  
}));
  
const Container = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Top = styled("div")({  
  backgroundColor: `rgba(233, 233, 233, 1)`,  
  border: `0.8297604918479919px solid rgba(233, 233, 233, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: `250px`,  
  margin: `0px`,  
});
  
const Thumbnail = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ props }) =>({  
  backgroundImage: `url(${ThumbnailImage})`,  
  backgroundPosition: `center`,  
  backgroundSize: `contain`,  
  backgroundRepeat: `no-repeat`,  
  mixBlendMode: `multiply`,  
  width: `173.44px`,  
  height: `180px`,  
  margin: `0px`,  
  backgroundImage: `url(${props.thumbnail})`,  
}));
  
const Bottom = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `space-between`,  
  alignItems: `center`,  
  padding: `0px 12px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Title = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `10px 0px 12px 0px`,  
  boxSizing: `border-box`,  
});
  
const WorkspaceName = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(39, 39, 39, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `14px`,  
  textTransform: `none`,  
  margin: `0px`,  
});
  
const NumberOfApps = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(168, 168, 168, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `12px`,  
  textTransform: `none`,  
  margin: `4px 0px 0px 0px`,  
});
  
const ClickAreaForDots = styled("img")({  
  height: `18px`,  
  width: `12px`,  
  cursor: `pointer`,  
});
 
function WorkspaceCard(props) {
  const {fns} = useWorkspaceCard();
  return (
    <WorkspaceCard1 onClick={() => { fns.handleWorkspaceClick(props.workspaceId) }} props={props} >
       <Container >
         <Top >
           <Thumbnail props={props} >
           </Thumbnail>
         </Top>
         <Bottom >
           <Title >
             <WorkspaceName >
               {props.workspaceName}
                 </WorkspaceName>
             <NumberOfApps >
               {`${props.numberOfApps} App${props.numberOfApps !== 1 ? "s" : ""}`}
                 </NumberOfApps>
           </Title>
           <ClickAreaForDots onClick={fns.handleDotsClick}  src={ClickAreaForDotsImage} alt={"click area for dots"}/>
         </Bottom>
       </Container>
     </WorkspaceCard1>
   );
}

export default WorkspaceCard;
