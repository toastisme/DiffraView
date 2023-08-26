
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
import { MouseEvent, useRef, useEffect } from "react"
import { DetectSymmetryDialog } from "./DetectSymmetry"

export function RefineTab(props: {
    setLog : React.Dispatch<React.SetStateAction<string>>,
	enabled : boolean, 
	loading: boolean, 
    setLoading : React.Dispatch<React.SetStateAction<boolean>>,
	log: string,
	serverWS: React.MutableRefObject<WebSocket | null>}){

  const refine = (event : MouseEvent<HTMLButtonElement>) =>{
	event.preventDefault();
    props.setLoading(true);
	props.setLog("");

	props.serverWS.current?.send(JSON.stringify({
	"channel": "server",
	"command": "dials.refine", 
	}));
  };

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [props.log]);

	return (
        <Card className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-end-2 ...">
                <Button onClick={refine}>Run</Button>
              </div>
              <div className="col-start-2 col-end-7 ...">
            <Label >Detect symmetry and refine the model against the observed reflections</Label>
              </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_refine.html" target="_blank">
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
            <Card className="h-[600px] overflow-scroll" ref={cardContentRef}>
            <CardHeader>
              <CardDescription>
                DIALS Output
              </CardDescription>
            </CardHeader>
            <CardContent>
              {props.loading ? 
              <div style={{opacity:0.5}} dangerouslySetInnerHTML={{__html:props.log}} />
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
