const guarantee = document.querySelectorAll("#guarantee");

// Set guarantee days
const guaranteeDays = "60";

guarantee.forEach(function(e) {

	if ( e.classList.contains('custom') ) return;

	// Product Name
	let productName = typeof e.dataset.productname !== 'undefined' ? e.dataset.productname : 'Horse Peak Gelatin';

	// defining the FDA seal
	const fdaBadge = 'fda-badge.svg';

	// Content for the guarantee section
	const guaranteeText = {

		"guaranteeTitle": `100% Satisfaction or Your Money Back <br class="d-none d-md-block"><span>${guaranteeDays}-Day Guarantee</span>`,

		"guaranteeContent":`We're so confident you'll love your experience with ${productName} that we offer a 100% satisfaction guarantee for ${guaranteeDays} days. Try it, take your time, and see how it works for you. If you're not completely happy for any reason, just let us know — and we’ll refund every penny.`,

	}

	// Build the HTML for the product item
	e.innerHTML = `
		<div class="container position-relative section-pad">
			<div class="row align-items-center justify-content-center">
				<div class="col-12 col-md-3 text-center">
					<figure><img src="${assetsPath}guarantee-badge.svg" alt="Guarantee" class="mb-3"></figure>
				</div>
				<div class="col-12 col-md-9">
					<h2 class="fs-3 mb-3">${guaranteeText.guaranteeTitle}</h2>
					<p class="m-0">${guaranteeText.guaranteeContent}</p>
					<!-- Compliance: Trust Badges Section -->
					<!-- Approved badges: GMP (COA validated), FDA Registered Facility (not "Approved"), USA Ingredients (Foreign and Domestic) -->
					<!-- Removed: "100% Natural" (nat.png) - Too strict definition, compliance risk -->
					<!-- Removed: "GMO-Free" (gmo.png) - Not explicitly verified by COA as Non-GMO Project Verified -->
					<div class="d-flex gap-3 flex-wrap align-items-center justify-content-center mt-4 badges">
						<figure class="mb-0">
							<img src="${assetsPath}gmp-badge.svg" alt="GMP Certified - Good Manufacturing Practice">
						</figure>
						<figure class="mb-0">
							<img src="${assetsPath}${fdaBadge}" alt="FDA Registered Facility">
							<small class="d-block mt-1 text-white-50" style="font-size: 0.7em;">FDA Registered Facility</small>
						</figure>
						<figure class="mb-0">
							<img src="${assetsPath}usa-badge.svg" alt="USA Ingredients - Foreign and Domestic">
							<small class="d-block mt-1 text-white-50" style="font-size: 0.7em;">USA Ingredients</small>
						</figure>
					</div>
					<div class="fda-compliance-disclaimer mt-4 pt-3" style="border-top: 1px solid rgba(255,255,255,0.2);">
						<p class="small mb-0 text-white-50" style="font-size: 0.85em; line-height: 1.5;">
							<strong class="text-white">FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
						</p>
					</div>
				</div>
			</div>
		</div>
		`
	;
});