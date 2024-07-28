
        document.addEventListener('DOMContentLoaded', function() {
            // Select all questions
            const questions = document.querySelectorAll('.faq-item .question');
            
            // Add a click event listener to each question
            questions.forEach(question => {
                question.addEventListener('click', function() {
                    // Get the corresponding answer
                    const answer = this.nextElementSibling;

                    // Toggle the visibility of the answer
                    if (answer.style.display === 'none' || answer.style.display === '') {
                        answer.style.display = 'block';
                    } else {
                        answer.style.display = 'none';
                    }
                });
            });
        });
