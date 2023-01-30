function search() {
   const list = Array.from(document.querySelectorAll('#towns li'));
   const result = document.getElementById('result');
   const search = document.getElementById('searchText');

   let counter = 0;

   list.forEach(element => {

      if (element.textContent.includes(search.value)) {
         counter++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
      else{
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   });

   result.textContent = `${counter} matches found`;
}
