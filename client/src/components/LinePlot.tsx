import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, ReferenceArea, ReferenceDot } from 'recharts';
import { LineplotBboxData, LineplotCentroidData, LineplotData } from '@/types';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"
import { Label as UILabel} from "@/components/ui/label" 

export function LinePlot(props: {
  lineplotData: LineplotData[],
  lineplotBboxData: LineplotBboxData[],
  lineplotCentroidData: LineplotCentroidData[],
  lineplotTitle: string,
  selectedReflectionId: string,
  setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
  serverWS: React.MutableRefObject<WebSocket | null>,
  newReflectionXYStored: boolean,
  currentMinTOF : number,
  currentMaxTOF : number
  minTOF: number,
  maxTOF: number
  debugMode: boolean,
  debugImageIdx: number
  setDebugImageIdx: React.Dispatch<React.SetStateAction<number>>
}) {

  const minSelectionWidth: number = 200;

  interface LinePlotZoomStates {
    data: LineplotData[],
    left: number | string,
    right: number | string,
    refAreaLeft: number | string,
    refAreaRight: number | string,
    top: number | string,
    bottom: number | string,
    animation: boolean,
    creatingNewReflection: boolean,
    drawingNewReflection: boolean,
  }

  const initialState: LinePlotZoomStates = {
    data: props.lineplotData,
    left: 0,
    right: 1,
    refAreaLeft: "",
    refAreaRight: "",
    top: 10,
    bottom: 0,
    animation: true,
    creatingNewReflection: false,
    drawingNewReflection: false
  };

  const [state, setState] = useState<LinePlotZoomStates>(initialState);
  const [zoomOutEnabled, setZoomOutEnabled] = useState<boolean>(false);
  const [addReflectionEnabled, setAddReflectionEnabled] = useState<boolean>(false);

  const findIndexByX = (dataArray: LineplotData[], targetX: number): number => {
    const xValues = dataArray.map((item) => item.x);
    return xValues.indexOf(targetX);
  };

  const getAxisYDomain = (
    from: number,
    to: number,
    offset: number
  ): [number | null, number | null] => {

    from = findIndexByX(props.lineplotData, from);
    to = findIndexByX(props.lineplotData, to);
    const refData: any[] = props.lineplotData.slice(from - 1, to);
    if (refData == null || refData == undefined) {
      return [null, null];
    }
    let [bottom, top] = [0, refData[0]["y"]];

    refData.forEach((d) => {
      if (d["y"] > top) top = d["y"];
    });

    return [bottom, (top * 1.2 | 0) + offset];
  };

  useEffect(() => {
    if (!props.newReflectionXYStored && addReflectionEnabled) {
      setAddReflectionEnabled(false);
    }
  }, [props.newReflectionXYStored])

  useEffect(() => {

    if (props.lineplotData.length <= 1) {
      setState({
        ...state,
        data: props.lineplotData,
        refAreaLeft: "",
        refAreaRight: "",
        left: 0,
        right: 1,
        top: 1,
        bottom: 0,
      });
      return;
    }

    const maxDataPoint = Math.max(...props.lineplotData.map(entry => entry.y));
    const topValue = maxDataPoint * 1.2; // 20% buffer

    setState({
      ...state,
      data: props.lineplotData,
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: topValue,
      bottom: "dataMin",
    });

  }, [props.lineplotData]);

  const onFinishHighlight = (): void => {
    if (!state.creatingNewReflection) {
      return zoom();
    }
    setState({ ...state, drawingNewReflection: false });
    let { refAreaLeft, refAreaRight } = state;
    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      setState({
        ...state,
        refAreaLeft: "",
        refAreaRight: ""
      });
      return;
    }
    if (!(typeof refAreaLeft === "number" && typeof refAreaRight === "number")) {
      setState({
        ...state,
        refAreaLeft: "",
        refAreaRight: ""
      });
      return;

    }
    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    if (refAreaRight - refAreaLeft < minSelectionWidth) {
      setState({
        ...state,
        refAreaLeft: "",
        refAreaRight: ""
      });
      return;
    }
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "new_reflection_z",
      "bbox": [refAreaLeft, refAreaRight]
    }));

    setAddReflectionEnabled(props.newReflectionXYStored);
  }

  const zoom = (): void => {
    let { refAreaLeft, refAreaRight } = state;
    const { data } = state;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      setState({
        ...state,
        refAreaLeft: "",
        refAreaRight: ""
      });
      return;
    }
    if (!(typeof refAreaLeft === "number" && typeof refAreaRight === "number")) {
      setState({
        ...state,
        refAreaLeft: "",
        refAreaRight: ""
      });
      return;

    }
    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    if (refAreaRight - refAreaLeft < minSelectionWidth) {
      setState({
        ...state,
        refAreaLeft: "",
        refAreaRight: ""
      });
      return;
    }

    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 0);
    if (bottom == null || top == null) {
      return;
    }

    setState({
      ...state,
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom: bottom,
      top: top
    });

    setZoomOutEnabled(true);
  };

  const zoomOut = (): void => {
    const { data } = state;
    const maxDataPoint = Math.max(...props.lineplotData.map(entry => entry.y));
    const topValue = maxDataPoint * 1.2; // 20% buffer
    setState({
      ...state,
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: topValue,
      bottom: "dataMin",
    });
    setZoomOutEnabled(false);
  };

  const addNewReflection = (): void => {
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "add_new_reflection",
    }));
    setAddReflectionEnabled(false);
    setState({
      ...state,
      refAreaLeft: "",
      refAreaRight: ""
    });
    return;
  }


  function selectReflection(id: string) {
    props.setSelectedReflectionId(id);
  }

  function validMillerIdx(millerIdx: number[]): boolean {
    if (millerIdx.length != 3) {
      return false;
    }
    for (var i = 0; i < 3; i++) {
      if (millerIdx[i] != 0) {
        return true;
      }
    }
    return false;

  }


  const formatAxis = (value: number): string => {
    return value.toFixed(2);
  };


  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (e: any) => {
      if (e.altKey) {
        setState((prevState) => ({ ...prevState, drawingNewReflection: true, creatingNewReflection: true }));
      }
      else {
        setState((prevState) => ({ ...prevState, drawingNewReflection: false, creatingNewReflection: false }));
      }
    };
    const chartContainer = chartRef.current;
    if (chartContainer) {
      chartContainer.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (chartContainer) {
        chartContainer.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [chartRef]);

  function handleClickedOnChart(event: any){
    if (props.debugMode && event && event.activeLabel){
      const xIdx = state.data.findIndex((d) => d.x === event.activeLabel);
      props.setDebugImageIdx(xIdx);

    }
  }


  return (
    <div ref={chartRef} className="w-[100%]">
      <h4>{props.lineplotTitle}</h4>
      <ResponsiveContainer width="100%" height={200}>
        <div>
          <Button disabled={!zoomOutEnabled} variant="outline" className="btn update" onClick={zoomOut} style={{ fontSize: '20px', padding: "10px 10px" }} >
            <FontAwesomeIcon icon={faArrowsAlt} />
          </Button>
          <Button disabled={!addReflectionEnabled} variant="outline" className="btn update" onClick={addNewReflection} style={{ fontSize: '20px', padding: "10px 10px" }} >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <UILabel hidden={!props.debugMode} style={{color:"#96f97b", marginLeft:"10px"}}>Debug</UILabel>
      <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={860}
            height={200}
            data={state.data}
            margin={{
              bottom: 25,
              left: 10
            }}
            onClick={(handleClickedOnChart)}
            onMouseDown={(e: any) => {
              setAddReflectionEnabled(false);
              setState({ ...state, refAreaLeft: e.activeLabel })
            }}
            onMouseMove={(e: any) => {
              if (e != null) {
                if (state.creatingNewReflection) {
                  if (state.drawingNewReflection) {
                    state.refAreaLeft && setState({ ...state, refAreaRight: e.activeLabel })
                  }
                }
                else {
                  state.refAreaLeft && setState({ ...state, refAreaRight: e.activeLabel })
                }
              }
            }
            }
            onMouseUp={
              onFinishHighlight
            }
          >
            <XAxis tickFormatter={formatAxis} dataKey="x" type="number" domain={[state.left, state.right]} allowDataOverflow>
              <Label value="ToF (usec)" position='bottom' />
            </XAxis>
            <YAxis tickFormatter={formatAxis} dataKey="y" type="number" domain={[state.bottom, state.top]} allowDataOverflow>
              <Label value="Intensity (AU)" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" dataKey="y" stroke="#ffffff" dot={false} activeDot={false} animationDuration={300} />
            {props.lineplotBboxData.map((entry) => (
              <ReferenceArea
                onClick={() => selectReflection(entry.id)}
                key={entry.id}
                x1={entry.x1}
                x2={entry.x2}
                stroke={props.selectedReflectionId == entry.id ? '#59b578' : 'rgba(255, 255, 255, 0.1)'}
                fill={props.selectedReflectionId == entry.id ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.25)'}
                strokeWidth={2}
                animationDuration={300}
              />
            ))}
            {props.lineplotCentroidData.map((entry, index) => (
              <ReferenceDot
                key={`annotation-${index}`}
                x={entry.x}
                y={entry.y}
                stroke={props.selectedReflectionId == entry.id ? "#59b578" : 'white'}
                fill={props.selectedReflectionId == entry.id ? "#59b578" : 'white'}
                label={validMillerIdx(entry.millerIdx) ? { position: "top", value: entry.millerIdx.toString(), fill: '#e74c3c', fontSize: 18 } : ""}
                r={3}
              />
            ))}
            {props.debugMode && props.lineplotData.length > props.debugImageIdx ? 
              <ReferenceDot
                key={`annotation-debug-idx`}
                x={props.lineplotData[props.debugImageIdx].x}
                y={props.lineplotData[props.debugImageIdx].y}
                stroke={'#96f97b'}
                fill={'#96f97b'}
                r={5}
              />
              :""
            
          }


            {state.refAreaLeft && state.refAreaRight ? (
              <ReferenceArea
                x1={state.refAreaLeft}
                x2={state.refAreaRight}
                fill={state.creatingNewReflection ? 'rgba(255, 176, 124, 0.5)' : 'rgba(255, 255, 255, 0.1)'}
                stroke={state.creatingNewReflection ? 'rgba(255, 176, 124, 0.5)' : 'rgba(255, 255, 255, 0.1)'}
                animationDuration={300}
              />
            ) : null}
            {props.currentMinTOF > props.minTOF ? 
              <ReferenceArea
                x1={props.minTOF}
                x2={props.currentMinTOF}
                fill={"#020817"}
                animationDuration={300}
              />
            : null}
            {props.currentMaxTOF < props.maxTOF ? 
              <ReferenceArea
                x1={props.currentMaxTOF}
                x2={props.maxTOF}
                fill={"#020817"}
                animationDuration={300}
              />
            : null}

          </LineChart>
          </ResponsiveContainer>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
