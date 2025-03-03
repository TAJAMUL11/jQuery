$(document).ready(function() {
    $("#loading").show(); // Show loading text

    // Fake API Call (Simulating fetching FAQs)
    setTimeout(function() {
        $.getJSON("https://jsonplaceholder.typicode.com/posts?_limit=5", function(data) {
            $("#loading").hide(); // Hide loading text

            data.forEach(function(item) {
                var faqItem = `
                    <div class="accordion">
                        <div class="accordion-header">${item.title}</div>
                        <div class="accordion-content">${item.body}</div>
                    </div>
                `;
                $("#faq-container").append(faqItem);
            });

            // Add accordion functionality
            $(".accordion-header").click(function() {
                $(".accordion-content").slideUp(); // Hide all answers
                $(".accordion-header").removeClass("active");

                if (!$(this).next(".accordion-content").is(":visible")) {
                    $(this).next(".accordion-content").slideDown(); // Show clicked answer
                    $(this).addClass("active");
                }
            });
        });
    }, 1000); // Simulating API delay
});
