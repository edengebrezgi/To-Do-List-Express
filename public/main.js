var removeAll = document.getElementById("remove")
removeAll.addEventListener('click', clearAll)
function clearAll(){
  const msg = this.parentNode.parentNode.childNodes[1].innerText
  fetch('remove', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'msg': msg
    })
  }).then(function (response) {
    window.location.reload()
  })
}

