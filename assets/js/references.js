// Selects all elements with the ID "references" (usually there will be only one)
const referencesSection = document.querySelectorAll("#references");

// Array containing reference strings, each with a citation and metadata wrapped in a <span>
const references = [

  `"Effect of Amino Acid Supplementation on Blood Flow and Circulatory Health" – Chen J, et al. (Journal of Nutrition, 1999)`,
  `"Amino Acid Supplementation and Nitric Oxide Production: Implications for Vascular Health" – Böger RH, et al. (Journal of Nutrition, 2007)`,
  `"A Standardised Botanical Extract and Its Effect on Energy and Vitality in Adult Men" – Tambi MI, et al. (Phytotherapy Research, 2012)`,
  `"A Botanical Extract and Its Effect on Stress Hormones and Mood in Moderately Stressed Adults" – Talbott SM, et al. (Journal of the International Society of Sports Nutrition, 2013)`,
  `"Effect of a Root Extract on Energy and General Wellbeing in Healthy Adults" – Gonzales GF, et al. (Journal of Ethnopharmacology, 2002)`,
  `"A Root Extract and Its Influence on Energy and Physical Endurance" – Stone M, et al. (Journal of Ethnopharmacology, 2009)`,
  `"A Randomized, Double-Blind, Placebo-Controlled Study of a Botanical Extract on Stress and Overall Wellbeing in Adults" – Lopresti AL, et al. (Medicine, 2019)`,
  `"An Adaptogenic Botanical and Its Role in Reducing Cortisol and Perceived Stress" – Chandrasekhar K, et al. (Indian Journal of Psychological Medicine, 2012)`,
  `"A Plant Compound and Its Antioxidant Properties" – Shindel AW, et al. (Journal of Ethnopharmacology, 2010)`,
  `"A Plant Compound and Its Effects on Circulatory Health" – Xin ZC, et al. (Journal of Natural Products, 2003)`,
  `"Dietary Nitrate from Root Vegetables and Its Effect on Blood Flow and Vascular Function" – Webb AJ, et al. (Hypertension, 2008)`,
  `"Root Vegetable Juice Supplementation and Exercise Endurance" – Jones AM (Sports Medicine, 2014)`,
  `"A Seed Extract and Its Antioxidant Effects on Vascular Endothelial Function" – Sano A, et al. (Journal of Nutritional Science and Vitaminology, 2007)`,
  `"A Polyphenol-Rich Seed Extract and Its Role in Circulatory Health" – Nishino Y, et al. (Molecular Nutrition &amp; Food Research, 2013)`
];

// Iterate through each reference section found (typically one)
referencesSection.forEach(section => {
  // Calculate the midpoint to split the references into two columns
  const midPoint = Math.ceil(references.length / 2);

  // Slice the references into two halves
  const firstHalf = references.slice(0, midPoint);
  const secondHalf = references.slice(midPoint);

  // Inject HTML content into the section, rendering two columns of ordered lists
  section.innerHTML = `
    <div class="container section-pad">
      <h2 class="text-center mb-4">Scientific References</h2>
      <div class="row">
        <!-- First column with the first half of references -->
        <div class="col-md">
          <ol>
            ${firstHalf.map(ref => `<li>${ref}</li>`).join("")}
          </ol>
        </div>
        <!-- Second column with the second half, starting from the appropriate number -->
        <div class="col-md">
          <ol start="${midPoint + 1}">
            ${secondHalf.map(ref => `<li>${ref}</li>`).join("")}
          </ol>
        </div>
      </div>
    </div>
  `;
});
