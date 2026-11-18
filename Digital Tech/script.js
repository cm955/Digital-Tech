var SV = [
  [
    "🔍",
    "Search Engine Optimization (SEO)",
    "Improve website visibility and organic search rankings.",
  ],
  [
    "📢",
    "Search Engine Marketing (SEM)",
    "Build effective search marketing campaigns.",
  ],
  [
    "🎯",
    "Google Ads",
    "Reach potential customers through targeted Google advertising.",
  ],
  [
    "📱",
    "Facebook & Instagram Ads",
    "Run targeted Meta advertising campaigns to reach relevant audiences.",
  ],
  [
    "👥",
    "Social Media Marketing",
    "Build brand awareness, engagement and an online presence.",
  ],
  [
    "📈",
    "Lead Generation",
    "Create campaigns designed to attract potential customers and business enquiries.",
  ],
];
var DF = [
  [
    "🎓",
    "Practical IT Training",
    "Hands-on learning with real projects, not just theory.",
  ],
  ["🎯", "ROI-Focused Marketing", "We focus on results, not vanity metrics."],
  [
    "📊",
    "Performance-Based Strategy",
    "Data-driven approach with continuous optimization.",
  ],
  [
    "📍",
    "Local Market Expertise",
    "We know what works for gyms, clinics, spas and repair shops.",
  ],
  [
    "🧾",
    "Transparent Reporting",
    "Regular reports with detailed analytics and insights.",
  ],
  [
    "💰",
    "Affordable Pricing",
    "Flexible packages designed for startups to enterprises.",
  ],
];
var CM = [
  "Live 1-on-1 online classes",
  "Hands-on practical projects",
  "Certification provided",
  "Career guidance & learning roadmap",
  "Marketing experience with local businesses",
  "Transparent campaign reporting",
  "Training and marketing under one team",
  "Direct access to your trainer",
];
var CS = [
  [
    "Data Analysis",
    "Data",
    "Live Online",
    "📊",
    "Python, SQL, Excel & Power BI",
    "Real projects & certificate",
    "Python for data analysis|SQL & database management|Advanced Excel|Microsoft Power BI dashboards|Real-world projects & portfolio",
    "The complete data analysis program, taught 1-on-1 with hands-on projects. Ideal for a career change or a first job after college.",
  ],
  [
    "Digital Marketing",
    "Marketing",
    "Live Online",
    "📣",
    "SEO, Google & Meta Ads",
    "Real campaign practice",
    "SEO & SEM basics|Google Ads|Facebook & Instagram Ads|Social media marketing|Lead generation|Analytics & reporting",
    "Learn to run campaigns that bring real enquiries, from an instructor who runs them for local businesses.",
  ],
  [
    "Advanced Excel",
    "Data",
    "Live Online",
    "📗",
    "Formulas, Pivots & Macros",
    "Solve real business problems",
    "Advanced formulas & lookups|Pivot tables & charts|Dashboards|Macros & VBA basics|Data cleaning & automation",
    "Go beyond basic Excel and learn to solve real reporting and business problems.",
  ],
  [
    "Power BI",
    "Data",
    "Live Online",
    "📈",
    "Interactive dashboards",
    "DAX & data modelling",
    "Importing & cleaning data|Data modelling|DAX basics|Interactive dashboards|Publishing & sharing reports",
    "Turn raw data into dashboards that managers can understand at a glance.",
  ],
  [
    "Python",
    "Programming",
    "Live Online",
    "🐍",
    "Basics to automation",
    "Mini projects",
    "Python fundamentals|Functions & OOP|Data handling with Pandas|Automation scripts|Mini projects",
    "Learn Python from scratch with practical exercises you can use for data work and automation.",
  ],
  [
    "MySQL",
    "Data",
    "Live Online",
    "🗄️",
    "Queries & database design",
    "Joins & optimisation",
    "Database design|SELECT, JOIN & subqueries|Aggregations & views|Stored procedures|Query optimisation basics",
    "Learn to design databases and write confident SQL queries, explained step by step.",
  ],
  [
    "Java",
    "Programming",
    "Live Online",
    "☕",
    "Core Java & OOP",
    "Practice problems",
    "Core Java & OOP|Collections & exceptions|File handling|Java for automation testing|Practice problems",
    "A solid Java foundation for development and for moving into automation testing.",
  ],
  [
    "Selenium",
    "Testing & DevOps",
    "Live Online",
    "🧪",
    "Web automation testing",
    "Framework building",
    "Selenium WebDriver|Locators & waits|TestNG framework|Page Object Model|Building a test framework",
    "Learn to automate browser testing and build a framework the way QA teams do.",
  ],
  [
    "Postman",
    "Testing & DevOps",
    "Live Online",
    "📮",
    "API testing",
    "Automated API runs",
    "API & REST basics|Collections & variables|Test scripts & assertions|Environments|Automated runs with Newman",
    "Learn to test APIs quickly and reliably with Postman.",
  ],
  [
    "Jenkins (CI/CD)",
    "Testing & DevOps",
    "Live Online",
    "⚙️",
    "CI/CD pipelines",
    "Run tests automatically",
    "CI/CD concepts|Installing & configuring Jenkins|Build pipelines|Running automated tests in a pipeline|Scheduling & reports",
    "Automate your builds and test runs with Jenkins CI/CD pipelines.",
  ],
];
var GR = [
  "linear-gradient(135deg,#0a1a5c,#2a5cf0)",
  "linear-gradient(135deg,#d99a00,#ffd54a)",
  "linear-gradient(135deg,#1d4ed8,#8fb8ff)",
  "linear-gradient(135deg,#07123a,#1d4ed8)",
];
function $(i) {
  return document.getElementById(i);
}
$("svc").innerHTML = SV.map(function (s) {
  return (
    '<div class="card"><div class="ic">' +
    s[0] +
    "</div><h3>" +
    s[1] +
    "</h3><p>" +
    s[2] +
    '</p><a class="m" href="#contact">Learn More →</a></div>'
  );
}).join("");
$("diff").innerHTML = DF.map(function (s) {
  return (
    '<div class="card"><div class="ic">' +
    s[0] +
    "</div><h3>" +
    s[1] +
    "</h3><p>" +
    s[2] +
    "</p></div>"
  );
}).join("");
$("cmp").innerHTML = CM.map(function (c) {
  return (
    "<tr><td>" + c + '</td><td class="ok">✓</td><td class="no">✕</td></tr>'
  );
}).join("");
var cat = "All",
  cats = ["All", "Data", "Marketing", "Programming", "Testing & DevOps"];
$("fl").innerHTML = cats
  .map(function (c) {
    return (
      '<button type="button" class="f" data-c="' + c + '">' + c + "</button>"
    );
  })
  .join("");
function draw() {
  var t = $("q").value.toLowerCase();
  $("cl").innerHTML =
    CS.filter(function (c) {
      return (
        (cat == "All" || c[1] == cat) && c[0].toLowerCase().indexOf(t) > -1
      );
    })
      .map(function (c, i) {
        return (
          '<div class="card sc cc"><div class="t"><div class="ph" style="background:' +
          GR[i % 4] +
          '">' +
          c[3] +
          "</div><span>" +
          c[2] +
          '</span></div><div class="bd"><span class="k">' +
          c[1] +
          "</span><h3>" +
          c[0] +
          "</h3><ul><li>✔ " +
          c[4] +
          "</li><li>✔ " +
          c[5] +
          '</li></ul><button type="button" class="vd" data-i="' +
          CS.indexOf(c) +
          '">View Details →</button></div></div>'
        );
      })
      .join("") ||
    '<p class="sub" style="grid-column:1/-1">No courses match. Try another search.</p>';
  Array.prototype.forEach.call(document.querySelectorAll(".f"), function (b) {
    b.classList.toggle("on", b.dataset.c == cat);
  });
}
$("fl").onclick = function (e) {
  if (e.target.dataset.c) {
    cat = e.target.dataset.c;
    draw();
  }
};
$("q").oninput = draw;
draw();
function openM(i) {
  var c = CS[i];
  $("mt").textContent = c[0];
  $("mp").textContent = c[7];
  $("ml").innerHTML = c[6]
    .split("|")
    .map(function (t) {
      return "<li>" + t + "</li>";
    })
    .join("");
  $("me").href =
    "https://wa.me/919730366722?text=" +
    encodeURIComponent(
      "Hi Digital Tech, I want to enroll in the " +
        c[0] +
        " course. Please share batch timing and fees.",
    );
  $("md").hidden = false;
  $("mx").focus();
}
$("cl").onclick = function (e) {
  var b = e.target.closest(".vd");
  if (b) openM(b.dataset.i);
};
$("mx").onclick = function () {
  $("md").hidden = true;
};
$("md").onclick = function (e) {
  if (e.target == this) this.hidden = true;
};
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") $("md").hidden = true;
});
function route() {
  var h = (location.hash || "#home").slice(1),
    sv = h == "services";
  if (sv) h = "home";
  if (!$("p-" + h)) h = "home";
  Array.prototype.forEach.call(document.querySelectorAll(".pg"), function (p) {
    p.classList.toggle("on", p.id == "p-" + h);
  });
  Array.prototype.forEach.call(
    document.querySelectorAll("nav a"),
    function (a) {
      a.classList.toggle("on", a.dataset.r == (sv ? "services" : h));
    },
  );
  $("nav").classList.remove("open");
  if (sv) {
    $("services").scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
}
window.addEventListener("hashchange", route);
route();
$("mb").onclick = function () {
  $("nav").classList.toggle("open");
};

// GOOGLE SHEETS BACKEND URL
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

// WhatsApp business number
const WHATSAPP_NUMBER = "919730366722";

// Submit enquiry

async function submitEnquiry(form, endpoint, title, fieldMap) {
  const data = new FormData(form);
  const payload = {};

  // Convert the existing HTML field names into API field names.
  Object.entries(fieldMap).forEach(([formField, apiField]) => {
    payload[apiField] = data.get(formField) || "";
  });

  // Open a blank tab immediately to avoid popup blocking later.
  const whatsappTab = window.open("about:blank", "_blank");

  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.detail
          ? JSON.stringify(result.detail)
          : "Unable to save your enquiry."
      );
    }

    // Prepare the WhatsApp message using the original form values.
    let message = `New ${title} - Digital Tech\n`;

    data.forEach((value, key) => {
      if (value) {
        message += `${key}: ${value}\n`;
      }
    });

    const whatsappURL =
      "https://wa.me/919730366722?text=" +
      encodeURIComponent(message);

    if (whatsappTab) {
      whatsappTab.location.href = whatsappURL;
    } else {
      window.location.href = whatsappURL;
    }

    alert("Your enquiry has been saved successfully!");

    form.reset();

  } catch (error) {
    console.error("Enquiry submission error:", error);

    if (whatsappTab) {
      whatsappTab.close();
    }

    alert(
      "We couldn't submit your enquiry. Please try again.\n" +
      error.message
    );

  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}

// General Enquiry Form
const generalForm = document.getElementById("f1");

if (generalForm) {
  generalForm.addEventListener("submit", function (e) {
    e.preventDefault();

    submitEnquiry(
      this,
      "http://127.0.0.1:8000/api/enquiries/general",
      "Enquiry",
      {
        Name: "name",
        Phone: "phone",
        Email: "email",
        Service: "service",
        Message: "message"
      }
    );
  });
}

// Business Consultation Form
const businessForm = document.getElementById("f2");

if (businessForm) {
  businessForm.addEventListener("submit", function (e) {
    e.preventDefault();

    submitEnquiry(
      this,
      "http://127.0.0.1:8000/api/enquiries/business",
      "Business Consultation",
      {
        Company: "company",
        Contact: "contact",
        Phone: "phone",
        Email: "email",
        Business: "business",
        Budget: "budget",
        Message: "message"
      }
    );
  });
}
