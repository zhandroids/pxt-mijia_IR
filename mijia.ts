let maqueencb: Action
let maqueenmycb: Action
let maqueene        = "1"
let maqueenparam    = 0
let alreadyInit=0
let IrPressEvent=0
const MOTER_ADDRESSS = 0x10

enum PingUnit {
//% block="cm"
Centimeters,
//% block="μs"
MicroSeconds
}


//% weight=10 color=#008B00 icon="\uf136" block="mijia_IR"
namespace mijia_IR{
  
    export class Packeta {
        public mye: string;
        public myparam: number;
    }
    
    //% advanced=true shim=mijiaIR::initIR
    function initIR(pin: Pins):void{
        return
    }
    //% advanced=true shim=mijiaIR::onPressEvent
    function onPressEvent(btn: RemoteButton,body: Action):void{
        return
    }
    //% advanced=true shim=mijiaIR::getParam
    function getParam():number {
        return 0
    }
    
	//% color=190 weight=60 block="init mijia"
   export function mijiaIRInit():void{
        if(alreadyInit==1){
            return
        }
        initIR(Pins.P16)
        alreadyInit=1
    }
  
    //% weight=62
    //% blockGap=50
    //% mutate=objectdestructuring
    //% mutateText=Packeta
    //% mutateDefaults="myparam:message"
    //% blockId=IR_callbackUser block="on obloq received"
    export function IR_callbackUser(maqueencb: (packet: Packeta) => void) {
        mijiaIRInit()
        IR_callback(() => {
            const packet = new Packeta();
            packet.mye = maqueene;
            maqueenparam=getParam();
            packet.myparam = maqueenparam;
            maqueencb(packet)
        });
    }
    
    //% weight=10
    //% blockId=IR_read block="read IR"
    export function IR_read():number{
        mijiaIRInit()
        return getParam()
    }
    
   
    function IR_callback(a: Action): void{
        maqueencb=a
        IrPressEvent+=1
        onPressEvent(IrPressEvent,maqueencb)
    }
    
}
