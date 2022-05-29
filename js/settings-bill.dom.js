
const updateButnElement = document.querySelector('.updateSettings');
const callSettingElement = document.querySelector(".callCostSetting");
const smsSettingElement = document.querySelector(".smsCostSetting");
const warningSettingElement = document.querySelector('.warningLevelSetting');
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

const billsetitemRadio = document.querySelector('.billItemTypeWithSettings:checked')
const totsetElement = document.querySelector(".totalSettings");
const totsetCallElement = document.querySelector(".callTotalSettings");
const totsetSmsElement = document.querySelector(".smsTotalSettings");

const Bill = settingsBill();

updateButnElement.addEventListener('click', function(){

   Bill.setcallCost = Number(callSettingElement.value);
   Bill.setsmsCost = Number(smsSettingElement.value);
   Bill.getwarningValue = Number(warningSettingElement.value);
   Bill.getCriticalValue = Number(criticalLevelSetting.value);

} )

billsetitemRadio.addEventListener('click', function(){
   Bill.getTotal = totsetElement.innerHTML;
   Bill.getCallTotal = totsetCallElement.innerHTML;
   Bill.getSmsTotal = totsetSmsElement.innerHTML;
})