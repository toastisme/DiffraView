import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useState } from "react";
import { useImportContext } from "@/contexts/ImportContext";
import { useRootContext } from "@/contexts/RootContext";
import { serverMessage } from "@/lib/protocol";

// Click to edit; Enter or leaving the field saves, Escape cancels
function EditableText({ value, onSave }: { value: string, onSave: (value: string) => void }){
	const [editing, setEditing] = useState<boolean>(false);
	const [draft, setDraft] = useState<string>(value);

	const finish = (save: boolean) => {
		setEditing(false);
		const trimmed = draft.trim();
		if (save && trimmed !== "" && trimmed !== value){
			onSave(trimmed);
		}
	};

	if (!editing){
		return (
			<span
				className="cursor-text rounded px-1 hover:bg-muted"
				title="Click to edit"
				onClick={() => { setDraft(value); setEditing(true); }}
			>{value}</span>
		);
	}
	return (
		<input
			autoFocus
			className="rounded border bg-background px-1"
			size={Math.max(draft.length, 10)}
			value={draft}
			onChange={(e) => setDraft(e.target.value)}
			onBlur={() => finish(true)}
			onKeyDown={(e) => {
				if (e.key === "Enter") finish(true);
				else if (e.key === "Escape") finish(false);
			}}
		/>
	);
}

export function ExperimentSummary(){

		const {
			instrumentName,
			experimentDescription,
			reflectionsSummary,
			crystalSummary
		} = useImportContext();
		const { serverWS } = useRootContext();

		const editDescription = (payload: { instrument?: string, experiment?: string }) => {
			serverWS.current?.send(serverMessage("file.edit_description", payload));
		};

		return (
			<div>
				{instrumentName !== "" &&
					<div>
						<b>Instrument:</b>{" "}
						<EditableText value={instrumentName} onSave={(v) => editDescription({ instrument: v })}/>
						{" "}<b>Experiment:</b>{" "}
						<EditableText value={experimentDescription} onSave={(v) => editDescription({ experiment: v })}/>
					</div>
				}
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