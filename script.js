const validateAndGetFormData = () => {
    let empIdVar = $("#empId").val();
    if (empIdVar === "") {
        alert("Employee ID Required Value");
        $("#empId").focus();
        return "";
    }
    let empNameVar = $("#empName").val();
    if (empNameVar === "") {
        alert("Employee Name is Required Value");
        $("#empName").focus();
        return "";
    }
    let empEmailVar = $("#empEmail").val();
    if (empEmailVar === "") {
        alert("Employee Email is Required Value");
        $("#empEmail").focus();
        return "";
    }
    let jsonStrObj = {
        empId: empIdVar,
        empName: empNameVar,
        empEmail: empEmailVar,
    };
    return JSON.stringify(jsonStrObj);
}

const resetForm = () => {
    $("#empId").val("")
    $("#empName").val("");
    $("#empEmail").val("");
    $("#empId").focus();
}

const saveEmployee = () => {
    let jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    let putReqStr = createPUTRequest("90938499|-31948830764427365|90946832",
            jsonStr, "SAMPLE", "EMP-REL");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    let resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
}