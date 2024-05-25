import { Input } from "@/components/ui/input"
import React from "react"
import { useState, useRef, useEffect } from "react"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function isNumber(n: string): boolean {
  const singleNumberPattern = /^\d*\.?\d*$/;
  return (singleNumberPattern.test(n) && n !== ".");
}

function isInt(n: string): boolean {
  const singleIntPattern = /^[\d]+$/;
  return singleIntPattern.test(n);
}

function isTwoNumbersWithComma(n: string): boolean {
  const twoNumbersCommaPattern = /^[0-9]+,[0-9]+$/;
  return twoNumbersCommaPattern.test(n);
}

export function FindSpotsRadialProfileInputParams(
  props: {
    addEntryToBasicOptions: (key: string, value: string) => void
    removeEntryFromBasicOptions: (key: string) => void
    iQR: string,
    setIQR: React.Dispatch<React.SetStateAction<string>>,
    blur: string,
    setBlur: React.Dispatch<React.SetStateAction<string>>,
    nBins: string,
    setNBins: React.Dispatch<React.SetStateAction<string>>,
  }) {

  const defaultIQR: string = "6";
  const defaultblur: string = "none";
  const defaultNBins: string = "100";

  const [iQRValid, setIQRValid] = useState<boolean>(true);
  const [nBinsValid, setNBinsValid] = useState<boolean>(true);

  var lastSentPlaceholder: boolean = false;

  useEffect(() => {
    checkParamsValid();
  }, [])


  function checkParamsValid() {
    setIQRValid(isInt(props.iQR) || props.iQR === "");
    setNBinsValid(isInt(props.nBins) || props.nBins === "");
  }

  function updateFindSpotsAlgorithm(event: any, name: string, placeholder: string): void {
    var cleanedInput = event.target.value.replace(" ", "");

    switch (name) {
      case "radial_profile.n_iqr":
        props.setIQR(cleanedInput)
        if (cleanedInput === "") {
          props.addEntryToBasicOptions("radial_profile.n_iqr", placeholder);
        }
        else {
          props.addEntryToBasicOptions("radial_profile.n_iqr", cleanedInput);
        }
        setIQRValid(isInt(cleanedInput) || cleanedInput === "");
        break;
      case "radial_profile.n_bins":
        props.setNBins(cleanedInput)
        if (cleanedInput === "") {
          props.addEntryToBasicOptions("radial_profile.n_bins", placeholder);
        }
        else {
          props.addEntryToBasicOptions("radial_profile.n_bins", cleanedInput);
        }
        setNBinsValid(isInt(cleanedInput) || cleanedInput === "");
        break;
    }
  }

  function updateBlurParam(value: string) {
    if (value !== "none") {
      props.addEntryToBasicOptions("radial_profile.blur", value);
      props.setBlur(value);
    }
    else {
      props.removeEntryFromBasicOptions("radial_profile.blur");
    }
  }

  return (
    <div className="grid grid-cols-20 gap-8 ">
      <div className="col-start-1 col-end-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> IQR </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Multiplier for determining the threshold value
              </p>
            </TooltipContent>
          </Tooltip>
          <Input
            placeholder={defaultIQR}
            value={props.iQR}
            onChange={(event) =>
              updateFindSpotsAlgorithm(event, "radial_profile.n_iqr", defaultIQR, "int")
            }
            style={{ borderColor: iQRValid ? "" : "red" }}
          />
        </TooltipProvider>
      </div>
      <div className="col-start-2 col-end-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> NBins </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Number of 2θ bins in which to calculate background
              </p>
            </TooltipContent>
          </Tooltip>
          <Input
            placeholder={defaultNBins}
            value={props.nBins}
            onChange={(event) =>
              updateFindSpotsAlgorithm(event, "radial_profile.n_bins", defaultNBins, "int")
            }
            style={{ borderColor: nBinsValid ? "" : "red" }}
          />
        </TooltipProvider>
      </div>
      <div className="col-start-3 col-end-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> Blur  </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Optional preprocessing of the image by a convolution with<br></br>
                a simple Gaussian kernel of size either 3×3 (narrow) or
                5×5 (wide). <br></br>This may help to reduce noise peaks and to"
                combine split spots
              </p>
            </TooltipContent>
          </Tooltip>
          <div style={{ marginTop: "1.1vh" }}>
          </div>
          <RadioGroup defaultValue={props.blur} className="text-s flex space-x-2" onValueChange={(value) => updateBlurParam(value)}>
            <div className="flex items-center">
              <RadioGroupItem value="none" id="r1" />
              <Label style={{ marginLeft: ".2vw" }} htmlFor="r1" className="text-s">none</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="narrow" id="r2" />
              <Label style={{ marginLeft: ".2vw" }} htmlFor="r2" className="text-s">narrow</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="wide" id="r3" />
              <Label style={{ marginLeft: ".2vw" }} htmlFor="r3" className="text-s">wide</Label>
            </div>
          </RadioGroup>
        </TooltipProvider>
      </div>
    </div>
  )
}

export function FindSpotsDispersionInputParams(
  props: {
    addEntryToBasicOptions: (key: string, value: string) => void,
    gain: string,
    setGain: React.Dispatch<React.SetStateAction<string>>,
    sigmaStrong: string,
    setSigmaStrong: React.Dispatch<React.SetStateAction<string>>,
    sigmaBG: string,
    setSigmaBG: React.Dispatch<React.SetStateAction<string>>,
    globalThreshold: string,
    setGlobalThreshold: React.Dispatch<React.SetStateAction<string>>,
    kernelSize: string,
    setKernelSize: React.Dispatch<React.SetStateAction<string>>,
    minLocal: string,
    setMinLocal: React.Dispatch<React.SetStateAction<string>>,
  }) {

  const defaultGain: string = "1.0";
  const defaultSigmaStrong: string = "3.0";
  const defaultSigmaBG: string = "6.0";
  const defaultGlobalThreshold: string = "0.0";
  const defaultKernelSize: string = "3,3";
  const defaultMinLocal: string = "2";

  var lastSentPlaceholder: boolean = false;
  const [kernelSizeValid, setKernelSizeValid] = useState<boolean>(true);
  const [gainValid, setGainValid] = useState<boolean>(true);
  const [sigmaStrongValid, setSigmaStrongValid] = useState<boolean>(true);
  const [sigmaBGValid, setSigmaBGValid] = useState<boolean>(true);
  const [globalThresholdValid, setGlobalThresholdValid] = useState<boolean>(true);
  const [minLocalValid, setMinLocalValid] = useState<boolean>(true);

  useEffect(() => {
    checkParamsValid();
  }, [])


  function checkParamsValid() {
    setKernelSizeValid(isTwoNumbersWithComma(props.kernelSize) || props.kernelSize === "");
    setGainValid(isNumber(props.gain) || props.gain === "");
    setSigmaStrongValid(isNumber(props.sigmaStrong) || props.sigmaStrong === "");
    setSigmaBGValid(isNumber(props.sigmaBG) || props.sigmaBG === "");
    setGlobalThresholdValid(isNumber(props.globalThreshold) || props.globalThreshold === "");
    setMinLocalValid(isInt(props.minLocal) || props.minLocal === "");
  }

  function updateKernelSize(event: any): void {

    var rawInput = event.target.value;
    var cleanedInput = rawInput.replace(' ', '');
    if (cleanedInput === "") {
      props.setKernelSize(cleanedInput);
      props.addEntryToBasicOptions("kernel_size", defaultKernelSize);
    }
    else {
      props.setKernelSize(cleanedInput);
      props.addEntryToBasicOptions("kernel_size", cleanedInput);
    }
    setKernelSizeValid(isTwoNumbersWithComma(cleanedInput) || cleanedInput === "");
  }


  function updateFindSpotsAlgorithm(event: any, name: string, placeholder: string): void {

    var cleanedInput = event.target.value.replace(" ", "");

    switch (name) {
      case "sigma_strong":
        props.setSigmaStrong(cleanedInput)
        if (cleanedInput === "") {
          props.addEntryToBasicOptions("sigma_strong", placeholder);
        }
        else {
          props.addEntryToBasicOptions("sigma_strong", cleanedInput);
        }
        setSigmaStrongValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sigma_background":
        props.setSigmaBG(cleanedInput)
        if (cleanedInput === "") {
          props.addEntryToBasicOptions("sigma_background", placeholder);
        }
        else {
          props.addEntryToBasicOptions("sigma_background", cleanedInput);
        }
        setSigmaBGValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "global_threshold":
        props.setGlobalThreshold(cleanedInput)
        if (cleanedInput === "") {
          props.addEntryToBasicOptions("global_threshold", placeholder);
        }
        else {
          props.addEntryToBasicOptions("global_threshold", cleanedInput);
        }
        setGlobalThresholdValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "min_local":
        props.setMinLocal(cleanedInput)
        if (cleanedInput === "") {
          props.addEntryToBasicOptions("min_local", placeholder);
        }
        else {
          props.addEntryToBasicOptions("min_local", cleanedInput);
        }
        setMinLocalValid(isInt(cleanedInput) || cleanedInput === "");
        break;
      case "gain":
        props.setGain(cleanedInput)
        if (cleanedInput === "") {
          props.addEntryToBasicOptions("gain", placeholder);
        }
        else {
          props.addEntryToBasicOptions("gain", cleanedInput);
        }
        setGainValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
    }
  }

  return (
    <div className="grid grid-cols-20 gap-8 ">
      <div className="col-start-1 col-end-2">
        <Label> Gain </Label>
        <Input placeholder={defaultGain}
          value={props.gain}
          onChange={(event) => updateFindSpotsAlgorithm(event, "gain", defaultGain)}
          style={{ borderColor: gainValid ? "" : "red" }}
        />
      </div>
      <div className="col-start-2 col-end-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> σ<sub> strong</sub> </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p>The number of standard deviations above the mean in the local
                area above which the pixel will be classified as strong</p>
            </TooltipContent>
          </Tooltip>
          <Input
            placeholder={defaultSigmaStrong}
            value={props.sigmaStrong}
            onChange={(event) =>
              updateFindSpotsAlgorithm(event, "sigma_strong", defaultSigmaStrong)
            }
            style={{ borderColor: sigmaStrongValid ? "" : "red" }}
          />
        </TooltipProvider>
      </div>
      <div className="col-start-3 col-end-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> σ<sub> bg</sub> </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p>The number of standard deviations of the index of dispersion
                in the local area below which the pixel
                will be classified as background</p>
            </TooltipContent>
          </Tooltip>
          <Input placeholder={props.sigmaBG}
            value={props.sigmaBG}
            onChange={(event) => updateFindSpotsAlgorithm(event, "sigma_background", defaultSigmaBG)}
            style={{ borderColor: sigmaBGValid ? "" : "red" }}
          />
        </TooltipProvider>
      </div>
      <div className="col-start-4 col-end-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> Global Threshlold </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p> All pixels less than this value considered background </p>
            </TooltipContent>
          </Tooltip>
          <Input placeholder={defaultGlobalThreshold}
            value={props.globalThreshold}
            onChange={(event) => updateFindSpotsAlgorithm(event, "global_threshold", defaultGlobalThreshold)}
            style={{ borderColor: globalThresholdValid ? "" : "red" }}
          />
        </TooltipProvider>
      </div>
      <div className="col-start-6 col-end-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> Kernel Size </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p> The local area around the pixel to calculate dispersion (x,y)</p>
            </TooltipContent>
          </Tooltip>
          <Input placeholder={defaultKernelSize}
            value={props.kernelSize}
            onChange={(event) => updateKernelSize(event)}
            id="kernelSize"
            style={{ borderColor: kernelSizeValid ? "" : "red" }}
          />
        </TooltipProvider>
      </div>
      <div className="col-start-8 col-end-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label> Min Local </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p> The minimum number of pixels used under the kernel</p>
            </TooltipContent>
          </Tooltip>
          <Input placeholder={defaultMinLocal}
            value={props.minLocal}
            onChange={(event) => updateFindSpotsAlgorithm(event, "min_local", defaultMinLocal)}
            style={{ borderColor: minLocalValid ? "" : "red" }}
          />
        </TooltipProvider>
      </div>
    </div>
  )
}
