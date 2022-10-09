// ex03
function ex03() {
  var name = "Thạch Kim Hên";
  var incomeTaxes = 0;
  var totalIncome = 970;
  var dependPer = 3;
  var taxes = 0;
  incomeTaxes = totalIncome - 4 - dependPer * 1.6;
  if (totalIncome <= 60) {
    taxes = (totalIncome * 5) / 100;
  } else if (totalIncome > 60 && totalIncome <= 120) {
    taxes = (totalIncome * 10) / 100;
  } else if (totalIncome > 120 && totalIncome <= 210) {
    taxes = (totalIncome * 15) / 100;
  } else if (totalIncome > 210 && totalIncome <= 384) {
    taxes = (totalIncome * 20) / 100;
  } else if (totalIncome > 384 && totalIncome <= 624) {
    taxes = (totalIncome * 25) / 100;
  } else if (totalIncome > 624 && totalIncome <= 960) {
    taxes = (totalIncome * 30) / 100;
  } else {
    taxes = (totalIncome * 35) / 100;
  }
  console.log(name, " thuế phải đóng là: ", taxes);
}
ex03();

//ex04
function ex04() {
  var id = "12345678";
  var connect = 14;
  var channel = 5;

  var normalBill = 4.5;
  var normalBasicSer = 20.5 * connect;
  var normalProCha = 7.5 * channel;
  var costNormal = normalBill + normalBasicSer + normalProCha;

  var EnterpriseBill = 15;
  var EnterpriseBasicSer = 75;
  if (connect > 10) {
    EnterpriseBasicSer += 5 * (connect - 10);
  }
  var EnterpriseProCha = 50 * channel;
  var costEnterprise = EnterpriseBill + EnterpriseBasicSer + EnterpriseProCha;

  console.log(costNormal);
  console.log(costEnterprise);
}
ex04();
