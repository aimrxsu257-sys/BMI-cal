function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // แปลงเป็นเมตร

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let status = "";
        let color = "";

        if (bmi < 18.5) {
            status = "น้ำหนักน้อย / ผอม";
            color = "#17a2b8";
        } else if (bmi < 23) {
            status = "ปกติ (สุขภาพดี)";
            color = "#28a745";
        } else if (bmi < 25) {
            status = "ท้วม / โรคอ้วนระดับ 1";
            color = "#ffc107";
        } else if (bmi < 30) {
            status = "อ้วน / โรคอ้วนระดับ 2";
            color = "#fd7e14";
        } else {
            status = "อ้วนมาก / โรคอ้วนระดับ 3";
            color = "#dc3545";
        }

        const resultDiv = document.getElementById('result');
        resultDiv.style.display = "block";
        document.getElementById('bmi-value').innerHTML = `ค่า BMI: <strong>${bmi}</strong>`;
        document.getElementById('bmi-status').innerText = status;
        document.getElementById('bmi-status').style.color = color;
    } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง");
    }
}
