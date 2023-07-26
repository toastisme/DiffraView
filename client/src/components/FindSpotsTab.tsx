import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BarLoader from "react-spinners/BarLoader";
import { MouseEvent, CSSProperties } from "react"

export function FindSpotsTab(props: {
	enabled : boolean, 
	loading: boolean, 
    setLoading : React.Dispatch<React.SetStateAction<boolean>>,
	log: string,
	serverWS: WebSocket}){

  const findSpots = (event : MouseEvent<HTMLButtonElement>) =>{
	event.preventDefault();
    props.setLoading(true);

	props.serverWS.send(JSON.stringify({
	"channel": "server",
	"command": "dials.find_spots", 
	}));
  };


	const barLoaderCSSOverride: CSSProperties = {
	display: "block",
	margin: "0 auto",
	marginTop: "10vh",
	borderColor: "red",
	};

	return (
        <Card className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-end-4 ...">
				<Button onClick={findSpots}>Run </Button>
              </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_find_spots.html" target="_blank">
                  <Button variant={"secondary"}>Documentation </Button>
                </a>

              </div>
            </div>
            <div className="space-y-1">
              <Label>Advanced Options</Label>
              <Input placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card className="h-[600px] overflow-scroll">
            <CardHeader>
              <CardDescription>
                DIALS Output
              </CardDescription>
            </CardHeader>
            <CardContent>
              {props.loading ? 
              
              <BarLoader
                color={"#ffffff"}
                loading={props.loading}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={barLoaderCSSOverride}
                width={400}
              />
            :
              <div dangerouslySetInnerHTML={{__html:props.log}} />
            }

            </CardContent>
          </Card>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
	)
}
