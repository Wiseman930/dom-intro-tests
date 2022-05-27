"use strict";

function settingsBill() {
  var callValue = 0;
  var smsValue = 0;
  var warning = 0;
  var critical = 0;
  var callTotal = 0;
  var smsTotal = 0;
  var total = 0;

  function setcallCost(callCost) {
    callValue = callCost;
  }

  function returnCall() {
    return callValue;
  }

  function setsmsCost(smsCost) {
    smsValue = smsCost;
  }

  function returnSms() {
    return smsValue;
  }

  function getwarningValue(warnLevel) {
    warning = warnLevel;
  }

  function returnWarning() {
    return warning;
  }

  function getCriticalValue(criticalLevel) {
    critical = criticalLevel;
  }

  function returnCritical() {
    return critical;
  }

  function makeCall() {
    callTotal += callValue;
  }

  function getCallTotal() {
    return callTotal;
  }

  function makeSms() {
    smsTotal += smsValue;
  }

  function getSmsTotal() {
    return smsTotal;
  }

  function getTotal() {
    total = smsTotal + callTotal;
    return total;
  }

  function indicateState() {
    if (getTotal() >= returnWarning()) {
      return "warning";
    } else if (getTotal() >= returnCritical()) {
      return "danger";
    }
  }

  return {
    returnCritical: returnCritical,
    getCriticalValue: getCriticalValue,
    getwarningValue: getwarningValue,
    returnWarning: returnWarning,
    returnSms: returnSms,
    setsmsCost: setsmsCost,
    setcallCost: setcallCost,
    returnCall: returnCall,
    getCallTotal: getCallTotal,
    makeSms: makeSms,
    getSmsTotal: getSmsTotal,
    makeCall: makeCall,
    getTotal: getTotal,
    indicateState: indicateState
  };
}