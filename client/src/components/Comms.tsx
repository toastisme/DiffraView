
export class WebsocketHandler{

	serverWS: WebSocket;
	experimentViewerWS: WebSocket;
	rlvWS: WebSocket;

	constructor(serverAddr: string, experimentViewerAddr: string, rlvAddr: string){

		this.serverWS = new WebSocket(serverAddr);
		this.setupServerWS();

		this.experimentViewerWS = new WebSocket(experimentViewerAddr);
		this.rlvWS = new WebSocket(rlvAddr);
	}

	setupServerWS(){
		this.serverWS.onopen = () => {
			console.log('Opened Connection!')
			this.serverWS.send(JSON.stringify({"exptName": "example"}))
		};

		this.serverWS.onclose = () => {
			console.log('Closed Connection!')
		};

		this.serverWS.onmessage = (event) => {
			console.log("msg received by client", event.data);
			};

		}
	
}