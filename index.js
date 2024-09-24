
    const studentLogin = document.getElementById('studentLogin');
    const parentLogin = document.getElementById('parentLogin');
    const stuDiv = document.querySelector('.stu');
    const parDiv = document.querySelector('.par');

    studentLogin.addEventListener('click', () => {
        stuDiv.style.display = 'block';
        parDiv.style.display = 'none';
        studentLogin.style.color = '#789c05';
        parentLogin.style.color = 'black';
    });

    parentLogin.addEventListener('click', () => {
        parDiv.style.display = 'block';
        stuDiv.style.display = 'none';
        parentLogin.style.color = '#789c05';
        studentLogin.style.color = 'black';
    });
