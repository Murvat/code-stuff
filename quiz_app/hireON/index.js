

document.addEventListener('DOMContentLoaded', function () {
    let firstName = document.getElementById('first_name2');
    let positionName = document.getElementById('first_name1');
    let mainCandidates = {};

    function saveData() {
        if (firstName.value !== '' && positionName.value !== '') {
            let candidateData = [firstName.value, positionName.value];
            let candidateKey = 'candidate_' + (Object.keys(mainCandidates).length + 1);
            mainCandidates[candidateKey] = candidateData;
            localStorage.setItem(candidateKey, JSON.stringify(candidateData));
        } else {
            alert('Please fill in the forms');
        }
    }

    document.querySelector('.buttonSumbit').addEventListener('click', saveData);
});
