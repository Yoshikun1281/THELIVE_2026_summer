// ===============================
// THE LIVE NEWS DATA
// ===============================

const newsData = [

    {
        type: "INFO",
        icon: "fa-circle-info",
        color: "sky",
        title: "試しにWebサイトを公開しました！",
        date: "2026.07.20",
        file: "news/20260720.html"
    },

    {
        type: "UPDATE",
        icon: "fa-clock",
        color: "emerald",
        title: "タイムテーブルを公開しました！",
        date: "2026.07.25",
        file: "news/20260725.html"
    },

    {
        type: "EVENT",
        icon: "fa-music",
        color: "pink",
        title: "出演バンドを公開しました！",
        date: "2026.08.01",
        file: "news/20260801.html"
    },

    {
        type: "PARTY",
        icon: "fa-champagne-glasses",
        color: "amber",
        title: "打ち上げ受付を開始しました！",
        date: "2026.08.03",
        file: "news/20260803.html"
    },

    {
        type: "LIVE",
        icon: "fa-video",
        color: "red",
        title: "YouTube配信URLを公開しました！",
        date: "2026.08.05",
        file: "news/20260805.html"
    }

];


// ===============================
// 最新5件表示
// ===============================

const newsContainer = document.getElementById("news-list");

if(newsContainer){

    newsData.slice(0,5).forEach(news=>{

        newsContainer.innerHTML += `

<a href="${news.file}"
class="block bg-pastel-bg border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition">

<div class="flex justify-between items-center">

<div>

<div class="flex items-center gap-3">

<span class="bg-pastel-${news.color}
text-${news.color}-900
text-xs
font-bold
px-2.5
py-0.5
rounded-md">

<i class="fa-solid ${news.icon} mr-1"></i>

${news.type}

</span>

<span class="font-bold text-slate-800">

${news.title}

</span>

</div>

<p class="text-xs text-slate-500 mt-2">

${news.date}

</p>

</div>

<i class="fa-solid fa-chevron-right text-slate-400"></i>

</div>

</a>

`;

    });

}
