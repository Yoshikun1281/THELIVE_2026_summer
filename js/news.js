// ===============================
// THE LIVE NEWS DATA
// ===============================

const newsData = [
    {
    id: 3,
    type: "EVENT",
    badgeClass: "bg-pink-100 text-pink-800",
    icon: "fa-music",
    title: "THE LIVE MTを開催！",
    date: "2026.08.03",
    image: "thelive_flyer1.jpg",
    content: `
<p><strong>8月5日（水）19:30</strong>より、<strong>文サ館A室</strong>にて<strong>THE LIVE MT</strong>を開催します！</p>

<p>春学期もそろそろ終わり、いよいよTHE LIVE夏が到来です！</p>

<p>MTでは、タイムテーブルの発表や隊別ミーティングを行います。</p>

<p>出演者はもちろん、THE LIVEに興味のある方も大歓迎です！A室で会いましょう。</p>
`
},
    {
    id: 2,
    type: "IMPORTANT",
    badgeClass: "bg-red-100 text-red-800",
    icon: "fa-triangle-exclamation",
    title: "THE LIVE本エントリーと打ち上げエントリーの締切について",
    date: "2026.08.02",
    image: "",
    content: `
<p><strong>THE LIVE本エントリー</strong>および<strong>打ち上げエントリー</strong>の締切は、<strong>8月3日</strong>となっています！</p>

<p>現在、まだ回答数が少ない状況です。</p>

<p>期限までに忘れずフォームの提出をお願いいたします。</p>
`
},
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

 

];
// ===============================
// 最新5件表示
// ===============================

const newsContainer = document.getElementById("news-list");

if(newsContainer){

    newsData.slice(0,5).forEach(news=>{

        newsContainer.innerHTML += `

<a href="article.html?id=${news.id}"
class="block bg-pastel-bg border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition">

<div class="flex justify-between items-center">

<div>

<div class="flex items-center gap-3">

<span class="${news.badgeClass} text-xs font-bold px-2.5 py-1 rounded-md">
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

<a href="article.html?id=${news.id}"

class="block bg-white rounded-2xl border border-slate-200
p-6 hover:shadow-md hover:-translate-y-1 transition">

<div class="flex justify-between items-center">

<div>

<div class="flex items-center gap-3">

<span class="${news.badgeClass} text-xs font-bold px-2.5 py-1 rounded-md">
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
