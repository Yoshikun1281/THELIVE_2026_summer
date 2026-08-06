// ===============================
// THE LIVE Timetable API
// ===============================

const API_URL =
"https://script.google.com/macros/s/AKfycby8W9mOGSUR2fIRg5Zb-Ae_aXMG4_UUOzch1EoXCkTZx61KvjNUpM144au2OONwCYiVsA/exec";

loadDay(1);

// ===============================

async function loadDay(day){

    const response =
        await fetch(`${API_URL}?day=${day}`);

    const timetable =
        await response.json();

    createTimetable(timetable);

}

// ===============================

function createTimetable(data){

    const panel =
        document.getElementById("day1-panel");

    if(!panel) return;

    panel.innerHTML = "";

    data.forEach(item=>{

        panel.innerHTML += `

<div class="grid grid-cols-12 gap-3 py-4 border-b border-slate-200">

    <div class="col-span-3 font-bold">

        ${item.start}<br>

        <span class="text-slate-400 text-xs">

        ${item.end}

        </span>

    </div>

    <div class="col-span-9">

        <p class="font-bold text-lg">

            ${item.band}

        </p>

        <p class="text-sm text-slate-500">

            ${item.artist}

        </p>

    </div>

</div>

`;

    });

}
