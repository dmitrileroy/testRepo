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
import { TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import useAddApp from './useAddApp';
 
const Property1Default = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.25)`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `462px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `40px 30px`,  
  boxSizing: `border-box`,  
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
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const DeleteTop = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const AddAnApp = styled("div")({  
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
  margin: `0px`,  
});
  
const TextFieldStandard = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `36px 0px 0px 0px`,  
});
  
const Btns = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-end`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `36px 0px 0px 0px`,  
});
  
const ButtonText = styled(Button)({  
  margin: `0px`,  
});
  
const ButtonContained = styled(LoadingButton)({  
  margin: `0px 0px 0px 40px`,  
});
 
function AddApp(props) {
  const {data, fns} = useAddApp();
  return (
    <Property1Default >
       <Top >
         <DeleteTop >
           <AddAnApp >
             {`Add an App`}
               </AddAnApp>
         </DeleteTop>
       </Top>
       <TextFieldStandard variant="standard" size="small"  onChange={fns.onAppNameChange} onBlur={fns.onAppNameBlur} label={`App Name`} helperText={data.appNameError} value={data.appName} error={Boolean(data.appNameError)}   />
       <Btns >
         <ButtonText variant="text" size="medium" color="info"  onClick={props.onClose}  > Cancel </ButtonText>
         <ButtonContained variant="contained" size="medium" color="primary"  onClick={fns.addApp} loading={data.processingStatus === "In process"}  > Add App </ButtonContained>
       </Btns>
     </Property1Default>
   );
}

export default AddApp;
