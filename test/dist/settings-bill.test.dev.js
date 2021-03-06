"use strict";

//Set values
describe('the settings Bill function, making values', function () {
  it('should get the call cost', function () {
    var setcall = settingsBill();
    setcall.setcallCost(1.45);
    assert.equal(1.45, setcall.returnCall());
    var setcall2 = settingsBill();
    setcall2.setcallCost(1.45);
    assert.equal(1.45, setcall2.returnCall());
  });
  it('should get the sms cost', function () {
    var setcall = settingsBill();
    setcall.setsmsCost(0.75);
    assert.equal(0.75, setcall.returnSms());
  });
  it('should get the warning value', function () {
    var setcall = settingsBill();
    setcall.getwarningValue(3);
    assert.equal(3, setcall.returnWarning());
  });
  it('should get the critical value', function () {
    var setcall = settingsBill();
    setcall.getCriticalValue(3);
    assert.equal(3, setcall.returnCritical());
  });
  it('should get the call and sms value', function () {
    var setcall = settingsBill();
    setcall.setsmsCost(3);
    setcall.setcallCost(5);
    assert.equal(3, setcall.returnSms());
    assert.equal(5, setcall.returnCall());
  });
}); //Use Values

describe('the settings Bill function, using Values', function () {
  it('it should get the total callcost of 3 calls of 2.5 each', function () {
    var setcall = settingsBill();
    setcall.getCriticalValue(9);
    setcall.setcallCost(2.5);
    setcall.makeCall();
    setcall.makeCall();
    setcall.makeCall();
    assert.equal(7.5, setcall.getCallTotal());
  });
  it("it should get the total smscost of 3 sms's of 1.5 each", function () {
    var setcall = settingsBill();
    setcall.getCriticalValue(9);
    setcall.setsmsCost(1.5);
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeSms();
    assert.equal(4.5, setcall.getSmsTotal());
  });
  it("it should get the total cost of 3 sms's  and 3 calls and the grand total", function () {
    var setcall = settingsBill();
    setcall.getCriticalValue(9);
    setcall.setsmsCost(1.5);
    setcall.setcallCost(2.5);
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeCall();
    setcall.makeCall();
    setcall.makeCall();
    assert.equal(9.5, setcall.getTotal());
    assert.equal(4.5, setcall.getSmsTotal());
    assert.equal(5, setcall.getCallTotal());
  });
  it("it should return warning, when the total cost is equal to or greater than warning value", function () {
    var setcall = settingsBill();
    setcall.getwarningValue(7);
    setcall.getCriticalValue(8);
    setcall.setsmsCost(1.5);
    setcall.setcallCost(2.5);
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeCall();
    setcall.makeCall();
    setcall.makeCall();
    assert.equal(9.5, setcall.getTotal());
    assert.equal(4.5, setcall.getSmsTotal());
    assert.equal(5, setcall.getCallTotal());
    assert.equal('warning', setcall.indicateWarningState());
  });
  it("it should return danger, when the total cost is equal to or greater than critical value", function () {
    var setcall = settingsBill();
    setcall.getCriticalValue(7);
    setcall.getwarningValue(5);
    setcall.setsmsCost(1.5);
    setcall.setcallCost(2.5);
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeCall();
    setcall.makeCall();
    setcall.makeCall();
    assert.equal(7, setcall.getTotal());
    assert.equal(4.5, setcall.getSmsTotal());
    assert.equal(2.5, setcall.getCallTotal());
    assert.equal('critical', setcall.indicateCriticalState());
  });
  it("no added call or sms after the critical value", function () {
    var setcall = settingsBill();
    setcall.getCriticalValue(4);
    setcall.setsmsCost(1.5);
    setcall.setcallCost(2.5);
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeSms();
    setcall.makeCall();
    setcall.makeSms();
    setcall.makeSms();
    assert.equal(4.5, setcall.getTotal());
    assert.equal(4.5, setcall.getSmsTotal());
    assert.equal(0, setcall.getCallTotal());
  });
});