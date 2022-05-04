Blockly.JavaScript['lineinit'] = function (block) {
    var HWID = Blockly.JavaScript.valueToCode(block, 'HWID', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = '';
    code += '#EXTINC#include <LINE_Beacon_ESP32.h>#END\n';
    code += '#VARIABLE LINEBeacon Beacon("' + HWID + '");#END\n';
    code += 'Beacon.start();\n';
    return code;
};
Blockly.JavaScript['linedebug'] = function (block) {
    var debug = Blockly.getFieldValue('Debug') || 0;
    var code = '';
    code += 'Beacon.debug =' + debug + ';\n';
    return code;
};
Blockly.JavaScript['lineinterval'] = function (block) {
    var time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = '';
    code += 'Beacon.interval(' + time + ');\n';
    return code;
};
Blockly.JavaScript['settxpowerlevel'] = function (block) {
    var TX = Blockly.JavaScript.valueToCode(block, 'TX', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = '';
    code += 'Beacon.setTXPowerLevel(' + TX + ');\n';
    return code;
};
Blockly.JavaScript['setbatterylevel'] = function (block) {
    var batt = Blockly.JavaScript.valueToCode(block, 'batt', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = '';
    code += 'Beacon.setBatteryLevel(' + batt + ');\n';
    return code;
}