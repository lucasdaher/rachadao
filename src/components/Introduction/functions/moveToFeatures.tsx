export function moveToFeatures() {
  const featuresElement = document.getElementById("features");
  if (featuresElement) {
    featuresElement.scrollIntoView({ behavior: "smooth" });
  }
}
