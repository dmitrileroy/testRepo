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
import FooterFigma1Image from './assets/images/footer_figma_1.png';
import FooterQ1Image from './assets/images/footer_q_1_1.png';
import FooterQ11Image from './assets/images/footer_q_1.png';
import { styled } from '@mui/material/styles';

 
const Badge1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Row = styled("div")({  
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
  
const FooterSaying = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
  overflow: `hidden`,  
});
  
const ThisSiteWasProudl = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `21px`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Frame125 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 5px`,  
});
  
const FooterFigma1 = styled("img")({  
  height: `16px`,  
  width: `11.04px`,  
  margin: `0px`,  
});
  
const ThisSiteWasProudl1 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `21px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 6px`,  
}));
  
const Frame126 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 5px`,  
});
  
const FooterQ1 = styled("img")({  
  height: `16px`,  
  width: `15.87px`,  
  margin: `0px`,  
});
  
const ThisSiteWasProudl2 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `21px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 6px`,  
}));
  
const Frame128 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 5px`,  
});
  
const FooterQ11 = styled("img")({  
  height: `16px`,  
  width: `18px`,  
  margin: `0px`,  
});
  
const ThisSiteWasProudl3 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `21px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 4px`,  
}));
 
function Badge() {
  return (
    <Badge1 >
       <Row >
         <FooterSaying >
           <ThisSiteWasProudl >
             {`This Sign Up flow was designed in `}
               </ThisSiteWasProudl>
           <Frame125 >
             <FooterFigma1  src={FooterFigma1Image} alt={"footer_figma 1"}/>
             <ThisSiteWasProudl1 >
               {`Figma, built with`}
                 </ThisSiteWasProudl1>
           </Frame125>
           <Frame126 >
             <FooterQ1  src={FooterQ1Image} alt={"footer_q 1"}/>
             <ThisSiteWasProudl2 >
               {`Quest, deployed with `}
                 </ThisSiteWasProudl2>
           </Frame126>
           <Frame128 >
             <FooterQ11  src={FooterQ11Image} alt={"footer_q 1"}/>
             <ThisSiteWasProudl3 >
               {`Create React App`}
                 </ThisSiteWasProudl3>
           </Frame128>
         </FooterSaying>
       </Row>
     </Badge1>
   );
}

export default Badge;
