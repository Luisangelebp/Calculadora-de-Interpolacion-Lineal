document.getElementById('inter_form').addEventListener('submit', function (e) {
    const d = document;
    e.preventDefault();
    e.submitter.disabled = true;
    let lim1 = parseFloat(e.target[0].value),
        lim2 = parseFloat(e.target[1].value),
        x0 = parseFloat(e.target[2].value),
        x1 = parseFloat(e.target[3].value),
        x = parseFloat(e.target[4].value);
    let m = (lim2-lim1)/(x1-x0);
    let result = lim1+m*(x-x0);
    let resultDiv = d.getElementById('resultDiv');
    let r = d.createTextNode(`El resultado de la interpolacion es ${result}`);
    let p = d.createElement('P');
    p.appendChild(r)
    resultDiv.appendChild(p);

    
});
