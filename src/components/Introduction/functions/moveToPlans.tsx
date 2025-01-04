export function moveToPlans() {
  const plansElement = document.getElementById("plans");
  if (plansElement) {
    plansElement.scrollIntoView({ behavior: "smooth" });
  }
}
