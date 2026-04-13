// plan-de-estudios page script intentionally minimal; shared behavior lives in universal-layout.js
(function () {
	function setActivePlan(planKey) {
		var tabs = document.querySelectorAll('[data-plan-tab]');
		var previews = document.querySelectorAll('[data-plan-preview]');
		var sections = document.querySelectorAll('[data-plan-section]');

		tabs.forEach(function (tab) {
			var isActive = tab.getAttribute('data-plan-tab') === planKey;
			tab.classList.toggle('is-active', isActive);
			tab.setAttribute('aria-current', isActive ? 'page' : 'false');
		});

		previews.forEach(function (preview) {
			var isActive = preview.getAttribute('data-plan-preview') === planKey;
			preview.classList.toggle('is-active', isActive);
		});

		sections.forEach(function (section) {
			var isActive = section.getAttribute('data-plan-section') === planKey;
			section.classList.toggle('is-active-plan', isActive);
			section.hidden = !isActive;
		});
	}

	function getPlanFromHash() {
		if (window.location.hash === '#plan-2016') {
			return '2016';
		}
		return '2020';
	}

	function initPlanSelector() {
		var tabs = document.querySelectorAll('[data-plan-tab]');
		if (!tabs.length) {
			return;
		}

		var currentPlan = getPlanFromHash();
		setActivePlan(currentPlan);

		tabs.forEach(function (tab) {
			tab.addEventListener('click', function (event) {
				event.preventDefault();
				var planKey = tab.getAttribute('data-plan-tab');
				setActivePlan(planKey);
				var activeSection = document.querySelector('[data-plan-section="' + planKey + '"]');
				if (activeSection) {
					activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			});
		});

		window.addEventListener('hashchange', function () {
			setActivePlan(getPlanFromHash());
		});
	}

	document.addEventListener('DOMContentLoaded', initPlanSelector);
})();
