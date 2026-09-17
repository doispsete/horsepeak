// Selects all elements with the ID "faq" (usually there will be only one)
const faqContainer = document.querySelectorAll("#faq");

// Array of FAQ items, each containing a question and its corresponding answer
const faqItems = [
  {
    question: "What is Horse Peak Gelatin?",
    answer: "Horse Peak Gelatin is a daily gummy made with natural botanical extracts, designed to support natural vitality and everyday energy in men. See the full ingredient list in the question below."
  },
  {
    question: "How do I take Horse Peak Gelatin?",
    answer: "As a dietary supplement, take one (1) gummy daily with 8 oz. of water. For best results, take it 20-30 minutes before a meal or as directed by your healthcare professional. Each bottle contains 30 gummies — a full 30-day supply."
  },
  {
    question: "What's inside each gummy?",
    answer: "Each serving delivers L-Arginine HCl, Tongkat Ali extract, Maca Root extract, Ashwagandha (Withania somnifera) extract, Horny Goat Weed (Epimedium) extract, Beet Root extract and Grape Seed extract. Horse Peak Gelatin is manufactured in the USA with globally sourced ingredients, in an FDA-registered, GMP-certified facility."
  },
  {
    question: "How long until I notice results?",
    answer: "Because Horse Peak Gelatin uses natural botanical extracts, results build with consistent daily use. Most guys start noticing a difference in energy and focus within the first few weeks — that's why our 3 and 6-bottle kits, built for 60-90 days of use, are our most popular options."
  },
  {
    question: "Is Horse Peak Gelatin safe? Are there any side effects?",
    answer: "Horse Peak Gelatin is made with natural ingredients in an FDA-registered, GMP-certified facility. As with any supplement, consult your doctor before use if you are under 18, pregnant or nursing, or have a known medical condition or are taking medication. Discontinue use and consult a physician if you experience any adverse reaction."
  },
  {
    question: "What if it doesn't work for me?",
    answer: "Every order is backed by a 60-day, 100% money-back guarantee. If you're not completely satisfied for any reason, contact our support team within 60 days of your purchase and we'll refund you in full — no hassle."
  },
  {
    question: "How fast will my order ship, and is it a subscription?",
    answer: "Every order is a one-time purchase — there is no auto-ship or hidden subscription. Orders are processed securely through our checkout partner and typically ship within 1-2 business days."
  }
];

// Loop through each matched element with ID "faq" (in most cases, only one)
faqContainer.forEach(function(el) {

  // Initialize the HTML structure for the FAQ section
  let faqHTML = `
    <div class="container section-pad">
      <h2 class="text-center text-white mb-4">Frequently Asked Questions</h2>
      <div class="accordion" id="accordionExample">
  `;

  // Iterate over each FAQ item to build the accordion entries
  faqItems.forEach((item, index) => {
    // Create a unique ID for the collapse panel
    const collapseId = `collapse${index + 1}`;
    
    // Append an accordion item (question and answer) to the HTML string
    faqHTML += `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
            ${item.question}
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            ${item.answer}
          </div>
        </div>
      </div>
    `;
  });

  // Close the accordion and container structure
  faqHTML += `
      </div>
    </div>
  `;

  // Insert the generated HTML into the current element
  el.innerHTML = faqHTML;
});
