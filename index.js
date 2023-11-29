function setPropertyRequired(attributeName, boolValue = true) {
  //обов"язкове
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.required = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyHidden(attributeName, boolValue = true) {
  //приховане
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.hidden = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyDisabled(attributeName, boolValue = true) {
  //недоступне
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.disabled = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function clearAttribute(attributeCode, doNotClearOnInit, isDictionary) {
  //очищення
  if (doNotClearOnInit) {
    return;
  }
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = null;
  attribute.text = null;
  if (isDictionary) {
    attribute.itemCode = null;
    attribute.itemDictionary = null;
  }
  EdocsApi.setAttributeValue(attribute);
}

//1.Зміна властивостей атрибутів
function setPropcounterparty() {
  debugger;
  if (EdocsApi.getAttributeValue("CreateCounterparty").value === "true") {
    EdocsApi.setControlProperties({ code: "counterparty", hidden: false, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyCodenew", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "counterpartyNamenew", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "counterpartyFullName", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "PayerVAT", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "counterpartyTaxStatus", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "counterpartyVatNumber", hidden: false, disabled: false, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyOwnershipType", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "counterpartyLegalAddress", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "counterpartyEmail", hidden: false, disabled: false, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyPhone", hidden: false, disabled: false, required: false });
    EdocsApi.setControlProperties({ code: "TableOrganizationAccountNumber", hidden: false, disabled: false, required: false });
    EdocsApi.setControlProperties({ code: "OrganizationAccountNumber", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "OrganizationBankName", hidden: false, disabled: false, required: false });
    EdocsApi.setControlProperties({ code: "MFO", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "Сurrency", hidden: false, disabled: false, required: true });
  } else {
    clearAttribute("counterparty");
    clearAttribute("counterpartyCodenew");
    clearAttribute("counterpartyNamenew");
    clearAttribute("counterpartyFullName");
    clearAttribute("PayerVAT");
    clearAttribute("counterpartyTaxStatus");
    clearAttribute("counterpartyVatNumber");
    clearAttribute("counterpartyOwnershipType");
    clearAttribute("counterpartyLegalAddress");
    clearAttribute("counterpartyEmail");
    clearAttribute("counterpartyPhone");
    clearAttribute("TableOrganizationAccountNumber");
    clearAttribute("OrganizationAccountNumber");
    clearAttribute("OrganizationBankName");
    clearAttribute("MFO");
    clearAttribute("Сurrency");
    EdocsApi.setControlProperties({ code: "counterparty", hidden: false, disabled: false, required: true });
    EdocsApi.setControlProperties({ code: "counterpartyCodenew", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyNamenew", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyFullName", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "PayerVAT", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyTaxStatus", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyVatNumber", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyOwnershipType", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyLegalAddress", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyEmail", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "counterpartyPhone", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "TableOrganizationAccountNumber", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "OrganizationAccountNumber", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "OrganizationBankName", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "MFO", hidden: true, disabled: true, required: false });
    EdocsApi.setControlProperties({ code: "Сurrency", hidden: true, disabled: true, required: false });
  }
}

function onChangeCreateCounterparty() {
  setPropcounterparty();
}

function onCardInitialize() {
  onChangeCreateCounterparty();
}

//2. Створення нового контрагента в шині
