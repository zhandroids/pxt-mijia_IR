// Auto-generated. Do not edit.



    //% color=50 weight=80
    //% icon="\uf1eb"
declare namespace mijiaIR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=mijiaIR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=mijiaIR::initIR
    function initIR(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
