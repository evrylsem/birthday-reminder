function clearList() {
    var users = document.querySelectorAll('.user');
    users.forEach(function(user) {
        user.remove();
    });

    var header = document.getElementById('header');
    header.innerText = 'No birthdays today';

}