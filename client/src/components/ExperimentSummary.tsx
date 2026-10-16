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
				<div className="flex items-center gap-2">
					<b>{crystalSummary.length !== 0 ? "Unit Cell:" : ""}</b>
					{/* mx-12: room for the arrows, which sit outside the carousel */}
					<Carousel className="max-w-[45%] mx-12" hidden={crystalSummary.length === 0}>
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