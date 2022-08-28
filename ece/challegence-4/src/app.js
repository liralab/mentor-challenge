const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

// tıkladığında rengi beyaz kalma olayı için - list_click
const list_click = document.querySelectorAll(".card-content a");
// bunu yazma sebebim id ="daily","weekly","monthly" için ayrı ayrı fonksiyonlar oluşturmamak.
const list_çevresi = document.querySelector(".card-content ul");
const saat = document.querySelectorAll(".hours span");
const last_time = document.querySelectorAll(".last-week .time");
const last=document.querySelectorAll(".last-week .period")

//console.log(saat)  - 5 tane kartın nodelist

function showData(which_time) {
  const weeklyAmount = data.map((which_card, index) => {
    const { title } = which_card;
    // console.log(title);
    /*  output:Work
    Play
    Study
    Exercise
    Social
    Self Care */
    // console.log(which_card.timeframes.daily)

    //    current and previous for daily
    const { current, previous } = which_card.timeframes.daily;
    //console.log(current,previous)
    //    current and previous for weekly
    const { current: current_weekly, previous: previous_weekly } =
      which_card.timeframes.weekly;
    // console.log(current_weekly)
    const { current: current_monthly, previous: previous_monthly } =
      which_card.timeframes.monthly;

    if (which_time === "daily") {
      // hangi karttaki saat ve last ? so index.
      saat[index].textContent = current;
      last_time[index].textContent = previous;
      last[index].textContent="Day -"
    }
    if (which_time === "weekly") {
      saat[index].textContent = current_weekly;
      last_time[index].textContent = previous_weekly;
      last[index].textContent="Week -"
    }
    if (which_time === "monthly") {
      saat[index].textContent = current_monthly;
      last_time[index].textContent = previous_monthly;
      last[index].textContent="Month -"
    }
  });
}
// showData();

list_çevresi.addEventListener("click", (e) => {
  const lıst_ıd = e.target.id;
  //daily,weekly,monthly den hangisine tıkladığımı anlamak için kontrol ettim.
  //console.log(lıst_ıd);
  list_click.forEach((a) => {
    a.classList.remove("active");
    e.target.style.color = "white";

  });

  list_çevresi.addEventListener("dblclick", () => {
    list_click.forEach((a) => {
      a.style.color = "hsl(235, 45%, 61%)";
    });
  });

  switch (lıst_ıd) {
    case "daily":   //lıst_ıd === "daily"
      showData(lıst_ıd);
      break;
    case "weekly":
      showData(lıst_ıd);
      break;

    case "monthly":
      showData(lıst_ıd);
      break;

    default:
      alert("lütfen doğru yere tıkladığınızdan emin olun ve tekrar deneyiniz");
  }



});
