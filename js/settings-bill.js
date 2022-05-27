function settingsBill() {


  var callValue = 0;
  var smsValue = 0;
  var warning = 0;
  var critical = 0;
  var callTotal = 0;
  var smsTotal = 0;


  function setcallCost(callCost){
      callValue = callCost;
    }
  function returnCall(){
      return callValue;
    }
  function setsmsCost(smsCost){
      smsValue = smsCost;
  }
  function returnSms(){
    return smsValue;
  }
  function warningValue(warnLevel){
    warning = warnLevel;
  }
  function returnWarning(){
    return warning;
  }
  function getCriticalValue(criticalLevel){
    critical = criticalLevel;
  }
  function returnCritical(){
    return critical;
  }
  function makeCall(){
    callTotal += callValue;
  }
  function getCallTotal(){
      return callTotal;
  }
  function makeSms() {
    smsTotal += smsValue;
  }
  function getSmsTotal() {
    return smsTotal;
  }
  function getTotal(){
    return smsTotal + callTotal;
  }

  return {
    returnCritical,
    getCriticalValue,
    warningValue,
    returnWarning,
    returnSms,
    setsmsCost,
    setcallCost,
    returnCall,
    getCallTotal,
    makeSms,
    getSmsTotal,
    makeCall,
    getTotal
  }

}


