

function getPageno (){
  const param = new URLSearchParams(location.search);
  const pageno = parseInt(param.get('pageno'));

  if(isNaN(pageno))
  return 1;
  else if(pageno<1)
    return 1;
    return pageno;
  
}
async function fetch(pageno=1, pagesize=10){
  const api = 'http://sample.bmaster.kro.kr/contacts';
  const url = `${api}?pageno=${pageno}&pagesize=${pagesize}`;

  try{
    return await $.ajax(url);
  }catch(err){
    return null;
   
  }
}
  function printContacts(contacts){
  const $tbody =$('#tbody');
  for(const c of contacts){
    const html = `
    <tr>
    <td>${c.no}</td>
    <td>${c.name}</td>
    <td>${c.address}</td>
    <td>${c.tel}</td>
    </tr>
    `
    $tbody.append(html);
  }
 
}

