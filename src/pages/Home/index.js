import { useState } from "react";
import { GMAIL_CONFIG, MAILCHIMP_CONFIG } from "../../services/data-provider";
import * as GS from "../../assets/GlobalStyles";
import * as C from "../../components";

const Home = () => {
    const [done, setDone] = useState(false);
    
    return (
        <GS.PageContainer>
            <C.PlatformContainer config={GMAIL_CONFIG} />
            <C.Logo done={done} setDone={setDone} />
            <C.PlatformContainer config={MAILCHIMP_CONFIG} />
        </GS.PageContainer>
    )
}

export default Home;