let forcing = false;

export function ForceScrollUpdate() { // forces an update of useScroll()
  window.scrollBy(0, 1);
  window.scrollBy(0, -1);
}

export function ForceScrollUpdateForDuration(duration) { // continuously forces useScroll() updates for the duration of an animation
                                                         // Doesn't spawn another interval if one is already active
  if (!forcing) {
    forcing = true
    const interval = setInterval(() => ForceScrollUpdate(), 50);
    setTimeout(() => {
      clearInterval(interval);
      forcing = false
    }, duration);
  }
}
