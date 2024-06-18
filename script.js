document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imageLink = document.getElementById('imageLink').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(el => el.value).join(', ');

    const studentsTableBody = document.getElementById('studentsTableBody');

    const row = document.createElement('tr');

    const descriptionCell = document.createElement('td');
    descriptionCell.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    const imageCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = imageLink;
    img.alt = name;
    imageCell.appendChild(img);

    row.appendChild(descriptionCell);
    row.appendChild(imageCell);
    studentsTableBody.appendChild(row);

    document.getElementById('registrationForm').reset();
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('registrationForm').reset();
});
