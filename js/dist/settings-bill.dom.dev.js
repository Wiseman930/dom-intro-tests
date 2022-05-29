"use strict";

var updateButnElement = document.querySelector('.updateSettings');
var callSettingElement = document.querySelector(".callCostSetting");
var smsSettingElement = document.querySelector(".smsCostSetting");
var warningSettingElement = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var billsetitemRadio = document.querySelector('.billItemTypeWithSettings:checked');
var totsetElement = document.querySelector(".totalSettings");
var totsetCallElement = document.querySelector(".callTotalSettings");
var totsetSmsElement = document.querySelector(".smsTotalSettings");
var Bill = settingsBill();
updateButnElement.addEventListener('click', function () {
  Bill.setcallCost = Number(callSettingElement.value);
  Bill.setsmsCost = Number(smsSettingElement.value);
  Bill.getwarningValue = Number(warningSettingElement.value);
  Bill.getCriticalValue = Number(criticalLevelSetting.value);
});
billsetitemRadio.addEventListener('click', function () {
  Bill.getTotal = totsetElement.innerHTML;
  Bill.getCallTotal = totsetCallElement.innerHTML;
  Bill.getSmsTotal = totsetSmsElement.innerHTML;
});