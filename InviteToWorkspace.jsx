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
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from './QuestDesignSystemLightTheme';
import { TextField, Autocomplete, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import useInviteToWorkspace from './useInviteToWorkspace';
 
const Property1MultiWorksp = styled("div")({  
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
  
const InviteMemberToWorksp = styled("div")({  
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
  
const YourTeamMembersWillG = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(39, 39, 39, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `20px 0px 0px 0px`,  
});
  
const TextFieldStandard = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `30px 0px 0px 0px`,  
});
  
const Autocomplete1 = styled(Autocomplete)({  
  alignSelf: `stretch`,  
  margin: `30px 0px 0px 0px`,  
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
  margin: `30px 0px 0px 0px`,  
});
  
const ButtonText = styled(Button)({  
  margin: `0px`,  
});
  
const ButtonContained = styled(LoadingButton)({  
  margin: `0px 0px 0px 40px`,  
});
 
function InviteToWorkspace(props) {
  const {data, fns} = useInviteToWorkspace();
  return ( 
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Property1MultiWorksp >
           <Top >
             <InviteMemberToWorksp >
               {`Invite Member to Workspace`}
                 </InviteMemberToWorksp>
             <YourTeamMembersWillG >
               {`Your team members will gain access to all Apps within this Workspace`}
                 </YourTeamMembersWillG>
           </Top>
           <TextFieldStandard variant="standard" size="small"  onChange={fns.onUsersEmailChange} onBlur={fns.onUsersEmailBlur} label={`User’s Email`} helperText={data.usersEmailError} value={data.usersEmail} error={Boolean(data.usersEmailError)}   />
           <Autocomplete1  onChange = { (e, val) => {fns.InviteToWorkspace(val)}}multiple    options={data.workspaces}   autoHighlight disableClearable openOnFocus blurOnSelect getOptionLabel={(option) => option.workspaceName} value={data.workspacesToAdd} renderInput={(params) => ( <TextField variant="standard" {...params} fullWidth  label={`Invite to Workspace`}  /> )} />
           <Btns >
             <ButtonText variant="text" size="medium" color="info"  onClick={props.onClose}  > Cancel </ButtonText>
             <ButtonContained variant="contained" size="medium" color="primary"  onClick={fns.inviteMember} loading={data.processingStatus === "In process"}  > Invite </ButtonContained>
           </Btns>
         </Property1MultiWorksp>
  
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default InviteToWorkspace;
