import { CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function LoadingScreen(props:{loading: boolean, minLoading : boolean}){
	return (

    <div
    >
    <img
      src="./src/assets/dials_logo.png"
      style={{ 
        height: '30%', 
        width: '30%', 
        justifyItems:"center", 
        marginLeft: "auto", 
        marginRight: "auto" ,
        marginTop: "20vh",
        marginBottom: "auto"
      }}
      alt="Dials Logo"
    />
      <BarLoader
        color={"#ffffff"}
        loading={!(props.loading && props.minLoading)}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
        width={400}
      />
    </div>
	)
}