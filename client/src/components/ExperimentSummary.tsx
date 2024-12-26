import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useImportContext } from "@/contexts/ImportContext";



export function ExperimentSummary(){

		const {
			instrumentName,
			experimentDescription,
			reflectionsSummary,
			crystalSummary
		} = useImportContext();

		return (
			<div>
				<div dangerouslySetInnerHTML={{
					__html:instrumentName !== "" ? "<b>Instrument:</b> " + instrumentName + " <b> Experiment: </b>" + experimentDescription : ""}}/>
				<div dangerouslySetInnerHTML={{__html: reflectionsSummary !== "" ?  "<b>Reflections:</b> " + reflectionsSummary : ""}}/>
				<div className="flex items-center space-x-[60px]">
					<b className="mr-2">{crystalSummary.length !== 0 ? "Unit Cell:" : ""}</b>
					<Carousel className="max-w-[35%]" hidden={crystalSummary.length === 0}>
						<CarouselContent>
						{Array.from({ length: crystalSummary.length }).map((_, index) => (
							<CarouselItem key={index}>
							<div className="p-1">
								<span className="">{crystalSummary[index]}</span>
							</div>
							</CarouselItem>
						))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>

			</div>
		)
	}