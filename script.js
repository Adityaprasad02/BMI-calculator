const form = document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();
  const ht = parseInt(document.querySelector('#ht').value);
  const wt = parseInt(document.querySelector('#wt').value);
  const result = document.querySelector('#result');
  if (ht === '' || ht < 0 || isNaN(ht)) {
    result.innerHTML = `Please give a valid height !!`;
   }
 else if (wt === '' || wt < 0 || isNaN(wt)) {
   result.innerHTML = `Please give a valid weight !!`;
 }
 else{
  const BMI = wt/((ht/100)*(ht/100))
  result.innerHTML = `BMI :- ${BMI.toFixed(2)}`
 }
 

})
