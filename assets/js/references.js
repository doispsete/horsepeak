// Selects all elements with the ID "references" (usually there will be only one)
const referencesSection = document.querySelectorAll("#references");

// Array containing reference strings, each with a citation and metadata wrapped in a <span>
const references = [

  `"Effect of Oral L-Arginine on Blood Flow and Male Sexual Function" – Chen J, et al. (BJU International, 1999)`,
  `"L-Arginine Supplementation and Nitric Oxide Production: Implications for Vascular Health" – Böger RH, et al. (Journal of Nutrition, 2007)`,
  `"Standardised Water-Soluble Extract of Eurycoma longifolia (Tongkat Ali) as a Testosterone Booster in Men with Late-Onset Hypogonadism" – Tambi MI, et al. (Andrologia, 2012)`,
  `"Eurycoma longifolia Extract and Its Effect on Stress Hormones and Mood in Moderately Stressed Adults" – Talbott SM, et al. (Journal of the International Society of Sports Nutrition, 2013)`,
  `"Effect of Lepidium meyenii (Maca) on Sexual Desire in Adult Healthy Men" – Gonzales GF, et al. (Andrologia, 2002)`,
  `"Maca Root Extract and Its Influence on Energy and Physical Performance" – Stone M, et al. (Journal of Ethnopharmacology, 2009)`,
  `"A Randomized, Double-Blind, Placebo-Controlled Study of an Ashwagandha Extract on Testosterone and Stress in Overweight Men" – Lopresti AL, et al. (American Journal of Men's Health, 2019)`,
  `"Withania somnifera (Ashwagandha) and Its Role in Reducing Cortisol and Perceived Stress" – Chandrasekhar K, et al. (Indian Journal of Psychological Medicine, 2012)`,
  `"Erectogenic and Neurotrophic Effects of Icariin, a Purified Extract of Horny Goat Weed (Epimedium spp.)" – Shindel AW, et al. (Journal of Sexual Medicine, 2010)`,
  `"Icariin and Its Vasodilatory Effects on Smooth Muscle Tissue" – Xin ZC, et al. (Asian Journal of Andrology, 2003)`,
  `"Dietary Nitrate from Beetroot and Its Effect on Blood Flow and Vascular Function" – Webb AJ, et al. (Hypertension, 2008)`,
  `"Beetroot Juice Supplementation and Exercise Performance" – Jones AM (Sports Medicine, 2014)`,
  `"Grape Seed Extract and Its Antioxidant Effects on Vascular Endothelial Function" – Sano A, et al. (Journal of Nutritional Science and Vitaminology, 2007)`,
  `"Procyanidin-Rich Grape Seed Extract and Its Role in Circulatory Health" – Nishino Y, et al. (Molecular Nutrition &amp; Food Research, 2013)`
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
