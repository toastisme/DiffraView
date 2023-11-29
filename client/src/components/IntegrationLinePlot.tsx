
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, ReferenceArea, ReferenceDot } from 'recharts';
import { LineplotData } from '@/types';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"

export function IntegrationLinePlot(props: {
  tof: number[],
  intensity : number[],
  background : number[],
  lineProfile : number[],
  lineProfileValue : number,
  lineProfileVariance : number,
  lineplotTitle: string,
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
    animation: boolean
  }

  const intensityData: LineplotData[] = [];
  function update_intensity_data(){
    for (var i = 0; i < props.intensity.length; i++){
      intensityData.push(
        {
          x: props.tof[i],
          y: props.intensity[i]
        }
      );
    }
  }
  update_intensity_data();

  const initialState: LinePlotZoomStates = {
    data: intensityData,
    left: 0,
    right: 1,
    refAreaLeft: "",
    refAreaRight: "",
    top: 10,
    bottom: 0,
    animation: true
  };

  const [state, setState] = useState<LinePlotZoomStates>(initialState);
  const [zoomOutEnabled, setZoomOutEnabled] = useState<boolean>(false);


  const findIndexByX = (dataArray: LineplotData[], targetX: number): number => {
    const xValues = dataArray.map((item) => item.x);
    return xValues.indexOf(targetX);
  };

  const getAxisYDomain = (
    from: number,
    to: number,
    offset: number
  ): [number | null, number | null] => {

    from = findIndexByX(intensityData, from);
    to = findIndexByX(intensityData, to);
    const refData: any[] = intensityData.slice(from - 1, to);
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

    update_intensity_data();

    if (intensityData.length <= 1) {
      setState({
        ...state,
        data: intensityData,
        refAreaLeft: "",
        refAreaRight: "",
        left: 0,
        right: 1,
        top: 1,
        bottom: 0,
      });
      return;
    }

    const maxDataPoint = Math.max(...intensityData.map(entry => entry.y));
    const topValue = maxDataPoint * 1.2; // 20% buffer

    setState({
      ...state,
      data: intensityData,
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: topValue,
      bottom: "dataMin",
    });

  }, [props.intensity]);


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
    const maxDataPoint = Math.max(...intensityData.map(entry => entry.y));
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

  const formatAxis = (value: number): string => {
    return value.toFixed(2);
  };

  return (
    <div>
      <h4>{props.lineplotTitle}</h4>
      <ResponsiveContainer width="100%" height={200}>
        <div>
          <Button disabled={!zoomOutEnabled} variant="outline" className="btn update" onClick={zoomOut} style={{ fontSize: '20px', padding: "10px 10px" }} >
            <FontAwesomeIcon icon={faArrowsAlt} />
          </Button>
          <LineChart
            width={860}
            height={400}
            data={state.data}
            margin={{
              bottom: 25,
              left: 10
            }}
            onMouseDown={(e: any) => {
              setState({ ...state, refAreaLeft: e.activeLabel })
            }}
            onMouseMove={(e: any) => {
              if (e != null) { state.refAreaLeft && setState({ ...state, refAreaRight: e.activeLabel }) }
            }
            }
            onMouseUp={zoom}
          >
            <XAxis tickFormatter={formatAxis} dataKey="x" type="number" domain={[state.left, state.right]} allowDataOverflow>
              <Label value="ToF (usec)" position='bottom' />
            </XAxis>
            <YAxis tickFormatter={formatAxis} dataKey="y" type="number" domain={[state.bottom, state.top]} allowDataOverflow>
              <Label value="Intensity (AU)" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" dataKey="y" stroke="#ffffff" dot={false} activeDot={false} animationDuration={300} />
            {state.refAreaLeft && state.refAreaRight ? (
              <ReferenceArea
                x1={state.refAreaLeft}
                x2={state.refAreaRight}
                fill={'rgba(255, 255, 255, 0.1)'}
                stroke={'rgba(255, 255, 255, 0.1)'}
                animationDuration={300}
              />
            ) : null}
          </LineChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
