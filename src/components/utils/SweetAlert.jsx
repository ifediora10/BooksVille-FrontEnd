import Swal from 'sweetalert2';

export const SweetAlert = (type, title, text, timer = 1000) => {
    return Swal.fire({
        icon: type,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: timer
    });
};