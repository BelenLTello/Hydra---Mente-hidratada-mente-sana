const DRINK_GROUPS = [
  {
    title: "Agua",
    description: "Agua purificada y marcas de agua disponibles.",
    items: [
      { id: "bonafont", name: "Bonafont®", score: 95 },
      { id: "epura", name: "Epura®", score: 96 },
      { id: "ciel", name: "Ciel®", score: 95 },
      { id: "nestle-pureza-vital", name: "Nestlé Pureza Vital®", score: 94 },
      { id: "penafiel-agua", name: "Peñafiel®", score: 97 },
      { id: "fiji", name: "Fiji®", score: 98 },
      { id: "vitawa", name: "Vitawa®", score: 94 },
      { id: "skarch", name: "Skarch®", score: 93 }
    ]
  },
  {
    title: "Sueros orales",
    description: "Bebidas con mayor aporte por electrolitos.",
    items: [
      { id: "electrolit", name: "Electrolit®", score: 100 },
      { id: "pedialyte", name: "Pedialyte®", score: 100 },
      { id: "suero-en-polvo", name: "Suero en polvo®", score: 100 }
    ]
  },
  {
    title: "Bebidas deportivas",
    description: "Bebidas de reposición usadas durante actividad física.",
    items: [
      { id: "electrolit-sport", name: "Electrolit Sport®", score: 85 },
      { id: "gatorade-powerade", name: "Gatorade® / Powerade®", score: 80 }
    ]
  },
  {
    title: "Lácteos",
    description: "Bebidas lácteas y derivados líquidos.",
    items: [
      { id: "leche-entera", name: "Leche entera", score: 95 },
      { id: "leche-deslactosada", name: "Leche deslactosada", score: 95 },
      { id: "leche-evaporada", name: "Leche evaporada", score: 95 },
      { id: "yogur-natural", name: "Yogur natural", score: 90 },
      { id: "yogur-fruta", name: "Yogur con fruta", score: 90 }
    ]
  },
  {
    title: "Jugos naturales",
    description: "Jugos preparados con fruta o verdura natural.",
    items: [
      { id: "jugo-verde", name: "Jugo verde", score: 85 },
      { id: "naranja-natural", name: "Jugo de naranja natural", score: 90 },
      { id: "uva-natural", name: "Jugo de uva natural", score: 90 }
    ]
  },
  {
    title: "Jugos comerciales",
    description: "Jugos industrializados y bebidas comerciales de fruta.",
    items: [
      { id: "jumex", name: "Jumex®", score: 75 },
      { id: "del-valle", name: "Del Valle®", score: 75 },
      { id: "boing", name: "Boing®", score: 75 },
      { id: "jugos-boing", name: "Jugos Boing®", score: 75 }
    ]
  },
  {
    title: "Refrescos",
    description: "Refrescos y bebidas gasificadas saborizadas.",
    items: [
      { id: "coca-cola", name: "Coca-Cola®", score: 60 },
      { id: "pepsi", name: "Pepsi®", score: 60 },
      { id: "fanta", name: "Fanta®", score: 65 },
      { id: "sprite", name: "Sprite®", score: 65 },
      { id: "jarritos", name: "Jarritos®", score: 65 },
      { id: "penafiel-saborizada", name: "Peñafiel® saborizada", score: 70 },
      { id: "delaware-punch", name: "Delaware Punch®", score: 65 },
      { id: "sidral-mundet", name: "Sidral Mundet®", score: 70 }
    ]
  },
  {
    title: "Aguas frescas caseras",
    description: "Aguas preparadas en casa con o sin azúcar.",
    items: [
      { id: "jamaica-sin-azucar", name: "Jamaica sin azúcar", score: 90 },
      { id: "jamaica-con-azucar", name: "Jamaica con azúcar", score: 75 },
      { id: "horchata", name: "Horchata", score: 80 },
      { id: "limonada-sin-azucar", name: "Limonada sin azúcar", score: 90 },
      { id: "limonada-con-azucar", name: "Limonada con azúcar", score: 75 },
      { id: "tamarindo", name: "Tamarindo", score: 75 },
      { id: "melon-pina-guayaba", name: "Agua de melón/piña/guayaba sin azúcar", score: 90 }
    ]
  },
  {
    title: "Polvos saborizados",
    description: "Bebidas preparadas con polvo saborizado.",
    items: [{ id: "tang", name: "Tang®", score: 70 }]
  },
  {
    title: "Bebidas calientes",
    description: "Bebidas calientes comunes.",
    items: [
      { id: "cafe-negro", name: "Café negro", score: 60 },
      { id: "te-sin-azucar", name: "Té sin azúcar", score: 60 },
      { id: "chocolate-caliente", name: "Chocolate caliente", score: 70 },
      { id: "capuchino", name: "Capuchino", score: 75 }
    ]
  },
  {
    title: "Energéticas",
    description: "Bebidas energéticas y similares.",
    items: [
      { id: "monster-energy", name: "Monster Energy®", score: 50 },
      { id: "red-bull", name: "Red Bull®", score: 50 },
      { id: "volt", name: "Volt®", score: 45 },
      { id: "amper", name: "Amper®", score: 45 },
      { id: "vive-100", name: "Vive 100%®", score: 40 },
      { id: "arizona", name: "Arizona®", score: 50 }
    ]
  },
  {
    title: "Alcohol",
    description: "Bebidas alcohólicas de consumo común.",
    items: [
      { id: "cerveza", name: "Cerveza", score: 50 },
      { id: "vino-blanco", name: "Vino blanco", score: 45 },
      { id: "vino-tinto", name: "Vino tinto", score: 45 },
      { id: "tequila", name: "Tequila", score: 30 },
      { id: "vodka-ron-whisky", name: "Vodka®/Ron®/Whisky®", score: 30 }
    ]
  },
  {
    title: "Funcionales",
    description: "Bebidas funcionales o adicionadas.",
    items: [
      { id: "kombucha", name: "Kombucha", score: 60 },
      { id: "agua-coco-natural", name: "Agua de coco natural", score: 80 },
      { id: "leche-almendras", name: "Leche de almendras fortificada", score: 80 },
      { id: "bebida-colageno", name: "Bebida con colágeno", score: 70 },
      { id: "agua-vitaminas", name: "Agua con vitaminas (Vitamin Water®, Gatorade Zero®)", score: 75 },
      { id: "jengibre-curcuma", name: "Bebida de jengibre y cúrcuma", score: 75 }
    ]
  }
];

const HYDRATION_STATUS = [
  {
    min: 0,
    max: 30,
    level: "Hidratación muy baja 🚨",
    className: "status-danger",
    bodyClass: "bg-low",
    consequences: "Riesgo de deshidratación.",
    symptoms: ["Piel seca", "Mareo", "Dolor de cabeza", "Debilidad"],
    recommendationTitle: "Rehidratación urgente",
    recommendationItems: [
      "Empieza a rehidratarte de inmediato con agua y, si hay malestar importante, vómito, diarrea o mucho calor, usa una solución de hidratación oral con sodio, potasio y glucosa.",
      "Da sorbos frecuentes y constantes en lugar de tomar todo de golpe.",
      "Si sigues con confusión, desmayo, casi no orinas, respiración rápida o te sientes peor, busca atención médica de inmediato."
    ]
  },
  {
    min: 30,
    max: 50,
    level: "Hidratación deficiente 😓",
    className: "status-warning",
    bodyClass: "bg-deficient",
    consequences: "Falta de líquidos importante.",
    symptoms: ["Cansancio", "Orina oscura", "Fatiga"],
    recommendationTitle: "Recupera el ritmo",
    recommendationItems: [
      "Repón líquidos de manera estructurada durante el día.",
      "Si tuviste pérdida por ejercicio, calor o sudor intenso, puedes usar una bebida con electrolitos de forma puntual.",
      "Reduce bebidas que aportan poca hidratación real, como alcohol, energéticas o muchos refrescos."
    ]
  },
  {
    min: 50,
    max: 60,
    level: "Hidratación media 😐",
    className: "status-neutral",
    bodyClass: "bg-medium",
    consequences: "Hidratación algo deficiente.",
    symptoms: ["Poca energía", "Ligera sed"],
    recommendationTitle: "Pasa de regular a bien",
    recommendationItems: [
      "Toma un vaso de agua entre comidas y acompaña las comidas con agua simple.",
      "Usa el agua potable como tu bebida principal.",
      "Lleva una botella contigo para que hidratarte sea fácil y no se te olvide."
    ]
  },
  {
    min: 60,
    max: 80,
    level: "Hidratación apropiada 🙂",
    className: "status-good",
    bodyClass: "bg-appropriate",
    consequences: "Nivel funcional de hidratación.",
    symptoms: ["Buena concentración", "Orina clara"],
    recommendationTitle: "Vas bien, mantenlo",
    recommendationItems: [
      "Mantén una hidratación diaria constante y ajústala si hace calor o si haces más actividad física.",
      "Frutas, verduras, leche y sopas también aportan agua.",
      "Procura distribuir tus bebidas durante todo el día."
    ]
  },
  {
    min: 80,
    max: 100,
    level: "Excelente hidratación 💧✨",
    className: "status-excellent",
    bodyClass: "bg-excellent",
    consequences: "Excelente hidratación.",
    symptoms: ["Piel saludable", "Buena energía", "Orina clara"],
    recommendationTitle: "Excelente hábito",
    recommendationItems: [
      "Sigue distribuyendo líquidos durante el día.",
      "Ajusta tu consumo si cambian el clima, la intensidad del ejercicio o si pasas mucho tiempo al sol.",
      "Mantener agua simple como base sigue siendo la mejor estrategia."
    ]
  },
  {
    min: 100,
    max: Number.POSITIVE_INFINITY,
    level: "Hiperhidratación 😵",
    className: "status-over",
    bodyClass: "bg-over",
    consequences: "Posible sobrehidratación.",
    symptoms: ["Náuseas", "Hinchazón", "Confusión", "Debilidad"],
    recommendationTitle: "Baja un poco el ritmo",
    recommendationItems: [
      "No sigas tomando grandes volúmenes si ya vas muy por encima de tu necesidad estimada.",
      "Evita beber muchísimo en poco tiempo, especialmente durante ejercicio prolongado.",
      "Si presentas náuseas, confusión, hinchazón o dolor de cabeza, consulta a un profesional de salud."
    ]
  }
];

const DRINK_LOOKUP = DRINK_GROUPS.flatMap((group) => group.items).reduce((accumulator, drink) => {
  accumulator[drink.id] = drink;
  return accumulator;
}, {});

const ACTIVITY_EXTRA_LITERS = {
  sedentario: 0,
  ligero: 0.35,
  moderado: 0.7,
  intenso: 1.05
};

const drinkGroupsContainer = document.getElementById("drink-groups");
const categorySelect = document.getElementById("categoria-bebida");
const form = document.getElementById("hydration-form");
const resultsContainer = document.getElementById("resultados");
const pageBody = document.body;
const ageField = document.getElementById("edad");
const selectedDrinkState = {};

function renderCategoryOptions() {
  DRINK_GROUPS.forEach((group) => {
    const option = document.createElement("option");
    option.value = group.title;
    option.textContent = group.title;
    categorySelect.appendChild(option);
  });
}

function renderDrinkGroups(selectedCategory = "todas") {
  const visibleGroups = selectedCategory === "todas"
    ? DRINK_GROUPS
    : DRINK_GROUPS.filter((group) => group.title === selectedCategory);

  drinkGroupsContainer.innerHTML = visibleGroups.map((group) => `
    <article class="drink-group">
      <h3>${group.title}</h3>
      <small>${group.description}</small>
      <div class="drink-grid">
        ${group.items.map((drink) => `
          <label class="drink-option ${selectedDrinkState[drink.id]?.checked ? "is-selected" : ""}" data-drink-id="${drink.id}">
            <input type="checkbox" name="bebida" value="${drink.id}" ${selectedDrinkState[drink.id]?.checked ? "checked" : ""}>
            <span>
              <span class="drink-name">${drink.name}</span>
              <span class="drink-score">Puntaje de hidratación: ${drink.score}</span>
            </span>
            <span class="drink-amount" style="${selectedDrinkState[drink.id]?.checked ? "display: block;" : ""}">
              <label for="ml-${drink.id}">Cantidad exacta tomada (mL)</label>
              <input id="ml-${drink.id}" type="number" name="ml-${drink.id}" min="1" step="1" placeholder="Ej. 300" value="${selectedDrinkState[drink.id]?.ml || ""}" ${selectedDrinkState[drink.id]?.checked ? "" : "disabled"}>
            </span>
          </label>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function syncVisibleDrinkState() {
  document.querySelectorAll(".drink-option").forEach((option) => {
    const checkbox = option.querySelector('input[name="bebida"]');
    const amountInput = option.querySelector(".drink-amount input");

    selectedDrinkState[checkbox.value] = {
      checked: checkbox.checked,
      ml: checkbox.checked ? amountInput.value : ""
    };
  });
}

function handleDrinkSelection(event) {
  const checkbox = event.target.closest('input[name="bebida"]');
  if (!checkbox) return;

  const option = checkbox.closest(".drink-option");
  const amountInput = option.querySelector(".drink-amount input");

  option.classList.toggle("is-selected", checkbox.checked);
  amountInput.disabled = !checkbox.checked;

  selectedDrinkState[checkbox.value] = {
    checked: checkbox.checked,
    ml: checkbox.checked ? amountInput.value : ""
  };

  if (!checkbox.checked) {
    amountInput.value = "";
  } else {
    amountInput.focus();
  }
}

function handleDrinkAmountInput(event) {
  const amountInput = event.target.closest(".drink-amount input");
  if (!amountInput) return;

  const option = amountInput.closest(".drink-option");
  const drinkId = option.dataset.drinkId;

  selectedDrinkState[drinkId] = {
    checked: true,
    ml: amountInput.value
  };
}

function calculateBaseLiters({ gender, weight }) {
  const mlPerKg = gender === "masculino" ? 35 : 31;
  return (weight * mlPerKg) / 1000;
}

function calculateEffectiveIntake(selectedDrinks) {
  return selectedDrinks.reduce((total, entry) => {
    return total + ((entry.ml * entry.score) / 100);
  }, 0);
}

function calculateTotalConsumedMl(selectedDrinks) {
  return selectedDrinks.reduce((total, entry) => total + entry.ml, 0);
}

function getHydrationStatus(percentage) {
  const safePercentage = Math.max(0, percentage);
  return HYDRATION_STATUS.find((status) => safePercentage >= status.min && safePercentage <= status.max)
    || HYDRATION_STATUS[HYDRATION_STATUS.length - 1];
}

function calculateHydrationPercentage(effectiveIntakeMl, recommendedLiters) {
  const recommendedMl = recommendedLiters * 1000;
  if (recommendedMl <= 0) return 0;
  return Math.max(0, (effectiveIntakeMl / recommendedMl) * 100);
}

function updateBodyBackground(bodyClass) {
  pageBody.classList.remove("bg-low", "bg-deficient", "bg-medium", "bg-appropriate", "bg-excellent", "bg-over");
  if (bodyClass) pageBody.classList.add(bodyClass);
}

function buildGeneralHydrationMessage(selectedDrinks) {
  const takesWater = selectedDrinks.some((entry) => entry.category === "Agua");

  if (!selectedDrinks.length || !takesWater) {
    return "💡 Consejo general: si casi no estás tomando agua simple, empieza hoy mismo. Llevar una botella y dar sorbos a lo largo del día suele funcionar mejor que intentar compensar todo al final.";
  }

  return "💡 Consejo general: ya estás incluyendo agua, y eso es una gran base. Mantén ese hábito y ajústalo cuando haga calor, hagas ejercicio o pases más tiempo fuera.";
}

function renderResults(data) {
  const {
    baseLiters,
    extraLiters,
    totalRecommendedLiters,
    totalRecommendedGlasses,
    totalConsumedMl,
    effectiveIntakeMl,
    percentage,
    status,
    selectedDrinks
  } = data;

  const clampedWidth = Math.max(0, Math.min(percentage, 100));
  const generalMessage = buildGeneralHydrationMessage(selectedDrinks);
  const selectedNames = selectedDrinks.map((entry) => entry.name);

  updateBodyBackground(status.bodyClass);

  resultsContainer.innerHTML = `
    <div class="results-content">
      <h2>Resultados de hidratación</h2>

      <div class="results-top">
        <div class="metric-grid">
          <article class="metric-card">
            <h3>Agua base recomendada</h3>
            <div class="metric-value">${baseLiters.toFixed(2)} L</div>
            <p class="metric-note">Equivale a ${(baseLiters * 4).toFixed(1)} vasos de 250 mL.</p>
          </article>

          <article class="metric-card">
            <h3>Agua adicional por actividad</h3>
            <div class="metric-value">${extraLiters.toFixed(2)} L</div>
            <p class="metric-note">Se suma por el nivel de actividad física seleccionado.</p>
          </article>

          <article class="metric-card">
            <h3>Total recomendado</h3>
            <div class="metric-value">${totalRecommendedLiters.toFixed(2)} L</div>
            <p class="metric-note">${totalRecommendedGlasses.toFixed(1)} vasos de 250 mL al día.</p>
          </article>

          <article class="metric-card">
            <h3>Hidratación aportada por bebidas</h3>
            <div class="metric-value">${effectiveIntakeMl.toFixed(0)} mL</div>
            <p class="metric-note">${(effectiveIntakeMl / 1000).toFixed(2)} L de hidratación equivalente acumulada.</p>
          </article>

          <article class="metric-card">
            <h3>Total de líquidos consumidos</h3>
            <div class="metric-value">${totalConsumedMl.toFixed(0)} mL</div>
            <p class="metric-note">${(totalConsumedMl / 1000).toFixed(2)} L ingeridos sin aplicar puntaje de hidratación.</p>
          </article>
        </div>

        <article class="status-card">
          <h3>Estado de hidratación</h3>
          <div class="status-percentage">${percentage.toFixed(0)}%</div>
          <div class="status-level">${status.level}</div>
          <span class="status-pill ${status.className}">${status.level}</span>
          <div class="status-bar" aria-hidden="true">
            <div class="status-bar-fill ${status.className}" style="width: ${clampedWidth}%"></div>
          </div>
        </article>
      </div>

      <div class="insight-grid">
        <article class="insight-card">
          <h3>Consecuencias</h3>
          <p>${status.consequences}</p>
        </article>

        <article class="insight-card">
          <h3>Síntomas probables</h3>
          <ul>${status.symptoms.map((symptom) => `<li>${symptom}</li>`).join("")}</ul>
        </article>

        <article class="insight-card">
          <h3>Lectura rápida</h3>
          <p>
            ${percentage < 60
              ? "Tu consumo efectivo de líquidos está por debajo de lo ideal. Conviene priorizar agua natural, sueros o infusiones suaves."
              : percentage <= 100
                ? "Tu consumo actual se acerca a una hidratación funcional o excelente. Mantener bebidas con mejor aporte ayuda a sostenerlo."
                : "Tu consumo rebasa la meta diaria estimada. Si ocurre de forma constante, conviene moderar la ingesta total y vigilar síntomas."
            }
          </p>
        </article>
      </div>

      <article class="drink-breakdown">
        <h3>Detalle de hidratación aportada por bebidas</h3>
        <ul class="drink-breakdown-list">
          ${selectedDrinks.length ? selectedDrinks.map((entry) => `
            <li>${entry.name}: ${entry.ml.toFixed(0)} mL × ${entry.score} / 100 = ${entry.equivalentMl.toFixed(0)} mL de hidratación equivalente.</li>
          `).join("") : "<li>No seleccionaste bebidas.</li>"}
        </ul>
      </article>

      <article class="recommendation-card">
        <div class="recommendation-title">
          <span class="recommendation-badge ${status.className}">${status.level}</span>
          <span>${status.recommendationTitle}</span>
        </div>

        <ul class="recommendation-list">
          ${status.recommendationItems.map((item) => `<li>${item}</li>`).join("")}
        </ul>

        <p class="recommendation-general">${generalMessage}</p>

        <p class="recommendation-disclaimer">
          ⚕️ Estas recomendaciones son orientativas y ayudan a entender mejor tu resultado, pero no sustituyen la valoración de un profesional de la salud. Si presentas síntomas intensos, persistentes o dudas sobre tu hidratación, busca atención médica.
        </p>
      </article>

      <div class="selected-drinks">
        <strong>Bebidas seleccionadas:</strong> ${selectedNames.length ? selectedNames.join(", ") : "Ninguna"}
      </div>
    </div>
  `;
}

function renderPlaceholder() {
  updateBodyBackground("");
  resultsContainer.innerHTML = `
    <div class="results-placeholder">
      <h2>Resultados</h2>
      <p>Completa el formulario para ver tu recomendación de agua, tu porcentaje de hidratación y tu estado actual.</p>
    </div>
  `;
}

function validateForm({ gender, age, weight, activity }) {
  if (!gender) return "Selecciona tu género biológico.";
  if (!Number.isFinite(age) || age < 15 || age > 20) return "Ingresa una edad válida entre 15 y 20 años.";
  if (!Number.isFinite(weight) || weight < 30 || weight > 250) return "Ingresa un peso válido entre 30 y 250 kg.";
  if (!activity) return "Selecciona tu nivel de actividad física.";
  return "";
}

function collectSelectedDrinks() {
  const selectedIds = Object.keys(selectedDrinkState).filter((drinkId) => selectedDrinkState[drinkId].checked);

  return selectedIds.map((drinkId) => {
    const drink = DRINK_LOOKUP[drinkId];
    const ml = Number(selectedDrinkState[drinkId].ml);
    const group = DRINK_GROUPS.find((drinkGroup) => drinkGroup.items.some((item) => item.id === drinkId));

    return {
      ...drink,
      ml,
      category: group?.title || "",
      equivalentMl: Number.isFinite(ml) ? (ml * drink.score) / 100 : 0
    };
  });
}

function handleSubmit(event) {
  event.preventDefault();
  syncVisibleDrinkState();

  const gender = document.querySelector('input[name="bio"]:checked')?.value || "";
  const age = Number(document.getElementById("edad").value);
  const weight = Number(document.getElementById("peso").value);
  const activity = document.getElementById("actividad").value;
  const selectedDrinks = collectSelectedDrinks();

  const validationMessage = validateForm({ gender, age, weight, activity });
  if (validationMessage) {
    window.alert(validationMessage);
    return;
  }

  const invalidDrink = selectedDrinks.find((drink) => !Number.isFinite(drink.ml) || drink.ml <= 0);
  if (invalidDrink) {
    window.alert(`Ingresa una cantidad válida en mililitros para ${invalidDrink.name}.`);
    return;
  }

  const baseLiters = calculateBaseLiters({ gender, weight });
  const extraLiters = ACTIVITY_EXTRA_LITERS[activity] || 0;
  const totalRecommendedLiters = baseLiters + extraLiters;
  const totalRecommendedGlasses = totalRecommendedLiters / 0.25;
  const effectiveIntakeMl = calculateEffectiveIntake(selectedDrinks);
  const totalConsumedMl = calculateTotalConsumedMl(selectedDrinks);
  const percentage = calculateHydrationPercentage(effectiveIntakeMl, totalRecommendedLiters);
  const status = getHydrationStatus(percentage);

  renderResults({
    baseLiters,
    extraLiters,
    totalRecommendedLiters,
    totalRecommendedGlasses,
    totalConsumedMl,
    effectiveIntakeMl,
    percentage,
    status,
    selectedDrinks
  });
}

renderCategoryOptions();
renderDrinkGroups();

categorySelect.addEventListener("change", () => {
  syncVisibleDrinkState();
  renderDrinkGroups(categorySelect.value);
});

drinkGroupsContainer.addEventListener("change", handleDrinkSelection);
drinkGroupsContainer.addEventListener("input", handleDrinkAmountInput);

ageField.addEventListener("input", () => {
  const currentValue = ageField.value;
  if (currentValue === "") return;

  //const numericAge = Number(currentValue);
 // if (numericAge < 15) {
  //  ageField.value = "15";
  //} else if (numericAge > 20) {
   // ageField.value = "20";
 // }

  if (!Number.isFinite(age) || age < 15 || age > 20) {
  return "Ingresa una edad válida entre 15 y 20 años.";
}

});

form.addEventListener("submit", handleSubmit);

form.addEventListener("reset", () => {
  setTimeout(() => {
    Object.keys(selectedDrinkState).forEach((drinkId) => {
      delete selectedDrinkState[drinkId];
    });

    categorySelect.value = "todas";
    renderDrinkGroups();
    renderPlaceholder();
  }, 0);
});
