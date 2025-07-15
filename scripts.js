 <script>
        const uploadButton = document.getElementById('uploadButton');
        const fileInput = document.getElementById('fileInput');
        const feedbackModal = document.getElementById('feedbackModal');
        const closeModalButton = document.getElementById('closeModalButton');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        const modalIcon = document.getElementById('modal-icon');

        // When the "Find My Shade!" button is clicked, trigger the hidden file input
        uploadButton.addEventListener('click', () => {
            fileInput.click();
        });

        // When a file is selected
        fileInput.addEventListener('change', (event) => {
            if (event.target.files && event.target.files[0]) {
                const file = event.target.files[0];
                console.log('File selected:', file.name);

                // Show a "processing" message in the modal
                modalIcon.innerHTML = `<svg class="animate-spin h-12 w-12 text-pink-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
                modalTitle.textContent = 'Analyzing Your Photo...';
                modalMessage.textContent = 'Our cute AI helpers are finding your perfect match!';
                showModal();

                // Simulate a delay for processing the image
                setTimeout(() => {
                    // Show success message
                    modalIcon.innerHTML = `<svg class="h-12 w-12 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                    modalTitle.textContent = 'Match Found!';
                    modalMessage.textContent = `We've analyzed your photo. Check your results! (This is a demo).`;
                }, 2500); // 2.5 second delay
            }
        });

        function showModal() {
            feedbackModal.classList.remove('hidden');
            setTimeout(() => feedbackModal.classList.remove('opacity-0'), 10); // Start fade-in
        }

        function hideModal() {
            feedbackModal.classList.add('opacity-0');
            setTimeout(() => feedbackModal.classList.add('hidden'), 300); // Hide after fade-out
        }

        // Close modal events
        closeModalButton.addEventListener('click', hideModal);
        feedbackModal.addEventListener('click', (event) => {
            if (event.target === feedbackModal) {
                hideModal();
            }
        });
        
        // Reset file input value so the 'change' event fires even if the same file is selected again
        fileInput.addEventListener('click', (event) => {
            event.target.value = null;
        });

    </script>