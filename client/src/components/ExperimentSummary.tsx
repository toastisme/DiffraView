import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export function ExperimentSummary(props: {
	name : string
	summary: string
	reflections_summary: string
	crystal_summary : string[]
	integration_summary: string
}
	){

		return (
			<div>
				<div dangerouslySetInnerHTML={{__html:props.name + props.summary}}/>
				<div dangerouslySetInnerHTML={{__html: props.reflections_summary}}/>
				<div className="flex items-center space-x-[60px]">
					<b className="mr-2">{props.crystal_summary.length !== 0 ? "Unit Cell:" : ""}</b>
					<Carousel className="max-w-[35%]" hidden={props.crystal_summary.length === 0}>
						<CarouselContent>
						{Array.from({ length: props.crystal_summary.length }).map((_, index) => (
							<CarouselItem key={index}>
							<div className="p-1">
								<span className="">{props.crystal_summary[0]}</span>
							</div>
							</CarouselItem>
						))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
				<div dangerouslySetInnerHTML={{__html: props.integration_summary}}/>

			</div>
		)
	}