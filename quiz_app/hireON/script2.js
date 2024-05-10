document.addEventListener('DOMContentLoaded', function () {
    function showData() {
        let container = document.querySelector('.collection-item');
        container.innerHTML = '';

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let candidateData = JSON.parse(localStorage.getItem(key));
            let pElem = document.createElement('p');
            pElem.setAttribute('class', 'newCandidate');
            pElem.innerHTML = `${candidateData[0]} , position: ${candidateData[1]}`;
            container.appendChild(pElem);
        }
    }
    showData();
    window.addEventListener('storage', showData);
});

