import LoadStyle from "../assets/styles/loading";

const LoadingEffect = () => {
    return ( 
        <LoadStyle>
            <div className="loadingDiv">
                        <div className="lds-ellipsis">
                            <div className="dotBlack"></div><div className="dotCyan"></div><div className="dotBlack"></div><div></div>
                        </div>
                    </div>   
        </LoadStyle>
     );
}


export default LoadingEffect;