import { Outlet } from "react-router-dom";
import * as SC from "./SharedLayoutStyled"
import { Suspense } from "react";
import { Dna } from "react-loader-spinner";

const SharedLayout = (): JSX.Element => {
    return (<SC.SharedLayoutStyled>

        <Suspense fallback={<Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />}>
            <Outlet />
        </Suspense>
    </SC.SharedLayoutStyled>);
}

export default SharedLayout;