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
import { SvgIcon, TextField, Link, Button } from '@mui/material';
import { ReactComponent as CloseFilled1 } from './assets/hello/CloseFilled.svg';
import { styled } from '@mui/material/styles';
import useRepoApiKey from './useRepoApiKey';
 
const RepoApiKey1 = styled("div")(({ theme }) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `357px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `30px 30px 10px 30px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
}));
  
const ModalTitleSection = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `space-between`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const TemplateTitle = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  width: `207px`,  
  height: `24px`,  
}));
  
const Icon1 = styled(SvgIcon)(({ theme }) =>({  
  color: theme.palette["Text"]["Primary"],  
  cursor: `pointer`,  
}));
  
const TemplateSelection = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `30px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const ValidateKey = styled("div")({  
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
  
const TextFieldStandard = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const TextFieldStandard1 = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `20px 0px 0px 0px`,  
});
  
const Link1 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 3"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 3"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 3"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 3"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 3"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 3"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 3"].textTransform,  
  margin: `20px 0px 0px 0px`,  
}));
  
const ButtonContained = styled(Button)({  
  margin: `20px 0px 0px 0px`,  
});
 
function RepoApiKey(props) {
  const {data, fns} = useRepoApiKey();
  return (
    <RepoApiKey1 >
       <ModalTitleSection >
         <TemplateTitle >
           {`Add Repository API Key`}
             </TemplateTitle>
         <Icon1  onClick = { props.onClose}   fontSize = { "small"}  component = { CloseFilled1}/>
       </ModalTitleSection>
       <TemplateSelection >
         <ValidateKey >
           <TextFieldStandard variant="standard" size="medium"  onChange={fns.onKeyNameChange} onBlur={fns.onKeyNameBlur} label={`Key Name`} helperText={data.keyNameError} value={data.keyName} error={Boolean(data.keyNameError)}   />
           <TextFieldStandard1 variant="standard" size="medium"  onChange={fns.onApiKeyChange} onBlur={fns.onApiKeyBlur} label={`API Key`} helperText={data.apiKeyError} value={data.apiKey} error={Boolean(data.apiKeyError)}   />
           <Link1 href="#" underline="hover"  >Where do I get my API Key?</Link1>
           <ButtonContained variant="contained" size="small" color="primary"  onClick={() => fns.validateKey(props.onClose)} disabled={!data.apiKey || !data.keyName}  > Validate Key </ButtonContained>
         </ValidateKey>
       </TemplateSelection>
     </RepoApiKey1>
   );
}

export default RepoApiKey;
