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
import { Link, Button } from '@mui/material';
import TopArrowImage from './assets/images/top_arrow.png';
import { styled } from '@mui/material/styles';
import MultiLinePlacholder from './MultiLinePlacholder';
import useGithub from './useGithub';
 
const Github1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `273px`,  
  height: `306px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Frame44 = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,  
  borderRadius: `2px`,  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `20px`,  
  boxSizing: `border-box`,  
  width: `273px`,  
  left: `0px`,  
  top: `9px`,  
});
  
const ExportContent = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-end`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
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
  
const PushToRepo = styled("div")({  
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
  
const DividerBig = styled("div")({  
  backgroundColor: `rgba(218, 218, 218, 1)`,  
  alignSelf: `stretch`,  
  height: `1px`,  
  margin: `14px 0px 0px 0px`,  
});
  
const Btm = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `16px 0px 0px 0px`,  
});
  
const Push = styled("div")({  
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
  
const PushComponentTo = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
}));
  
const QuestRepo = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Disabled"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `4px 0px 0px 0px`,  
}));
  
const MultiLinePlacholder1 = styled(MultiLinePlacholder)(({ theme }) =>({  
  alignSelf: `stretch`,  
  height: `71px`,  
  margin: `32px 0px 0px 0px`,  
}));
  
const LinkAndButton = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `space-between`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `32px 0px 0px 0px`,  
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
}));
  
const TopArrow = styled("img")({  
  height: `19.8px`,  
  width: `22.71px`,  
  position: `absolute`,  
  left: `239px`,  
  top: `0px`,  
});
 
function Github(props) {
  const {data, fns} = useGithub();
  return ( 
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Github1 >
           <Frame44 >
             <ExportContent >
               <Top >
                 <PushToRepo >
                   {`Push to Repo`}
                     </PushToRepo>
                 <DividerBig >
                 </DividerBig>
               </Top>
               <Btm >
                 <Push >
                   <PushComponentTo >
                     {`Push Component to:`}
                       </PushComponentTo>
                   <QuestRepo >
                     {data.componentPath?? "No Repo Set"}
                       </QuestRepo>
                 </Push>
                 <MultiLinePlacholder1   />
                 <LinkAndButton >
                   <Link1 href="#" underline="hover"  onClick={() => history.push(`/appSettings/${data.appId}/exportSettings`)} >Repo Settings</Link1>
                   <Button variant="contained" size="small" color="primary"  onClick={() => fns.exportFn(props.setAnchorEl)} disabled={!data.appKey}  > Push </Button>
                 </LinkAndButton>
               </Btm>
             </ExportContent>
           </Frame44>
           <TopArrow  src={TopArrowImage} alt={"top arrow"}/>
         </Github1>
  
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Github;
