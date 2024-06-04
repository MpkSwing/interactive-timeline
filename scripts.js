document.addEventListener('DOMContentLoaded', function () {
    const events = document.querySelectorAll('.event');
    let zoomLevel = 1;

    events.forEach(event => {
        event.addEventListener('click', function () {
            const year = event.getAttribute('data-year');
            const description = event.getAttribute('data-description');

            document.getElementById('eventModalLabel').innerText = year;
            document.querySelector('.modal-body').innerHTML = `<p>${description}</p>`;

            document.querySelectorAll('.event').forEach(e => e.classList.remove('highlight'));
            event.classList.add('highlight');

            $('#eventModal').modal('show');
        });

        // Add tooltips for better UX
        event.setAttribute('data-toggle', 'tooltip');
        event.setAttribute('title', event.getAttribute('data-description'));
    });

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Zoom In/Out functionality
    document.getElementById('zoomIn').addEventListener('click', function () {
        zoomLevel += 0.1;
        document.querySelector('.timeline').style.transform = `scale(${zoomLevel})`;
    });

    document.getElementById('zoomOut').addEventListener('click', function () {
        zoomLevel = Math.max(1, zoomLevel - 0.1);
        document.querySelector('.timeline').style.transform = `scale(${zoomLevel})`;
    });

    // Filter functionality
    document.getElementById('showAll').addEventListener('click', function () {
        events.forEach(event => {
            event.style.display = 'inline-block';
        });
    });

    document.getElementById('showWars').addEventListener('click', function () {
        events.forEach(event => {
            if (event.getAttribute('data-category') === 'war') {
                event.style.display = 'inline-block';
            } else {
                event.style.display = 'none';
            }
        });
    });

    document.getElementById('showTreaties').addEventListener('click', function () {
        events.forEach(event => {
            if (event.getAttribute('data-category') === 'treaty') {
                event.style.display = 'inline-block';
            } else {
                event.style.display = 'none';
            }
        });
    });

    document.getElementById('showDeclarations').addEventListener('click', function () {
        events.forEach(event => {
            if (event.getAttribute('data-category') === 'declaration') {
                event.style.display = 'inline-block';
            } else {
                event.style.display = 'none';
            }
        });
    });
});
