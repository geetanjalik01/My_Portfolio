document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("Your message has been sent successfully!");
                form.reset();
            } else {
                alert("There was an error sending your message. Please try again later.");
            }
        } catch (error) {
            alert("There was an error submitting the form. Please check your connection.");
            console.error('Error:', error);
        }
    });
});
