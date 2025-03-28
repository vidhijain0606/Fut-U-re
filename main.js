document.addEventListener('DOMContentLoaded', function() {
    const picker = datepicker('#submitBtn', {
        formatter: (input, date) => {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            input.value = date.toLocaleDateString('en-US', options);
        },
        onSelect: (instance, date) => {
            const text = document.querySelector('.cloud-text').value;
            const email = document.getElementById('email').value;
            const time = document.getElementById('time').value;

            if (text && email) {
                const subject = `Your DreamyDoodle from ${date.toDateString()}`;
                const body = `Dream: ${text}\n\nDate: ${date.toDateString()}\nTime: ${time}`;

                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Show the magic message
                document.getElementById('magicMessage').style.display = 'block';
            }
        }
    });

    document.getElementById('submitBtn').addEventListener('click', function() {
        picker.show(); // Show the datepicker
    });
});
