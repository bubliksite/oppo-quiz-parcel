$(document).ready(function() {

    var strGET = window.location.search.replace('?', '')
    if (strGET) {
        $('#formSuccessSendModal').addClass('show')
        $('#formSuccessSendModal').css('display', 'block')
        $('#bg-modal').addClass('modal-backdrop fade show')

    }

    $('#formSuccessSendModal').click(function () {
        $('#formSuccessSendModal').removeClass('show')
        $('#formSuccessSendModal').css('display', 'none')
        $('body').removeClass('modal-open')
        $('#bg-modal').removeClass('modal-backdrop fade show')
    })
})
