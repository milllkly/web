document.addEventListener('DOMContentLoaded', function() {
    var socialLinks = document.querySelectorAll('#socialMediaList a');

    socialLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f8f9fa';
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var currentItem = 0;

    function showNextItem() {
        carouselItems[currentItem].classList.remove('active');

        currentItem = (currentItem + 1) % carouselItems.length;

        carouselItems[currentItem].classList.add('active');
    }

    var carousel = document.querySelector('.carousel');
    carousel.addEventListener('click', showNextItem);
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('serviceRequestForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Service request submitted!');

    });
});

document.addEventListener('DOMContentLoaded', function() {

    var submitButton = document.querySelector('#serviceRequestForm button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        var fullName = document.querySelector('#fullName').value;
        var emailAddress = document.querySelector('#emailAddress').value;
        var phoneNumber = document.querySelector('#phoneNumber').value;
        var address = document.querySelector('#address').value;
        var waterSize = document.querySelector('#waterSize').value;
        var quantity = document.querySelector('#quantity').value;
        var additionalInfo = document.querySelector('#additionalInfo').value;

        if (!fullName || !emailAddress || !phoneNumber || !address || !waterSize || !quantity || !additionalInfo) {
            alert('Please fill in all the fields.');
        } else {
            alert('Service request submitted!');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {

    function showChatPopup() {
        document.getElementById('chatPopup').style.display = 'block';
    }

    function closeChatPopup() {
        document.getElementById('chatPopup').style.display = 'none';
    }

   
    document.getElementById('closeChat').addEventListener('click', closeChatPopup);

    setTimeout(showChatPopup, 5000);
});


document.addEventListener('DOMContentLoaded', function() {
    var fullScreenButton = document.getElementById('fullScreenBtn');
    var videoContainer = document.getElementById('videoContainer');

    fullScreenButton.addEventListener('click', function() {
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        } else if (videoContainer.mozRequestFullScreen) { 
            videoContainer.mozRequestFullScreen();
        } else if (videoContainer.webkitRequestFullscreen) { 
            videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) { 
            videoContainer.msRequestFullscreen();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollTopBtn = document.getElementById('scrollTopBtn');

   
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

   
    scrollTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.mt-2');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            link: document.getElementById('link').value,
            message: document.getElementById('message').value
        };

        
        console.log('Form Data Submitted: ', formData);

        alert('Form submission is currently disabled.');
    });
});


var modal = document.getElementById("aboutUsModal");


var btn = document.getElementById("openModalBtn");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 document.addEventListener('DOMContentLoaded', function() {

    var music = document.getElementById('backgroundMusic');
    var button = document.getElementById('musicButton');


    button.addEventListener('click', function() {
     
        if (music.paused) {
            music.play(); 
            button.textContent = 'Pause Music';
            } 
            else {
            music.pause(); 
            button.textContent = 'Play Music';
        }
    });
});

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");

    // Mapping of droppable items to their suitable drop zones
    const suitable = {
        'zero': 'dropBox1', // Assuming 0.5L bottle is suitable for dropBox1
        'one': 'dropBox2',  // Assuming 1L bottle is suitable for dropBox2
        'eleven': 'dropBox3', // Assuming 11L bottle is suitable for dropBox3
        'nineteen': 'dropBox4' // Assuming 19L bottle is suitable for dropBox4
    };

    // Check if the dragged item is suitable for the drop zone
    if (event.target.id === suitable[data]) {
        event.target.appendChild(document.getElementById(data));
    } else {
        // Optionally, provide feedback to the user that the drop is not allowed
        alert("This item cannot be dropped here.");
    }
}
