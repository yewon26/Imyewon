function getPageno (){
  const param = new URLSearchParams(location.search);
  const no = parseInt(param.get('no'));

  if(isNaN(no))
  return null;
  else if(no<1)
    return null;
    return no;
}
async function fetch(no){
  const url = `http://sample.bmaster.kro.kr/contacts/${no}`;
  try{
    return await $.ajax(url);
  }catch(err){
    return null;
  }
}
function printContacts(contacts){
  $('#photo').attr('src', contacts.photo);
  $('#name').text(contacts.name);
  $('#address').text(contacts.address);
  $('#tel').text(contacts.tel);
}