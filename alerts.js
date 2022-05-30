import Swal from 'sweetalert2'
export function alerter(text) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: text,
  })

}

export function success() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Added correctly!',
    showConfirmButton: false,
    timer: 1500
  })
}