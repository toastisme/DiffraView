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

  var lastSentPlaceholder: boolean = false;


  function updateFindSpotsAlgorithm(event: any, name: string, placeholder: string, expectedType: string): void {

    if (expectedType == "float") {
      var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

      // Ensure there is at most one dot
      const dotCount = (cleanedInput.match(/\./g) || []).length;

      if (dotCount > 1) {
        const firstDotIndex = cleanedInput.indexOf('.');
        const lastDotIndex = cleanedInput.lastIndexOf('.');
        cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
      }
      event.target.value = cleanedInput;
    }
    else {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
    var value: string = event.target.value;

    if (value == "") {
      value = placeholder;
      lastSentPlaceholder = true;
    }

    if (value != placeholder) {
      lastSentPlaceholder = false;
    }

    switch (name) {
      case "radil_profile.n_iqr":
        props.setIQR(value);
        break;
      case "radial_profile.n_bins":
        props.setNBins(value);
        break;
    }
    props.addEntryToBasicOptions(name, value);
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
              updateFindSpotsAlgorithm(event, "radial_profile.n_iqr", defaultNBins, "int")
            }
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

  useEffect(() => {
    checkParamsValid();
  }, [])

  function checkParamsValid() {
    const twoNumbersCommaPattern = /^[0-9]+,[0-9]+$/
    setKernelSizeValid(twoNumbersCommaPattern.test(props.kernelSize) || props.kernelSize === "");
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
    const twoNumbersCommaPattern = /^[0-9]+,[0-9]+$/
    setKernelSizeValid(twoNumbersCommaPattern.test(cleanedInput) || cleanedInput === "");
  }


  function updateFindSpotsAlgorithm(event: any, name: string, placeholder: string, expectedType: string): void {

    if (expectedType == "float") {
      var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

      // Ensure there is at most one dot
      const dotCount = (cleanedInput.match(/\./g) || []).length;

      if (dotCount > 1) {
        const firstDotIndex = cleanedInput.indexOf('.');
        const lastDotIndex = cleanedInput.lastIndexOf('.');
        cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
      }
      event.target.value = cleanedInput;
    }
    else {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
    var value: string = event.target.value;

    if (value == "") {
      value = placeholder;
      lastSentPlaceholder = true;
    }

    if (value != placeholder) {
      lastSentPlaceholder = false;
    }

    switch (name) {
      case "sigma_strong":
        props.setSigmaStrong(value);
        break;
      case "sigma_background":
        props.setSigmaBG(value);
        break;
      case "global_threshold":
        props.setGlobalThreshold(value);
        break;
      case "min_local":
        props.setMinLocal(value);
        break;
      case "gain":
        props.setGain(value);
        break;
    }
    props.addEntryToBasicOptions(name, value);
  }

  return (
    <div className="grid grid-cols-20 gap-8 ">
      <div className="col-start-1 col-end-2">
        <Label> Gain </Label>
        <Input placeholder={defaultGain}
          value={props.gain}
          onChange={(event) => updateFindSpotsAlgorithm(event, "gain", defaultGain, "float")}
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
              updateFindSpotsAlgorithm(event, "sigma_strong", defaultSigmaStrong, "float")
            }
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
            onChange={(event) => updateFindSpotsAlgorithm(event, "sigma_background", defaultSigmaBG, "float")}
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
            onChange={(event) => updateFindSpotsAlgorithm(event, "global_threshold", defaultGlobalThreshold, "float")}
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
            onChange={(event) => updateFindSpotsAlgorithm(event, "min_local", defaultMinLocal, "integer")}
          />
        </TooltipProvider>
      </div>
    </div>
  )
}
