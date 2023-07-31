export function ExperimentSummary(props: {
	name : string
	summary: string
	reflections_summary: string
	crystal_summary : string
	integration_summary: string
}
	){

		return (
			<div>
				<div dangerouslySetInnerHTML={{__html:props.name + props.summary}}/>
				<div dangerouslySetInnerHTML={{__html: props.reflections_summary}}/>
				<div dangerouslySetInnerHTML={{__html: props.crystal_summary}}/>
				<div dangerouslySetInnerHTML={{__html: props.integration_summary}}/>
			</div>
		)
	}