// ===============================
// THE LIVE NEWS DATA
// ===============================

const newsData = [
    {
        id: 0,
        type: "INFO",
        badgeClass: "bg-sky-100 text-sky-800",
        icon: "fa-circle-info",
        title: "試しにWebサイトを公開しました！",
        date: "2026.07.20",
        image: "",
        content: `
<p>THE LIVE2026夏の特設Webサイトを公開しました！</p>

<p>今後はこちらで</p>

<ul class="list-disc ml-6">
    <li>タイムテーブル</li>
    <li>出演バンド</li>
    <li>グッズ情報</li>
    <li>各種お知らせ</li>
</ul>

<p>などを更新していきます。</p>
`
    },

    {
        id: 1,
        type: "UPDATE",
        badgeClass: "bg-emerald-100 text-emerald-800",
        icon: "fa-clock",
        title: "タイムテーブルを公開しました！",
        date: "2026.07.25",
        image: "",
        content: `
<p>タイムテーブルを公開しました。</p>

<p>出演時間をご確認のうえ、ご来場ください。</p>
`
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

// ===============================
// NEWS一覧ページ
// ===============================

const newsAll = document.getElementById("news-all");

if(newsAll){

    newsData.forEach(news=>{

        newsAll.innerHTML += `

<a href="${news.file}"

class="block bg-white rounded-2xl border border-slate-200
p-6 hover:shadow-md hover:-translate-y-1 transition">

<div class="flex justify-between items-center">

<div>

<div class="flex items-center gap-3">

<span class="bg-pastel-${news.color}
text-${news.color}-900
px-2.5
py-1
rounded-md
text-xs
font-bold">

<i class="fa-solid ${news.icon} mr-1"></i>

${news.type}

</span>

<span class="font-bold text-lg">

${news.title}

</span>

</div>

<p class="text-sm text-slate-500 mt-3">

${news.date}

</p>

</div>

<i class="fa-solid fa-chevron-right text-slate-400"></i>

</div>

</a>

`;

    });

}
