changehead = () => {
  if (
    document.getElementById("tin").value ==
    document.getElementById("optcf").value
  ) {
    document.getElementById("count").innerHTML = "⛄CELSIUS TO FAHRENHEIT🔥";
  } else {
    document.getElementById("count").innerHTML = "⛄FAHRENHEIT TO CELSIUS🔥";
  }
};

changeDeg = () => {
  if (
    document.getElementById("tin").value ==
    document.getElementById("optfc").value
  ) {
    fv = document.getElementById("fah").value;

    newcv = ((fv - 32) * 5) / 9;
    let n = newcv.toFixed(2);
    console.log(n);

    document.getElementById("cel").value = n + " °C";
  } else {
    fv = document.getElementById("fah").value;

    newcv = (fv * 9) / 5 + 32;
    let m = newcv.toFixed(2);
    console.log(m);

    document.getElementById("cel").value = m + " °F";
  }
};
