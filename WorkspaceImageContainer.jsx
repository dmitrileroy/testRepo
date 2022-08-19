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
import { Button } from '@mui/material';
import WorkspaceImageImage from './assets/hello/Workspace_Image.png';
import { styled } from '@mui/material/styles';

 
const WorkspaceImageContai = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const WorkspaceImage = styled("img")({  
  height: `79px`,  
  width: `79px`,  
  margin: `0px`,  
});
  
const WorkspaceImageCol2 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 42px`,  
});
  
const Top = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const ProfileImage = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Secondary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const UpTo1000X1000JpgOrPn = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(161, 161, 161, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `500`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `2px 0px 0px 0px`,  
});
  
const ButtonContained = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
 
function WorkspaceImageContainer() {
  return (
    <WorkspaceImageContai >
       <WorkspaceImage  src={WorkspaceImageImage} alt={"Workspace Image"}/>
       <WorkspaceImageCol2 >
         <Top >
           <ProfileImage >
             {`Profile Image`}
               </ProfileImage>
           <UpTo1000X1000JpgOrPn >
             {`Up to 1000x1000 JPG or PNG`}
               </UpTo1000X1000JpgOrPn>
         </Top>
         <ButtonContained variant="contained" size="small" color="primary"    > Upload </ButtonContained>
       </WorkspaceImageCol2>
     </WorkspaceImageContai>
   );
}

export default WorkspaceImageContainer;
