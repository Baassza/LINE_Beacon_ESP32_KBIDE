Blockly.Blocks['setbatterylevel'] = {
  init: function () {
    this.appendValueInput("batt")
      .setCheck("Number")
      .appendField(" setBatteryLevel 0-11");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("setBatteryLevel 0 (external power) - 11(Full)");
    this.setHelpUrl("https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#line-beacon-packet");
  }
};

Blockly.Blocks['settxpowerlevel'] = {
  init: function () {
    this.appendValueInput("TX")
      .setCheck("Number")
      .appendField("set TX Power 0-7");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("set TX power  0-7 (-12dbm to 9dbm) default 0");
    this.setHelpUrl("https://docs.espressif.com/projects/esp-idf/en/v4.1/api-reference/bluetooth/controller_vhci.html#_CPPv417esp_power_level_t");
  }
};

Blockly.Blocks['lineinterval'] = {
  init: function () {
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField("LINE Beacon interval (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("loop of LINE Beacon .");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['linedebug'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LINE Beacon Debug")
      .appendField("  Debug")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "Debug");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("start in burd rate 115200");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['lineinit'] = {
  init: function() {
    this.appendValueInput("HWID")
        .setCheck("String")
        .appendField("LINE Beacon init HardwareID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};