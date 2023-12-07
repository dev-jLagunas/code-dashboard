/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/app.component.html",
    "src/app/technologies/technologies.component.html",
    "src/app/study-methods/study-methods.component.html",
    "src/app/stats/stats.component.html",
    "src/app/skill-progression/skill-progression.component.html",
    "src/app/intro/intro.component.html",
    "src/app/daily-schedule/daily-schedule.component.html",
    "src/app/certifications/certifications.component.html",
  ],
  theme: {
    extend: {
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
